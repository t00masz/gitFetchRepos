const createNotification = ({ userName, updatedAt, error = '' }) => {
  const notification = document.createElement('div');
  notification.className = 'notification-div';

  const textMessage = error || `The repository for the given user: ${userName}, updated on: ${updatedAt} can not be found`;
  const message = document.createTextNode(textMessage);
  notification.appendChild(message);

  const divResult = document.getElementById('divResult');
  divResult.appendChild(notification);
};

export default createNotification;
