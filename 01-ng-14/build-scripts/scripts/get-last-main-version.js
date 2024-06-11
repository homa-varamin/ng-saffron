const nodeCmd = require("node-cmd");

async function getLastMainVersion() {
  const promise = new Promise((resolve) => {
    console.log("\nGetting Last Published Main Version ... \n");

    const getAllVersionsCommand =
      "npm show sadad-cheque-ui-component versions --json --registry http://192.168.11.23";

    try {
      nodeCmd.run(getAllVersionsCommand, (err, data, stderr) => {
        let versionsArray = JSON.parse(data);
        const lastMainVersion = versionsArray
          .slice()
          .reverse()
          .find((x) => !x.includes("beta"));

          resolve(lastMainVersion);
      });
    } catch (err) {
      process.exit(1);
    }
  });

  return promise;
}

module.exports = getLastMainVersion;
