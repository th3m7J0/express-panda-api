const checker = require('./checker');

module.exports = {
    flexible: (body)=>{
        let updatedData = {};
        for(const item in body){
            if(checker.exist(body[item])){
                updatedData[item] = body[item];
            }
        }
        return updatedData;
    }
}
