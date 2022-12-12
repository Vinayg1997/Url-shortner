const urlModel=require('../Model/urlModel')

let isvalidUrl= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/

const createUrl=async function(req,res){
try{
    let data= req.body
    if(!Object.keys(data).length){
        return res.status(400).send({status:false, message:"Please provide longUrl"})
    }
    let {longUrl}=data
    if(!isvalidUrl.test(longUrl)) return res.status(400).send({status:false,message:"Please Provide Valid Url"})

    await urlModel.create(data)

}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}

module.exports={createUrl}