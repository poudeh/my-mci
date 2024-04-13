const express = require('express')
const cors = require('cors')
const myMCIDB = require('./db/mymciDB')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/api/users", (req, res) => {
    let getAllUsersQuery = 'SELECT * FROM users'
    myMCIDB.query(getAllUsersQuery, (err, result) => {
        if (err) {
            res.send(null)

        } else {
            res.send(result)

        }
    })

})

app.post('/api/users', (req, res) => {
    let body = req.body
    let mainUserQuery = `SELECT token FROM users WHERE email='${body.email}' && password='${body.password}'`
    myMCIDB.query(mainUserQuery, (err, result) => {
        if (err) {
            res.send('not found')

        } else {
            res.send(result)

        }
    })

})

app.post('/api/usertoken', (req, res) => {
    let userToken = req.headers.authorization;
    let mainUserQuery = `SELECT * FROM users WHERE token='${userToken}'`
    myMCIDB.query(mainUserQuery, (err, result) => {
        if (err) {
            res.send('not found')

        } else {
            res.send(result)

        }
    })

})

app.get('/api/services/:userID', (req, res) => {
    let userID = req.params.userID
    let activeUserServiceQuery = `SELECT * FROM services WHERE userID=${userID}`
    myMCIDB.query(activeUserServiceQuery, (err, result) => {
        if (err) {
            res.send(null)

        } else {
            res.send(result)

        }

    })


})

app.get('/api/purchases/:userID', (req, res) => {
    let userID = req.params.userID
    let userPurchasesQuery = `SELECT * FROM sales WHERE userID=${userID}`
    myMCIDB.query(userPurchasesQuery, (err, result) => {
        if (err) {
            res.send(null)

        } else {
            res.send(result)

        }

    })


})





app.post('/api/comments', (req, res) => {
    let postCommentsQuery = `INSERT INTO contact_us (email, comment) VALUES ('${req.body.email}','${req.body.comment}')`
    myMCIDB.query(postCommentsQuery, (err, result) => {
        if (err) {
            res.send(err)

        } else {
            res.send(result)

        }

    })
})

app.get('/api/recommended_packets', (req, res) => {
    let getPacketsQuery = `SELECT * FROM recommended_packets`
    myMCIDB.query(getPacketsQuery, (err, result) => {
        if (err) {
            res.send(null)

        } else {
            res.send(result)

        }
    })
})

app.get('/api/chartInfo/:userID', (req, res) => {
    let userID = req.params.userID;
    let getChartsInfoQuery = `SELECT * FROM internetdailyusages WHERE userID=${userID}`
    myMCIDB.query(getChartsInfoQuery , (err , result)=> {
        if (err) {
            res.send(null)

        } else {
            res.send(result)

        }
    })

})











app.listen(9000, () => {
    console.log('connected to port 9000');
})