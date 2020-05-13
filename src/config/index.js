import dotenv from 'dotenv'
import path from 'path'

const startEnv = () => {
	const envFound = dotenv.config()
	if (!envFound) {
		// This error should crash whole process
		throw new Error("🔥    Couldn't find .env file")
	}
}

startEnv()

export default {
	// App
	app: {
		// Port
		port: parseInt(process.env.PORT, 10),
	},
	// DDoS
	ddos: {
		burst: 10,
		limit: 15,
		whitelist: (process.env.DDOS_WHITELIST || '').split(),
	},
	// MongoDB
	mongodb: {
		// URL
		uri: [
			'mongodb://',
			process.env.MONGODB_HOST || 'project72_db',
			':',
			process.env.MONGODB_PORT || '27017',
			'/',
			process.env.MONGODB_NAME || 'project72',
			'_',
			process.env.NODE_ENV,
		].join(''),
	},
	// JWT
	jwt: {
		// Secret
		secret: process.env.JWT_SECRET,
	},
	// Logs
	log: {
		level: process.env.LOG_LEVEL || 'silly',
		filename: path.join(
			__dirname,
			'logs',
			process.env.LOG_FILENAME || 'logs.log'
		),
	},
	// API
	api: {
		// Prefix
		prefix: '/api',
	},
}
