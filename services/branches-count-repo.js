const rp = require('request-promise');

const branchCount = async (url) => {
    var options = {
        url: url.split('{')[0],
        headers: {
            'User-Agent': 'request'
        },
        json: true
    }
    try {
        const data = await rp(options)
        return {
            length:data.length
        }
    } catch (error) {
        return {
            "errorCode":3,
            "errMessage":error
        }
    }
}

module.exports={
    branchCount
}