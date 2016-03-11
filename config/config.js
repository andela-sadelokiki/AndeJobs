"use strict";

module.exports = {
  'secret': 'susanspassword'
  // 'database': 'mongodb://localhost:27017/dms-bk'
};
module.exports = require("./env/" + process.env.NODE_ENV + ".js");
