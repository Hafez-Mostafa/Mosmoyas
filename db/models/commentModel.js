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
postModel.hasMany(commentModel, { foreignKey: 'postId', as: 'comments' });
commentModel.belongsTo(postModel, { foreignKey: 'postId', onUpdate: "CASCADE", onDelete: "CASCADE" });

userModel.hasMany(commentModel, { foreignKey: 'userId', as: 'comments' });
commentModel.belongsTo(userModel, { foreignKey: 'userId', onDelete: "CASCADE", onUpdate: "CASCADE" });

export default commentModel;



