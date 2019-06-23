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
            "errMessage":error
        }
    }
}

module.exports={
    ownerData
}