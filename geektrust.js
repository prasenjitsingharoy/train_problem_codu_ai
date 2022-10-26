// required imports
const fs = require("fs");
const Train = require('./train');

// extracting the filename and reading it
try{
    const filename = process.argv[2];
    const data = fs.readFileSync(filename).toString();
    
    // creating instance of vehicle class (named Train while importing) and calling the member function 'main'
    let train = new Train();
    train.getDepartureTrain(data)
}catch(error){
    console.error('No such file or directory!');
}