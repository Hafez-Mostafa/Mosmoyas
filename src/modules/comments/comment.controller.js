import commentModel from "../../../db/models/commentModel.js";
import userModel from "../../../db/models/userModel.js";
import postModel from "../../../db/models/postModel.js";
import { where } from "sequelize";


//title content userId

export const getComments = async (req, res, next) => {
    const comments = await commentModel.findAll();
    res.status(201).json({ comments });
};
export const createComment = async (req, res, next) => {
    try {
        const { content, userId, postId } = req.body;
        const user = await userModel.findByPk(userId); // Check if the user exists
        if (!user) {
            console.error("User not found.");
            return res.status(404).json({ message: "User not found" });
        }
        const post = await postModel.findByPk(postId); // Check if the post exists
        if (!post) {
            console.error("Post not found.");
            return res.status(404).json({ message: "Post not found" });
        }
        // Create a new comment
        const comment = await commentModel.create({
            userId,
            postId,
            content,
        });
        res.status(201).json({ message: "Comment created successfully", comment });
    } catch (error) {
        console.error("Error creating comment:", error);
        next(error); // Pass the error to the next middleware
    }
};

export const updateComment = async (req, res, next) => {
    try {
        const { content } = req.body;
        const { id } = req.params; // Destructure id directly from req.params
        const commentId = await commentModel.findByPk(id); // Check if the comment exists
        if (!commentId) {
            console.error("comment not found.");
            return res.status(404).json({ message: "comment not found" });
        }
        // Update the comment
        const updatedRowsCount = await commentModel.update({ content }, { where: { id } });
        if (!updatedRowsCount) {
            console.log("comment is not updated");
            return res.status(400).json({ message: "comment is not updated" });
        } else {
            res.status(200).json({ message: "comment updated successfully" });
        }
    } catch (error) {
        console.error("Error updating comment:", error);
        next(error); // Pass the error to the next middleware
    }
};







export const deleteComment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const commentId = await commentModel.findByPk(id); // Check if the comment exists
        if (!commentId) {
            console.error("comment not found.");
            return res.status(404).json({ message: "comment not found" });
        }
        // Update the comment
        const deletedRowsCount = await commentModel.destroy({ where: { id } });
        if (!deletedRowsCount) {
            console.log("comment is not deleted");
            return res.status(400).json({ message: "comment is not deleted" });
        } else {
            res.status(200).json({ message: "comment deleted successfully" });
        }
    } catch (error) {
        console.error("Error Deleting comment:", error);
        next(error); // Pass the error to the next middleware
    }
};



// Special endpoint to get a specific user with a specific post andpost’s comments.

export const getUPC = async (req, res, next) => {
    const id = req.params.id1;
    const postId = req.params.id2;


    try {
        const user = await userModel.findOne({
            attributes: ["name"],
            include: [
                {
                    model: postModel,
                    where: { "userId": id },

                    as: 'Author',
                    attributes: ["id","title", "content"],
                    include: {
                        model: commentModel,
                        where: { "postId": postId },

                        as: 'comments',
                        attributes: ["content","id"]
                    }
                }
            ],
            group: ["name"], limit: 10
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Server Error');
    }
};




