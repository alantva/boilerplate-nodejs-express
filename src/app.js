import express from 'express'

import config from './config'

import Logger from './loaders/logger'
global.__log = Logger

async function startServer() {
	const app = express()

	await require('./loaders').default({ expressApp: app })

	app.listen(config.app.port, (err) => {
		if (err) {
			__log.error(err)
			process.exit(1)
			return
		}
		__log.info(`
	#########################################
	🛡️    Server listening on port: ${config.app.port}    🛡️
	#########################################`)
	})
}

startServer()
