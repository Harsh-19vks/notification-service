const notificationService = require('../services/notificationService');

exports.sendNotification = (req, res) => {
  const { userId, message, type } = req.body;

  if (!userId || !message || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const notification = notificationService.send(userId, message, type);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserNotifications = (req, res) => {
  const { id } = req.params;
  const notifications = notificationService.getByUserId(id);
  res.status(200).json(notifications);
};
