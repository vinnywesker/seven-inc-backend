import { Router } from 'express';

import Employees from '../mongodb/schemas/employees'
import { generateToken, verifyToken } from '../token/tokenJwt'

const router = Router();

router.post('/login', (req, res) => {
    if (req.body.username === 'root' && req.body.password === '123456') {

        const token = generateToken();

        return res.send({ message: 'success', auth: true, token: token });
    }

    res.send({ message: 'error', auth: false });
})


router.get('/:id', verifyToken, (req, res, next) => {
    Employees.findById(req.params.id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
});


router.post('/', verifyToken, (req, res, next) => {
    const employees = new Employees(req.body);
    employees.save()
        .then(result => {
            res.send({ message: 'success' });
        })
        .catch(err => {
            res.sendStatus(500).send(err);
        });
})

router.put('/:id', verifyToken, (req, res, next) => {
    const {
        params: { id },
        body,
    } = req;

    Employees.findByIdAndUpdate(id, body, (err) => {
        if (err) return res.send(err);

        res.send({ message: 'success' });
    })
});

router.delete('/:id', verifyToken, (req, res) => {
    Employees.findByIdAndRemove(req.params.id)
        .then(() => res.send({ message: 'success' }))
        .catch(err => res.send(err))
})

router.get('/', verifyToken, (req, res, next) => {
    Employees.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
})

export default router;
