module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'cartRow',
		{
			amount: {
				type: DataTypes.DOUBLE,
				allowNull: false,
			},
		},
		{ underscored: true }
	);
};
