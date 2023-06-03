const activityRepo = require("../repositories/agentActivity.repository");

const getAllActivities = () => {
  return activityRepo.getAllActivities();
};
const saveActivity = (activity) => {
  return activityRepo.saveActivity(activity);
};

const updateActivity = (activity) => {
  return activityRepo.updateActivity(activity);
};

const deleteActivity = (client) => {
  return activityRepo.deleteActivity(client);
};

module.exports = {
  getAllActivities,
  saveActivity,
  updateActivity,
  deleteActivity,
};
