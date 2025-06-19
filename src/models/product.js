import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Product = sequelize.define('Product', {
	name: { type: DataTypes.STRING(100), allowNull: false },
	description: { type: DataTypes.STRING },
	price: { type: DataTypes.FLOAT, allowNull: false },
	stock: { type: DataTypes.INTEGER, defaultValue: 0 },
});

export default Product;
