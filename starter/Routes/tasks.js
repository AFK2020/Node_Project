const express = require('express');
 

const router = express.Router();
const {getAllTasks,createTask,getTask,UpdateTask,deleteTask}= require('../Controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask)     //work for one task with the given id 


module.exports = router