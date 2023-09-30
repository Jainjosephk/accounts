var db = require('../config/connection')
var collection=require('../config/collections')
module.exports={
    ledgerhead:(masters,callback)=>{
        db.get().collection('masters').insertOne(masters).then((data)=>{
            callback(data.ops[0])  
        })
    }
}

