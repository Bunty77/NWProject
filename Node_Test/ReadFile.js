var fs = require('fs');
fs.readFile('TestData.txt','utf8',function(err, data){
    if(err) throw err;
    console.log(data);
});

fs.writeFile('TestFile.txt','Sample Node Application Test',function(err,data)

{
    if(err)
    console.log(err);
    else
    console.log('Data Writen Successfully');
}

);