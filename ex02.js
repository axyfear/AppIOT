<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')
const app = express()
const multer = require('multer')

const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || 'iot_66_2',
    supportBigNumber: true,
    timezone: '+7:00',
    dateStrings: true,
    charset: 'utf8mb4_unicode_ci',
  },
})

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  console.log('test api')
  res.send({ ok: 1 })
})
app.get('/lists', async (req, res) => {
  console.log('lists')
  let row = await db('users_advisor')
  // .where("major_id", 98)
  res.send({
    datas: row,
    status: 1,
  })
})
app.get('/listedit', async (req, res) => {
  console.log('show id', req.query)
  let row = await db('member').where("id", req.query.id)
  res.send({
    datas: row[0],
    status: 1,
  })
})
app.get('/list', async (req, res) => {
  console.log('show user')
  let row = await db('member')
  // .where("major_id", 98)
  res.send({
    datas: row,
    status: 1,
  })
})

  app.get('/del', async (req, res) => {
    try{

      console.log('show id', req.query)
      let row = await db('member')
      .where("id", req.query.id)
      .del()
    }catch (error) {
      console.log(error.message)
      res.send({
        ok : 0,
        error : error.message
      })
    }
})


app.get('/listedit', async (req, res) => {
  console.log('show id', req.query)
  let row = await db('member')
  .where("id", req.query.id)
  res.send({
    datas: row[0],
    status: 1,
  })
})

app.get('/update',async(req,res) => {
  try {
  console.log(req.query)
  let row = await db('member')
  .where('id','=',req.query.id)
  .update({
    username : req.query.username, 
    password : req.query.password ,
    dep : req.query.dep
  })
  console.log('row=',row)
  res.send({
    ok : 1,
    data : row
  })}
  catch (error) {
    console.log(error.message)
    res.send({
      ok : 0,
      error : error.message
    })
  }


})
app.post('/add', async (req, res) => {
  try {
           console.log(req.body)
           console.log(req.body.username)  
               ids = await db('member').insert({
               username : req.body.username,
               password : req.body.password,
               dep : req.body.dep
           })     
           res.send({ 
             ok : 1,
             data: req.body,
             ids : ids[0]
           })  
         } catch (e) {
           console.log(e.message)
           res.send({
             ok : 0,
             error : e.message
           })   
         }
 })// insert

app.listen(7001, () => {
  console.log('ready:candle:7001')
})
=======
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')
const app = express()
const multer = require('multer')

const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DB || 'iot_66_2',
    supportBigNumber: true,
    timezone: '+7:00',
    dateStrings: true,
    charset: 'utf8mb4_unicode_ci',
  },
})

app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  console.log('test api')
  res.send({ ok: 1 })
})
app.get('/lists', async (req, res) => {
  console.log('lists')
  let row = await db('users_advisor')
  // .where("major_id", 98)
  res.send({
    datas: row,
    status: 1,
  })
})
app.get('/listedit', async (req, res) => {
  console.log('show id', req.query)
  let row = await db('member').where("id", req.query.id)
  res.send({
    datas: row[0],
    status: 1,
  })
})
app.get('/list', async (req, res) => {
  console.log('show user')
  let row = await db('member')
  // .where("major_id", 98)
  res.send({
    datas: row,
    status: 1,
  })
})

  app.get('/del', async (req, res) => {
    try{

      console.log('show id', req.query)
      let row = await db('member')
      .where("id", req.query.id)
      .del()
    }catch (error) {
      console.log(error.message)
      res.send({
        ok : 0,
        error : error.message
      })
    }
})


app.get('/listedit', async (req, res) => {
  console.log('show id', req.query)
  let row = await db('member')
  .where("id", req.query.id)
  res.send({
    datas: row[0],
    status: 1,
  })
})

app.get('/update',async(req,res) => {
  try {
  console.log(req.query)
  let row = await db('member')
  .where('id','=',req.query.id)
  .update({
    username : req.query.username, 
    password : req.query.password ,
    dep : req.query.dep
  })
  console.log('row=',row)
  res.send({
    ok : 1,
    data : row
  })}
  catch (error) {
    console.log(error.message)
    res.send({
      ok : 0,
      error : error.message
    })
  }


})
app.post('/add', async (req, res) => {
  try {
           console.log(req.body)
           console.log(req.body.username)  
               ids = await db('member').insert({
               username : req.body.username,
               password : req.body.password,
               dep : req.body.dep
           })     
           res.send({ 
             ok : 1,
             data: req.body,
             ids : ids[0]
           })  
         } catch (e) {
           console.log(e.message)
           res.send({
             ok : 0,
             error : e.message
           })   
         }
 })// insert

app.listen(7001, () => {
  console.log('ready:candle:7001')
})
>>>>>>> bc13880fb03f0ade938066d47b8a36a065c66884
