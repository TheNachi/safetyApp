export default (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'A role with this name already exist. Choose another'
      },
    },
    access: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    }
  }, {
    classMethods: {
      associate(models) {
        Roles.hasMany(models.Users, {
          foreignKey: 'roleId'
        });
      }
    }
  });
  return Roles;
};