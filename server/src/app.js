const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const port = process.env.PORT || 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

let multer = require('multer');
// let upload = multer();

var upload = multer({ dest: 'upload/'});
var fs = require('fs');
var type = upload.single('file');
let xml2js = require('xml2js');
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "This message came from backend!"
    }]
  )
})

app.post('/upload', type, (req, res) => {
  var tmp_path = req.file.path;
  var target_path = req.file.path;

  var src = fs.createReadStream(tmp_path);
  
  fs.unlink(target_path, (err) => {
    if (err) throw err;
    console.log('successfully deleted ' + src);
  });

  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { 

    var content = fs.readFileSync(target_path, 'utf8'),data;
    xml2js.parseString(content, function(err, result) { data = result; });
    console.log(data);
    res.json({
      res: {
        status: 'complete',
        data: data
      }
    })
    } );
  src.on('error', function(err) { 
    res.json({
      status: err
    }); 
  });
})

app.listen(port, () => {
    console.log('Server is running on localhost:' + port)
})