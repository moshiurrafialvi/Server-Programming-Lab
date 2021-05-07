const http = require("http");
const data = require("./loadContent");

const myserver = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(data.loadData.indexHTML);
  } else if (req.url == "/about") {
    res.end(data.loadData.aboutHTML);
  } else if (req.url == "/blog") {
    res.end(data.loadData.blogHTML);
  } else if (req.url == "/contact") {
    res.end(data.loadData.contactHTML);
  } else if (req.url == "/services") {
    res.end(data.loadData.servicesHTML);
  } else if (req.url == "/pricing") {
    res.end(data.loadData.pricingHTML);
  } else if (req.url == "/work") {
    res.end(data.loadData.workHTML);
  } else {
    res.end("<h1>This Page does not exist</h1>");
  }
});

module.exports = { myserver };
