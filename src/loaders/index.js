import expressLoader from './express'
import dbLoader from './db'
import loggerLoader from './logger'

export default async ({ expressApp }) => {
	try {
		await loggerLoader.logCreateInstance()
		__log.info('🛡️    Log loaded')
		await dbLoader.dbCreateConnection()
		__log.info('🛡️    Db loaded')
		await expressLoader({ app: expressApp })
		__log.info('🛡️    Express loaded')
	} catch (err) {
		__log.error(`⚠️    Loaders failed: ${err}`)
		process.exit(0)
	}
}
