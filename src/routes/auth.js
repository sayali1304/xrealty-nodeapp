const express = require('express');
require('dotenv').config()
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const agentDetails = require('../models/agentDetails.model');

const Joi = require('joi');

const registrationSchema = Joi.object({

    agentId : Joi.string().min(6).required(),
    angentName : Joi.string().min(6).required(),
    designation : Joi.string().min(6).required(),
    languages : Joi.array().min(1),
    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(8).required(),

})

const loginSchema = Joi.object({

    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(8).required(),

})


router.post("/register",  async (req,res)=>{

    const emailExists = await agentDetails.findOne({email : req.body.email})

    if(emailExists) {
        res.status(400).send("Email already exists");
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(req.body.password , salt);

    const agent = new agentDetails({
        agent_id : req.body.agentId,
        name : req.body.angentName,
        designation : req.body.designation,
        languages : req.body.languages,
        email : req.body.email,
        password : encryptedPass,
    })


    try {
        
        const {error} = await registrationSchema.validateAsync(req.body);

        if(error) {
            res.status(400).send(error.details[0].message);
            return;
        }else{

            const savedAgent = await agent.save();

            res.status(200).send("user created successfully")
        }

    } catch (err) {

        res.status(500).send(err);
        
    }
})

router.post("/login",  async (req,res)=>{

    const agent = await agentDetails.findOne({email : req.body.email})

    if(!agent) {
        res.status(400).send("No agent found");
        return;
    }

    const validPass = await bcrypt.compare(req.body.password , agent.password);

    if(!validPass) {

        res.status(400).send("Incorrect password");
        return;

    }


    try {
        
        const {error} = await loginSchema.validateAsync(req.body);

        if(error) {
            res.status(400).send(error.details[0].message);
            return;

        }
        else{

           const access_token  =  jwt.sign({_id : agent._id} , process.env.TOKEN_SECRET)

            res.header("auth_token" , access_token).send(access_token);
        }

    } catch (err) {

        res.status(500).send(err);
        
    }
})



module.exports = router;
