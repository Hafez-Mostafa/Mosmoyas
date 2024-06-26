import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./userModel.js";
import postModel from "./postModel.js";

// Define a Sequelize model for comments with the fields: content, postId (linked to the post model), and userId (linked to the User model).
const commentModel = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

});

// Define associations
postModel.hasMany(commentModel, { 
onDelete: "CASCADE",
onUpdate: "CASCADE" });
commentModel.belongsTo(postModel);

userModel.hasMany(commentModel, { 
onDelete: "CASCADE",
onUpdate: "CASCADE" } );
commentModel.belongsTo(userModel);

export default commentModel;



