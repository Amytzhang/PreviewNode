let { readFile } = require("./utils/fsPromise");

readFile("./http/one.js")
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    console.log(reason);
  });
