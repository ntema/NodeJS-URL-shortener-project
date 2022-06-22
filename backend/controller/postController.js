const {connectDB, insertDB, findOneDB} = require('../config/db')
const validUrl = require('valid-url')
const shortId = require('shortid')


const postController = async (req, res) => {
    try{
        await connectDB()

        //console.log(longUrl)
        const baseUrl = process.env.BASE_URL
        if(!validUrl.isUri(baseUrl)){
            res.status(400).json({message:'invalid base url'})
        }
        
        

        const {longUrl} = req.body
        if(validUrl.isUri(longUrl)){
            try {
                const url = await findOneDB({longUrl})
                if(url){
                    res.json({url})
                }else{
                    const shortCode = shortId.generate()
                    const shortUrl = baseUrl + "/" + shortCode
                    
                   const url ={
                        longUrl,
                        shortCode,
                        shortUrl}
                    await insertDB(url)
                    console.log('url added to database')
                     res.status(201).json({message:'url added to database'})
                }
                
            } catch (err) {
                res.status(400)
                console.error(err.message)
            }
        }
    }catch(err){
        console.error(err.message)
    }
    

}

module.exports = {postController}