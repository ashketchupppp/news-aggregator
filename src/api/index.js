const dotenv = require('dotenv')
dotenv.config()

const newsapi = require('./newsapi.js')

const express = require('express')
const app = express()
const port = process.env.API_PORT || 3001

app.use(express.json())

app.get('/api/v1/top-headlines', async (req, res) => {
    const topHeadlines = await newsapi.topHeadlines()
    res.json(topHeadlines)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
