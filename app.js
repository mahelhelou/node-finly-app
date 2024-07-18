const express = require('express')
const morgan = require('morgan')

require('dotenv').config()
require('./libs/dbConnect')

const app = express()

const port = 3000

// Add specific features/configurations to Express
app.set('views', './views')
app.set('view engine', 'ejs')

// Middlewares -> Apply it for each request
app.use(morgan('dev'))
app.use(express.static('./public'))

app.get('/', (req, res) => {
	// res.send('Home!')
	res.render('index', { message: 'Home page!' })
})

app.get('/about', (req, res) => {
	res.render('index', { message: 'About us page' })
})

app.get('*', (req, res) => {
	// res.status(404).send(`404! Not found!`)
	res.status(404).render(`index`, { message: 'Not found!' })
})

app.listen(port, () => console.log(`Running on port ${port}`))
