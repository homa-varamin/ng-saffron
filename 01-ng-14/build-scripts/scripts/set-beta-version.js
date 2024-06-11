const path = require("path");
const fs = require("fs");
const nodeCmd = require("node-cmd");
const updateVersion = require("./update-version");

async function setBetaVersion() {
  const betaNames = getBetaVersionNames();
  const versions = await getVersionsArray();
  const versionsArray = JSON.parse(versions);

  const nextNumber = getNextBetaNumber(
    versionsArray,
    betaNames.prefixNumber,
    betaNames.betaName
  );

  const nextBetaVersion = `${betaNames.prefixNumber}-beta-${betaNames.betaName}.${nextNumber}`;
  updateVersion(nextBetaVersion, true);
}

function getNextBetaNumber(versionsArray, prefixNumber, betaName) {
  versionsArray = versionsArray || [];
  const betaPrefix = `${prefixNumber}-beta-${betaName}.`;

  const publishedBetaVersions = versionsArray.filter((x) =>
    x.startsWith(betaPrefix)
  );

  let nextNumber = 1;

  if (publishedBetaVersions.length !== 0) {
    nextNumber = findMaxBetaVersion(publishedBetaVersions, betaPrefix);
  }

  return nextNumber;
}

function findMaxBetaVersion(publishedBetaVersions, betaPrefix) {
  let maxVersion = -1;

  publishedBetaVersions.forEach((publishedBetaVersion) => {
    let betaVersion = publishedBetaVersion.replace(betaPrefix, "");
    betaVersion = +betaVersion;
    if (maxVersion < betaVersion) {
      maxVersion = betaVersion;
    }
  });

  return maxVersion + 1;
}

async function getVersionsArray() {
  const promise = new Promise((resolve) => {
    const getVersionsCommand =
      "npm show sadad-cheque-ui-component versions --json --registry http://192.168.11.23";

    console.log("\nGetting All Versions Array ... \n");
    try {
      nodeCmd.run(getVersionsCommand, (err, data, stderr) => {
        resolve(data);
      });
    } catch {
      process.exit(1);
    }
  });

  return promise;
}

function getBetaVersionNames() {
  const configFilePath = path.resolve(
    __dirname,
    "..",
    "..",
    "beta-version.config.json"
  );

  const betaVersionConfig = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
  const prefixNumber = betaVersionConfig["beta-version-prefix"];
  const betaName = betaVersionConfig["beta-version-name"];

  return { prefixNumber, betaName };
}

module.exports = setBetaVersion;
