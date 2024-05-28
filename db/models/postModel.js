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
    },
   
});


userModel.hasMany(postModel, {
   
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

postModel.belongsTo(userModel, {});
export default postModel;
