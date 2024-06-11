const getLastMainVersion = require("./get-last-main-version");

(async () => {
  const lastMainVersion = await getLastMainVersion();
  console.log(`The Last Published Main Version is '${lastMainVersion}'\n`);
})();
