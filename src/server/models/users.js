import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'First name should contain alphabets'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Last name should contain alphabets'
        }
      }
    },
    email: {
      types: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exist. choose another or login',
        fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is not valid',
        },
        max: {
          args: 254,
          msg: 'The email you entered is invalid or longer than 254 characters.'
        }
      }
    },
    password: {
      types: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: 'The password you entered is less than 6 characters'
        },
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'Roles',
        key: 'id',
        as: 'roleId'
      }
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    staffId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'A staff with this id already exist. Choose another'
      },
  }
}, {
    classMethods: {
      associate(models) {
        User.belongsTo(models.Role, {
          onDelete: 'CASCADE',
          foreignKey: 'roleId'
        });

        User.hasMany(models.Incident, { foreignKey: 'userId' }, 
                    (models.Content, { foreignKey: 'userId' }),
                    (model.Notification, { foreignKey: 'userId' })  
      );
      }
    },
    instanceMethods: {
      verifyPassword(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      },
      beforeUpdate: (user) => {
        if (user.password) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        }
      },
    }
  });
  return Users;
};