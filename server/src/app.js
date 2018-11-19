const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const port = process.env.PORT || 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "This message came from backend!"
    }]
  )
})

app.post('/file', (req, res) => {
    console.log('Recived file from frontend');
    res.json({
        status: 'backend revived file and send response to frontend'
    })
})

app.listen(port, () => {
    console.log('Server is running on localhost:' + port)
})