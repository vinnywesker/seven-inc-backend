import { Router } from 'express';

import Employees from '../mongodb/schemas/employees'

const router = Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Authorization"); // permissão para envio do token no header :)
    next();
})

router.get('/', (req, res, next) => {
    Employees.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
})


router.get('/:id', (req, res, next) => {
    Employees.findById(req.params.id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
});


router.post('/', (req, res, next) => {
    const { body } = req;
    console.log(body);
    const employees = new Employees({ body });
    employees.save()
        .then(result => {
            res.send({ message: 'success' });
        })
        .catch(err => {
            res.send(err);
        });
})

router.put('/:id', (req, res, next) => {
    const {
        params: { id },
        body,
    } = req;

    Employees.findByIdAndUpdate(
        { _id: id },
        body
    )
        .then(() => res.send({ message: 'success' }))
        .catch(err => res.send(err))
});

router.delete('/', (req, res) => {
    Employees.findByIdAndRemove(req.params.id)
        .then(() => res.send({ message: 'success' }))
        .catch(err => res.send(err))
})

export default router;
