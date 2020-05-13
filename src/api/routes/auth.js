import { Router } from 'express'

const route = Router()

export default (app) => {
	route.get('/', (req, res) => {
		res.status(200).send(req.query)
	})
	route.post('/', (req, res) => {
		res.status(200).send(req.body)
	})
	route.put('/', (req, res) => {
		res.status(200).send(req.body)
	})

	route.post('/sign-up', (req, res) => {
		res.status(200).send(req.body)
	})

	route.post('/log-in', (req, res) => {
		res.status(200).send(req.body)
	})

	app.use('/auth', route)
}
