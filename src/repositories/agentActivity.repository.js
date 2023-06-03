const Activity = require("../models/agentActivity.model");

const getAllActivities = async () => {
  try {
    const agentList = await Activity.find();
    return agentList;
  } catch (error) {
    console.log(error);
  }
};

const saveActivity = async (activityDetails) => {
  const agentActivity = new Activity({
    client_name: activityDetails.client_name,
    calldate: activityDetails.date,
    no_of_call: activityDetails.no_of_calls,
    no_of_meeting: activityDetails.no_of_meetings,
  });

  const savedAgent = await agentActivity.save();
  return savedAgent;
};

const updateActivity = async (activityDetails) => {
  try {
    const updatedAgent = await Activity.updateOne(activityDetails);
    return updatedAgent;
  } catch (error) {
    console.log(error);
  }
};

const deleteActivity = async (clientName) => {
  const agent = await Activity.deleteOne({
    client_name: clientName,
  });
  return agent.deletedCount;
};

module.exports = {
  getAllActivities,
  saveActivity,
  updateActivity,
  deleteActivity,
};
