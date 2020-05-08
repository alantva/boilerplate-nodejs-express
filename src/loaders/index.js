import expressLoader from './express'
import dbLoader from './db'

export default async ({ expressApp }) => {
	await dbLoader()
	await expressLoader({ app: expressApp })
}
