const express = require("express")
const bodyParser = require("body-parser")
const app = express()

//Port

//const PORT = 3000
//View Engine
app.set('view engine', 'ejs')

//USE


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

otp = [1234]
currentPhoneNum = 9191
obj = {}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    obj[req.body.phone] = otp[0]
    currentPhoneNum = parseInt(req.body.phone)
    res.redirect("/otp")
})

app.get('/otp', (req, res) => {
    res.sendFile(__dirname + "/otpVerification.html")
})

app.post('/otp', (req, res) => {
    enteredotp = parseInt(req.body.entered_otp)
    if (obj[currentPhoneNum] == enteredotp) {
        res.sendFile(__dirname + "/SuccessfulVerification.html")
    } else {
        res.sendFile(__dirname + "/VerificationFailed.html")
    }
})


port = 3000;

app.listen(port, () => {
    console.log("Server is started successfully")
})