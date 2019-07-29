const express = require('express');
const router = express.Router();

const TaskModel = require('../models/Task');

//Create Task
router.post('/create', (req, res) => {
    TaskModel.create(req.body)
    .then(task => {
        console.log('Task created successfully')
        res.send(task)
    })
    .catch(err =>{
        res.status(400).json('Error: ' + err)
    })
})

//Retrieve Tasks
router.get('/', (req, res) => {
    TaskModel.find({}, (err, task) => {
        if(!err) {
            return res.json({
                'data' : {
                    'task' : task
                }
            })
        } else {
            console.log(err)
        }
    })
})

//Retrieve single task
router.get('/:id', (req, res) => {
    TaskModel.findOne({ _id : req.params.id})
    .then(task => {
        if(task) {
            return res.json({
                'data' : {
                    'task' : task
                }
            })
        }
    })
})

//update task
router.put('/edit/:id', (req, res, next) => {
    TaskModel.updateOne({_id : req.params.id}, req.body)
    .then( () => {
        TaskModel.findOne({_id : req.params.id})
        .then(task => {
            res.send(task)
        })
    }).catch(next)
})

//delete task
router.delete('/delete/:id', (req, res, next) => {
    TaskModel.findByIdAndDelete( req.params.id )
    .then( () => res.json('Task Deleted Successfuly.'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;