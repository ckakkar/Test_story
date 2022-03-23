const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const {Pool}=require('pg');
var pool;
pool=new Pool({
  connectionStr: 'postgres://postgres:2205@localhost/users'
})

var app=express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.get('/database', (req,res)=>{
    var getUsersQ='select * from usr';
    pool.query(getUsersQ,(error,result)=>{
      if(error)
        res.end(error);
      var rult={'rows':result.rows}
      res.render('pages/db',rult)
    })
  });
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
