var db = require('../config/connection')
var collection=require('../config/collections')
module.exports={
    ledgerhead:(masters,callback)=>{
        db.get().collection('masters').insertOne(masters).then((data)=>{
            callback(data.ops[0])  
        })


    },
        getAllProduct:()=>{
            return new Promise(async(resolve,reject)=>{               
                let masters= await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
                resolve(masters)
            })



    }
}
