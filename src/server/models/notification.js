export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    status: {
      types: DataTypes.ENUM,
      values: ['read', 'unread'],
      allowNull: false
    },
    content: {
      types: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      types: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    roleId: {
      types: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, {});
  return Notification;
};