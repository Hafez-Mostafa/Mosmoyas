import { where } from "sequelize";
import postModel from "../../../db/models/postModel.js";
import userModel from "../../../db/models/userModel.js";

//title content userId

export const getPosts = async (req, res, next) => {
    const posts = await postModel.findAll();
    res.status(201).json({ posts });
};

export const createPost = async (req, res, next) => {
    try {
        const { title, content, UserId} = req.body;
        const user = await userModel.findByPk(UserId); // Check if the user exists
        if (!user) {
            console.error("User not found.");
            return res.status(404).json({ message: "User not found" });
        }
        // Create a new post
        const post = await postModel.create({  title, content, UserId } );
        if (post[1]) {
            console.log("post is not registered")
            return res.status(400).json({ message: "post is not registered" });
        } else {
            res.status(201).json({ message: "Post created successfully", post });
        }
    } catch (error) {
        console.error("Error creating  post:", error);
        next(error); // Pass the error to the next middleware
    }
};
export const updatePost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params; // Destructure id directly from req.params
        const postId = await postModel.findByPk(id); // Check if the post exists
        if (!postId) {
            console.error("Post not found.");
            return res.status(404).json({ message: "Post not found" });
        }
        // Update the post
        const updatedRowsCount = await postModel.update({ title, content }, { where: { id } });
        if (!updatedRowsCount) {
            console.log("Post is not updated");
            return res.status(400).json({ message: "Post is not updated" });
        } else {
            res.status(200).json({ message: "Post updated successfully" });
        }
    } catch (error) {
        console.error("Error updating post:", error);
        next(error); // Pass the error to the next middleware
    }
};







export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const postId = await postModel.findByPk(id); // Check if the post exists
        if (!postId) {
            console.error("Post not found.");
            return res.status(404).json({ message: "Post not found" });
        }
        // Update the post
        const deletedRowsCount = await postModel.destroy({ where: { id } });
        if (!deletedRowsCount) {
            console.log("Post is not deleted");
            return res.status(400).json({ message: "Post is not deleted" });
        } else {
            res.status(200).json({ message: "Post deleted successfully" });
        }
    } catch (error) {
        console.error("Error Deleting post:", error);
        next(error); // Pass the error to the next middleware
    }
};








export const getUP = async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await postModel.findOne({
            where: { "userId": id },
            attributes: ["title", "content", "userId"]
        });

        if (!post) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(post);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Server Error');
    }
};

// Get a All Posts for as sepecific  author.
export const getSUP = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await userModel.findOne({
            attributes: ["name"],
            include: [
                {
                    model: postModel,
                    where: { "userId": id },

                    as: "Author",
                    attributes: ["title", "content"]
                }
            ]
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
