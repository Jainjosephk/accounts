const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}
//MongoClient.connect('mongodb://127.0.0.1:27017/',{useUnifiedTopology:true},function(err,client) {
module.exports.connect=function(done){

    const url ='mongodb://127.0.0.1:27017'  // run mongod on command prompt before this 
    const dbname = 'accounts'
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
            state.db=data.db(dbname)
        done()
    })
}
module.exports.get=function(){
    return state.db
}