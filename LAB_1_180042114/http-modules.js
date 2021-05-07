

const http = require ('http')

const server = http.createServer((req,res)=>{
   
    // res.write("<h1>This is a test server</h1>Hello");
  
    if(req.url=='/'){
        res.write("<h1>This is base Url</h1>");
        res.end();
    }
    else if(req.url=='/home'){
        res.write("<h1>This is home page</h1>");
        res.end();
    }
    else{
        res.write("<h1>This is non-existing</h1><br><a href = '/'>Go back to base URL</a>");
        res.end();
    }
});

module.exports={server};