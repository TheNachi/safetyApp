export default (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Location with this name already exists'
      }
    },
    qrCode: {
      types: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'This QRCode has already being assigned to a location'
      }
    }
  }, {
    classMethods: {
      associate(models) {
        Location.hasMany(models.Incident, {
          foreignKey: 'locationId',
        })
      }
  }
});
  return Location;
};