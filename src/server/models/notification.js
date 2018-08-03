export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    status: {
      type: DataTypes.ENUM,
      values: ['read', 'unread'],
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, {});
  return Notification;
};