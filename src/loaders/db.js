import mongoose, { Schema } from 'mongoose'

import config from '../config'

export default async () => {
	const conn = await mongoose.connect(config.mongodb.uri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})

	// When successfully connected
	conn.connection.on('connected', () => {
		__log.info(`🛡️    Db connection open to ${config.mongodb.uri}`)
	})

	// If the connection throws an error
	conn.connection.on('error', (err) => {
		__log.error(`⚠️    Db connection error: ${err}`)
	})

	// When the connection is disconnected
	conn.connection.on('disconnected', () => {
		__log.info('🛡️    Mongoose default connection disconnected')
	})

	// If the Node process ends, close the Mongoose connection
	process.on('SIGINT', () => {
		conn.connection.close(() => {
			__log.info('🛡️    Db connection disconnected through app termination')
			process.exit(0)
		})
	})

	global.__db = conn
	__log.info(`✌️    Db loaded on ${config.mongodb.uri}`)
}
