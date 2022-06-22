const {MongoClient, ObjectId} = require('mongodb')
const uri = process.env.MONGO_URI
let client = new MongoClient(uri)

const connectDB = async (client) => {
    try{
        const client = new MongoClient(uri)
        const conCluster = await client.connect()
        const conDb = conCluster.db('urlShortenerDB').collection('shortUrl')
        console.log('database connected')
        //console.log(await client.db().admin().listDatabases())
        return {conCluster, conDb}

    }catch(err){
        console.error(err.message)
    }
}

const insertDB = async(item) => {
    try{
        const conCluster = await client.connect()
        const conDb = conCluster.db('urlShortenerDB').collection('shortUrl')
        return insertURL = await conDb.insertOne(item)
    }catch(err){
        console.error(err.message)
    }  
}

const findOneDB =async (query) => {
    try {
        const conCluster = await client.connect()
        const conDb = conCluster.db('urlShortenerDB').collection('shortUrl')
        return findOneUrl = conDb.findOne(query)
    } catch (err) {
        console.error(err.message)
    }
}
module.exports= {connectDB, insertDB, findOneDB}