import dotenv from 'dotenv'
import path from 'path'

const startEnv = () => {
	const envFound = dotenv.config()
	if (!envFound) {
		// This error should crash whole process
		throw new Error("⚠️  Couldn't find .env file  ⚠️")
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
	// Mongo
	mongodb: {
		// URL
		uri: process.env.MONGODB_URI,
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
