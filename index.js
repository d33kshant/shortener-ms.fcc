const express = require('express')
const app = express()

const database = []
const PORT = 5000

app.use(express.json())

app.post('/api/shorturl', (req, res)=>{
  const url = req.body.url
  
  if(url){
      if(url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()  ]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)){
      database.push(url)
      console.log(database)
      res.json({
        original_url: url,
        short_url: database.length
      })
    }else{
      res.json({
        error: 'invalid url'
      })
    }
  }else{
    res.json({
      error: 'invalid url'
    })
  }
})

app.get('/api/shorturl/:index', (req, res)=>{
  const index = req.params.index
  let url = index > database.length ? '/' : database[index-1]

  res.redirect(url)
})

app.listen(PORT, ()=>console.log('Started listening on port:', PORT))const express = require('express')
const app = express()

const database = []
const PORT = 5000

app.use(express.json())

app.post('/api/shorturl', (req, res)=>{
  const url = req.body.url
  
  if(url){
      if(url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()  ]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)){
      database.push(url)
      console.log(database)
      res.json({
        original_url: url,
        short_url: database.length
      })
    }else{
      res.json({
        error: 'invalid url'
      })
    }
  }else{
    res.json({
      error: 'invalid url'
    })
  }
})

app.get('/api/shorturl/:index', (req, res)=>{
  const index = req.params.index
  let url = index > database.length ? '/' : database[index-1]

  res.redirect(url)
})

app.listen(PORT, ()=>console.log('Started listening on port:', PORT))
