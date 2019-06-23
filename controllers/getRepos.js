const search_repo = require('../services/search-repo');
const owner_repo = require('../services/owner-repo');
const branches_count_repo = require('../services/branches-count-repo');

const getRepos = async (req,res) => {
    var finalResult=[]
    
    try {
        const searchData =  await search_repo.searchRepo(req.body.name);
        for (let i=0;i<5;i++){
            const ownerData = await owner_repo.ownerData(searchData.items[i].owner.url);
            const branchCountData = await branches_count_repo.branchCount(searchData.items[i].branches_url);
            var licenseName=null;
            if(searchData.items[i].license.name!=null){
                licenseName=searchData.items[i].license.name
            }
  
            finalResult[i]={
                "name":searchData.items[i].name,
                "full_name":searchData.items[i].full_name,
                "private":searchData.items[i].private,
                "owner":{
                    "login":ownerData.login,
                    "name":ownerData.name,
                    "followersCount":ownerData.followers,
                    "followingCount":ownerData.following
                },
                "licenseName":licenseName,
                "score":searchData.items[i].score,
                "numberOfBranch":branchCountData.length
            }
        }
         
        // console.log(searchData.items[0])
        res.send(finalResult) 
    } catch (error) {
        
        res.send ({
            "errMessage":error.message
        })
    }

}

module.exports = {
    getRepos
}