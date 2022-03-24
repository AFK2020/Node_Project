
const Task = require('../Models/Tasks')


const getAllTasks = async (req,res)=>
{
    try{
        const task= await Task.find({})
        res.status(200).json( {task:task})
    }
    catch{
        res.status(500).json( {msg:error})
    }
    //res.send('All tasks')
}

const createTask =async (req,res)=>
{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    }
    catch(error)
    {
        res.status(500).json( {msg:error})
    }
}

const getTask =async (req,res)=>
{
    try{
        const{id:taskID}=req.params
        const task = await Task.findOne({_id: taskID});
    if (!task){
        return res.status(404).json({msg: `no task with id ${taskID}`})
    }
        res.status(200).json({task})
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}



const UpdateTask = async (req,res)=>
{
    try{
        const{id:taskID}=req.params
        const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
            new: true,                          //update and show new updated task
            runValidator: true,                 // empty string can not be passed
        });
    if (!task){
        return res.status(404).json({msg: `no task with id ${taskID}`})     //Id not found error
    }
        res.status(200).json({task})
    }
    catch (error) {                                     //Cast Error
        res.status(500).json({msg: error})
    }
}



const deleteTask =async (req,res)=>
{
    try{
        const{id:taskID}=req.params
        const task = await Task.findOneAndDelete({_id: taskID});
    if (!task){
        return res.status(404).json({msg: `no task with id ${taskID}`})     //Id not found error
    }
        res.status(200).json({task})
    }
    catch (error) {                         //Cast Error
        res.status(500).json({msg: error})
    }
}


module.exports= {
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask,
}