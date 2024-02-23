const express = require('express')
const routes = express.Router();
const users = require('../database/user');
const user = require('../database/user');

routes.post('/user/create', async(req, res)=>{
    try {
            const newUser = users(req.body);
           await  newUser.save()
           res.status(200).json({message:"user has been created", user:newUser})
    } catch (error) {
        res.status(500).json({message:"user data is not created please check..."})
    }
})

routes.get('/user/all', async(req, res)=>{
  try {
    const allUser = await users.find();
    res.status(200).json({message:"all users is successfully taken", data:allUser})
  } catch (error) {
    res.status(500).json({message:"users connot taken..."})
  }
})
routes.delete('/delete/user/:id', async(req, res)=>{
    try {
        const userId = req.params.id;
        const deletesuer = await user.findByIdAndDelete(userId)
       
        if(!deletesuer){
            res.status(500).json({message:"user id is not found."})
        }
        res.status(200).json({message:"user deleetd", deletedData:deletesuer})
    } catch (error) {
            res.status(500).json({message:"error.", err:error})
    }
})

routes.put('/update/user/:id', async(req, res)=>{
    try {
        const userId = req.params.id;
        const updateUser = await user.findByIdAndUpdate(userId, req.body)
        
        if(!updateUser){
            res.status(500).json({message:"user id is not found."})
        }
        res.status(200).json({message:"user updated", UpadtedData:updateUser})
    } catch (error) {
            res.status(500).json({message:"error.", err:error})
    }
})
module.exports = routes;