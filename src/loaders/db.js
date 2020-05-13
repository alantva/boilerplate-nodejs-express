import mongoose from 'mongoose'

import config from '../config'

const dbCreateConnection = async () => {
	global.__db = await mongoose.connect(config.mongodb.uri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	// When successfully connected
	global.__db.connection.on('connected', () => {
		__log.info(`Db connection open to ${config.mongodb.uri}`)
	})
	// If the connection throws an error
	global.__db.connection.on('error', (err) => {
		__log.error(`🔥    Db connection error: ${err}`)
	})
	// When the connection is disconnected
	global.__db.connection.on('disconnected', () => {
		__log.info('Mongoose default connection disconnected')
	})
	__log.info(`Db connected on ${config.mongodb.uri}`)
}

const dbCloseConnection = () => {
	global.__db.connection.close(() => {
		__log.info('Db connection closed')
	})
}

export default {
	dbCreateConnection,
	dbCloseConnection,
}
