const fs = require("fs");

 fs.writeFileSync("./contents/demofile.txt", "We are learning node");
fs.appendFileSync("./contents/demofile.txt", "We are learning JS");
 

 fs.rename("./contents/demofile.txt", "./contents/renamefile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
 

 fs.readFile("contents/renamefile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); 



 console.log("before"); */

 fs.readFile("contents/renamefile.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    } else {
        fs.appendFile(
            'contents/renamefile.txt', 
            'Is this a synchronus process?',
                (err) =>{
                    if(err){
                        console.log(err);
                    }
                }
            )

        fs.readFile(
            "contents/renamefile.txt","utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            })
    }
});

console.log('After') ;



//Delete File
fs.unlink("contents/renamefile.txt",(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("deleted file successfully");
  }

});
