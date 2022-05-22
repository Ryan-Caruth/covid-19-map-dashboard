const express = require('express')

const app = express()

app.listen(5000, (err) => {
    console.log('listening on port 5000');
})

app.get('/', async (req, res) => {
    res.send('This will be a covid 19 dashboard')
})