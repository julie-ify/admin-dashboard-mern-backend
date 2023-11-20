import express from 'express';

const router = express.Router();

router.get('/users/:id', (req, res) => {
	const userId = req.params.id
})

export default router;