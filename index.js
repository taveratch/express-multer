var express = require('express')
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpeg")
    }
  })
var upload = multer({ storage: storage })


var app = express()

var cpUpload = upload.fields([{name: 'picture'}, {name: 'image_name'}, {name: 'location_name'}, {name: 'latlong'}])
app.post('/photo', cpUpload , function (req, res, next) {
    console.log(req.body)
    console.log(req.files['picture'])
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.listen(3000)