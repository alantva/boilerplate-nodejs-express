import { Router } from 'express'

export default () => {
	const app = Router()
	app.get('/', (req, res) => {
		res.status(200).send(req.query)
	})
	app.post('/', (req, res) => {
		res.status(200).send(req.body)
	})
	app.put('/', (req, res) => {
		res.status(200).send(req.body)
	})
	return app
}
