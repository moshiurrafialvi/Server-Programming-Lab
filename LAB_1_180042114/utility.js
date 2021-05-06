const HelloFunc = require("./helloWorld");

//setInterval

setInterval(() => {
  HelloFunc.Hello();
}, 1000);

//setTimeout

setTimeout(() => {
  console.log(HelloFunc.name);
}, 5000);

//Local Module= Files that are situated locally
//Global Module=fs,os,http etc. Module that are by default installed
//3rd Party Moodule/Package
