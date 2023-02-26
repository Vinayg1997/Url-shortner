const urlModel = require("../Model/urlModel")

const geturl = async function (req ,res){
    try{
        let urlCode = req.param.urlcode
        let cachedata = await GET_ASYNC(`${urlCode}`)
        if(cachedata){
        let urlData = JSON.parse(cachedata)
        return res.status(302).redirect(urlData.longUrl)
        }

        let findurl = await urlModel.findOne({urlCode})
        return res.status(302).redirect(findurl.longUrl)
    }
    catch(error){erreo}
}