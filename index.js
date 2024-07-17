const http = require('http')

const server = http.createServer((req, res) => {
	const { url } = req

	console.log(url)
	if (url === '/') {
		res.write('<h1>Home</h1>')
		res.end()
	} else if (url === '/about') {
		res.write('ABOUT')
		res.end()
	} else {
		res.writeHead(404)
		res.end('Not found!')
	}
})

const port = 3000
server.listen(port, () => console.log(`Server is running on port ${port}`))
