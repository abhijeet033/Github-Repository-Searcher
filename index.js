// modules
const express = require('express');

//configure express
const app = express();
const port = process.env.PORT || 3000;

//Router
 const RepoRouter=require('./routes/getRepos')

//cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-request-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-request-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json())
// serving static files
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

//Using routers
 app.use(RepoRouter)



// Starting server
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
