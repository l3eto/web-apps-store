var fs = require("fs");
//import url from 'url';

export default (req, res, next) => {
  //const path = url.parse(req.url).pathname;
  //const segments = path.split('/');
  //const name = segments[1];
  const json = JSON.parse(fs.readFileSync(`static/projects/data.json`));
  return res.end(JSON.stringify(json));
};