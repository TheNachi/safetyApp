export default (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'A content with this topic already exist. Choose another'
      },
      validate: {
        len: {
          args: [5, 100],
          msg: 'Content topic must be between 5 and 100 characters',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }, 
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate(models) {
        Content.belongsTo(models.Role, {
          onDelete: 'CASCADE',
          foreignKey: 'roleId'
        })
      }
    }
  });
  return Content;
};