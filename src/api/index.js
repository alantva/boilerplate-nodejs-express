import { Router } from 'express'
import auth from './routes/auth'

export default () => {
	const app = Router()

	// User routes
	auth(app)

	return app
}
