const {connectDB, findOneDB} = require('../config/db')

const getController = async (req, res) => {
    try {
        await connectDB()
        const url = await findOneDB({shortCode: req.params.code})
        if(url){
            console.log(url.shortUrl)
            res.status(201).redirect(url.longUrl)
        }else{
            res.status(400).json({message:"url not found"})}
    } catch (err) {
        res.status(500).json({message:'server error'})
        console.error(err.message)
    }
    
}

module.exports = {getController}