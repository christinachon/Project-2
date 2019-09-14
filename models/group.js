module.exports = function (sequelize, DataTypes) {
    let Group = sequelize.define('Group', {
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Group.associate = function (models) {
        Group.belongsToMany(models.User, { through: 'UserGroup'});
    };
    return Group;
};
