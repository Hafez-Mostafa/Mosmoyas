import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./userModel.js";

// Define the Post model
const postModel = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Set up the associations
// userModel.hasMany(postModel, { foreignKey: 'userId', as: 'Author' });
// postModel.belongsTo(userModel, { foreignKey: 'userId', onDelete: "CASCADE",onUpdate: "CASCADE" });

userModel.hasMany(postModel);
postModel.belongsTo(userModel, { onDelete: "CASCADE",onUpdate: "CASCADE" });
export default postModel;
