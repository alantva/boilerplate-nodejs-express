import express from 'express'
import config from './config'

async function startServer() {
	const app = express()

	await require('./loaders').default({ expressApp: app })

	app.listen(config.app.port, (err) => {
		if (err) {
			__log.error(err)
			process.exit(1)
			return
		}
		__log.info(`🛡️    Server listening on port: ${config.app.port}`)
	})

	// If the Node process ends, close the Db connection
	process.on('SIGINT', () => {
		__db.dbCloseConnection()
		__log.info('🛡️    Db connection disconnected through app termination')
	})
}

startServer()
