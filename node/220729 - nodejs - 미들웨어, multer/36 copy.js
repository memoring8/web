const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');

const path = require('path');
const upload = multer({
    // dest: 'uploads/'
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'register/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);    //확장자
            done(null, req.body.id + ext);
        },
    }),
    limits: {filesize: 5*1024*1024},
})


app.set('view engine', 'ejs');
app.use(express.static('register'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', test, test2, function(req,res) {
    res.render('36');
})
app.get('/register', function(req, res) {
    res.render('36 copy');
})

// 파일 하나
app.post('/register', upload.single('userfile'),function(req, res){
    console.log(req.body);
    console.log(req.file);
    res.render('p36 copy' , {filename: req.file.filename});

})

// 파일 여러개
app.post('/upload/array', upload.array('userfile'),function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload array');
})



app.post('/upload/fields', upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'} ]),function(req, res){
    console.log(req.body);
    console.log(req.files);
    res.send('Upload fields');
})



function test(req, res, next) {
    console.log('test 함수');
    console.log(req.path);
    req.aaa = '....';
    next();
}

function test2(req, res, next) {
    console.log('test2 함수');
    console.log(req.aaa);
    next();
}

app.listen(port,()=>{
    console.log('server port : ', port);
})