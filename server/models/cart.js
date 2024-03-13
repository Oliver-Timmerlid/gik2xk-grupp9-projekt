module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'cart',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			payed: DataTypes.BOOLEAN,
		},
		{ underscored: true }
	);
};
