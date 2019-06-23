const rp = require('request-promise');

const searchRepo = async (name) => {
   
    try {
        if(name==''){
            throw new Error('proper search parameter not provided')
        }
        var options = {
            url: `https://api.github.com/search/repositories?q=${name}`,
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }
        const data = await rp(options)
        return data
    } catch (error) {
        return {
            "errorCode":1,
            "errMessage":error
        }
    }
}

module.exports={
    searchRepo
}