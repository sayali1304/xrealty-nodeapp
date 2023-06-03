const mongoose = require('mongoose');

const agentDetailsSchema = new mongoose.Schema(
               {    
                
                client_name : {
                    type : String,
                   required : true,
                    },
    
               calldate : {
                type : Date,
                default:Date.now(),
                required : true,
                },

               no_of_call : {
                type : String,
                required : true,
                min: 1,
                max: 5000
               },

               no_of_meeting : {
                type : String,
                required : true,
                min: 1,
                max: 5000
               },
               

             }
              );

const agentDetails = mongoose.model('AgentActivity', agentDetailsSchema);

module.exports = agentDetails;
