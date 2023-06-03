const activityService = require("../services/agentActivity.service");

const getActivity = () => {
  return activityService.getAllActivities();
};

const saveActivity = (activity) => {
  return activityService.saveActivity(activity);
};

const updateActivity = (activity) => {
  return activityService.updateActivity(activity);
};
const deleteActivity = (client) => {
  return activityService.deleteActivity(client);
};

module.exports = { getActivity, saveActivity, updateActivity, deleteActivity };
