const nodeCmd = require("node-cmd");
const getLastMainVersion = require("./get-last-main-version");
const setBetaVersion = require("./set-beta-version");
const updateVersion = require("./update-version");

const isBetaVersion = process.argv.slice(2).at(0) || false;

(async () => {
  if (isBetaVersion === "true" || isBetaVersion === true) {
    await setBetaVersion();
  } else {
    await setMainVersion();
  }
  process.exit(0);
})();

async function setMainVersion() {
  const lastMainVersion = await getLastMainVersion();
  console.log(`The Last Published Main Version is '${lastMainVersion}'\n`);
  setNextVersion(lastMainVersion);
}

function setNextVersion(data) {
  const { first, second, third } = getVersionParts(data);
  const nextVersion = getNextVersion(first, second, third);

  updateVersion(nextVersion, false);
}

function getVersionParts(data) {
  const versionParts = data.split(".");
  const first = +versionParts[0];
  const second = +versionParts[1];
  const third = +versionParts[2];

  return { first, second, third };
}

function getNextVersion(first, second, third) {
  if (third >= 9999) {
    third = 0;
    second++;
  } else {
    third++;
  }

  if (second >= 999) {
    second = 0;
    first++;
  }

  return `${first}.${second}.${third}`;
}
