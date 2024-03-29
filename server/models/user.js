module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.STRING(200),
				allowNull: false,
				validate: {
					len: [4, 200],
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			firstName: {
				type: DataTypes.STRING(100),
			},
			lastName: {
				type: DataTypes.STRING(100),
			},
		},
		{ underscored: true }
	);
};
