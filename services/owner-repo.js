const rp = require('request-promise');

const ownerData = async (url) => {
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        },
        json: true
    }
    try {
        const data = await rp(options)
        return data
    } catch (error) {
        return {
            "errorCode":2,
            "errMessage":error
        }
    }
}

module.exports={
    ownerData
}