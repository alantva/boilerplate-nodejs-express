import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Ddos from 'ddos'

import config from '../config'
import routes from '../api'

export default ({ app }) => {
	// Health Check
	app.get('/status', (req, res) => {
		res.status(200).end()
	})

	// Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
	// It shows the real origin IP in the heroku or Cloudwatch logs
	app.enable('trust proxy')

	// Enable Cross Origin Resource Sharing to all origins by default
	app.use(cors())

	// Basic DDoS protection
	const ddos = new Ddos(config.ddos)
	app.use(ddos.express)

	// Middleware that transforms the raw string of req.body into json
	app.use(bodyParser.json())

	// Serve public folder
	app.use(express.static('public'))

	// Load API routes
	app.use(config.api.prefix, routes())

	// Catch 404 and forward to error handler
	app.use((req, res, next) => {
		const err = new Error('Not Found')
		err.status = 404
		next(err)
	})

	// Error handlers
	app.use((err, req, res, next) => {
		res.status(err.status || 500)
		__log.error(`🔥    Express [${err.status}] ${err}`)
		return res.send({
			error: {
				message: err.message,
			},
		})
	})
}
