export default (sequelize, DataTypes) => {
  const Incident = sequelize.define('Incident', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'An Incident with this name already exist. choose another name',
      }
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    effect: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['resolved', 'inProgress', 'received', 'pending'],
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    classMethods: {
      associate(models) {
        Incident.belongsTo(models.Location, {
          foreignKey: 'locationId',
          onDelete: 'CASCADE'
        })
      }
    }
  });

  return Incident;
};