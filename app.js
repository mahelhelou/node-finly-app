const express = require('express')
const morgan = require('morgan')

const app = express()

const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('Home!')
})

app.get('/about', (req, res) => {
	res.send('ABOUT!')
})

app.get('*', (req, res) => {
	res.status(404).send(`404! Not found!`)
})

app.listen(port, () => console.log(`Running on port ${port}`))
