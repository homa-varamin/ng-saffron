const fs = require("fs");

function updateVersion(nextVersion, isBeta) {
  const packagePath = "../../dist/sadad-cheque-ui-component/package.json";
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  packageJson.version = nextVersion;
  const packageJsonString = JSON.stringify(packageJson, null, 4);

  fs.writeFileSync(packagePath, packageJsonString, "utf8");
  const version = isBeta ? "Beta" : "Main";
  console.log(`Your Next Published ${version} Version Would Be: \n\'${nextVersion}\'\n`);
}

module.exports = updateVersion;
