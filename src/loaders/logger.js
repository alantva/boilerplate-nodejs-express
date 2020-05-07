import winston from 'winston'
import config from '../config'

const fileOptions = { filename: config.log.filename }

const consoleOptions = {
	format: winston.format.combine(winston.format.cli(), winston.format.splat()),
}

const transports = []
if (process.env.NODE_ENV !== 'development') {
	transports.push(new winston.transports.File(fileOptions))
} else {
	transports.push(new winston.transports.Console(consoleOptions))
}

const LoggerInstance = winston.createLogger({
	level: config.log.level,
	levels: winston.config.npm.levels,
	format: winston.format.combine(
		winston.format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		winston.format.errors({ stack: true }),
		winston.format.splat(),
		winston.format.json()
	),
	transports,
})

export default LoggerInstance
