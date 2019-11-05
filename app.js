const Mercury = require('@postlight/mercury-parser')
const agent = require('secure-random-user-agent')
const express = require('express')
const app = express()
const port = 9697

app.use(express.json());
app.post('/parse', (req, res) => {
    Mercury.parse(req.body.url, {
        headers: {
            'User-Agent': agent(),
        },
        contentType: 'text'
    }).then(result => res.send(result));
})

app.listen(port, () => console.log(`mercury-api listening on port ${port}!`))
