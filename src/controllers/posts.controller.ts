import {Request,Response} from 'express';

import {connect} from '../database';

import {Post} from '../models/Post';

const getPosts = async (req: Request,res: Response): Promise<Response> => {
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");
    return res.json(posts[0])
}

const getPostById = async (req: Request,res: Response): Promise<Response> => {
    const conn = await connect();
    const {id} = req.params;
    const post = await conn.query("SELECT * FROM posts WHERE id= ?", id);
    return res.json(post[0])
}

const createPost = async (req: Request,res: Response) => {
    const newPost: Post = req.body;
    console.log(newPost);
    const conn = await connect();
    await conn.query("INSERT INTO posts SET ?", [newPost]);
    return res.json({
        msg: "Post saved successfully!"
    });
}

const updatePost = async (req: Request,res: Response) => {
    const {id} = req.params;
    const updPost: Post = req.body;
    const conn = await connect();
    await conn.query("UPDATE posts SET ? WHERE id= ?", [updPost,id]);
    return res.json({
        msg: "Post updated successfully!"
    });
}


const deletePost = async (req: Request,res: Response): Promise<Response> => {
    const conn = await connect();
    const {id} = req.params;
    await conn.query("DELETE FROM posts WHERE id= ?", id);
    return res.json({
        msg: "Post deleted successfully!"
    });
}


export default {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}


