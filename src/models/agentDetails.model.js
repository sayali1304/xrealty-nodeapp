const mongoose = require('mongoose');

const agentDetailsSchema = new mongoose.Schema(
               {

               agent_id : {
                type : String,
                required : true,
                min: 6,
                max:10
               },
               name : {
                type : String,
                required : true,
                min: 6,
                max: 200
               },
               designation : {
                type : String,
                required : true,
                min: 6,
                max: 100
               },
               languages : {
                type : [String],
                required : false,
                min: 1,
                max: 80
               },
               email : {
                type : String,
                required : true,
                min: 6,
                max: 200
               },
               password : {
                type : String,
                required : true,
                min: 8,
                max: 200
               },

             }
              );

const agentDetails = mongoose.model('AgentDetails', agentDetailsSchema);

module.exports = agentDetails;