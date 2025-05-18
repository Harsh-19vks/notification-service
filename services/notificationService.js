const notifications = [];

function send(userId, message, type) {
  const notification = {
    id: notifications.length + 1,
    userId,
    message,
    type,
    timestamp: new Date()
  };

  // Simulate sending based on type
  if (type === 'email') {
    console.log(`Sending email to user ${userId}: ${message}`);
  } else if (type === 'sms') {
    console.log(`Sending SMS to user ${userId}: ${message}`);
  } else if (type === 'in-app') {
    console.log(`Saving in-app notification for user ${userId}`);
  } else {
    throw new Error('Invalid notification type');
  }

  notifications.push(notification);
  return notification;
}

function getByUserId(userId) {
  return notifications.filter(n => n.userId === userId);
}

module.exports = {
  send,
  getByUserId
};
