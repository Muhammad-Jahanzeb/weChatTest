const axios = require('axios')
const createError = require('http-errors');

function test(req, res, next){
    try{
        throw new Error('An error occurred!')
    }catch(err){
        next(createError(401))
    }
}

const testAPI = async (req, res) =>{
    try{
        const url1 = 'https://meowfacts.herokuapp.com/'
        const response = await axios.get(url1)
        const data = response.data

        const url2 = 'https://meowfacts.herokuapp.com/'
        const response2 = await axios.get(url2)
        const data2 = response.data

        res.json({data_1: data, data_2: data2})
    }
    catch(err){
        res.json({error: err})
    }
}


module.exports = {test, testAPI}