import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../connection.js';


// 1 - Define a Sequelize model for users with the following fields:
// username, email, and password.

export const userModel = sequelize.define(
    'User',
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // Other model options go here
    },
);


export default userModel
