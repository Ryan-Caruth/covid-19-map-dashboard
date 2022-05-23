const express = require('express')
const axios = require('axios')

const app = express()

app.listen(5000, (err) => {
    console.log('listening on port 5000');
})

app.get('/', async (req, res) => {
    res.send('This will be a covid 19 dashboard')
})

app.get("/api", async (req, res) => {
    let covidDataCountries = await axios.get(
      "https://disease.sh/v3/covid-19/jhucsse"
    );

    let array = []
    for (let i = 0; i < covidDataCountries.data.length; i++) {
        array.push(covidDataCountries.data[i])
    }

    res.send(array)
    console.log(array);
})

