const fs = require('fs');
exports.log = (msg,obj) => {
    if(process.env.DEBUG){
      if(obj == undefined){
        console.log(msg);
        fs.appendFile('logs/output.log', msg, () => {
        });
      }else{
        console.log(msg,obj);
        fs.appendFile('logs/output.log', msg, () => {
        });
      }
    }
}
