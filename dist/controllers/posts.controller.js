"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.connect();
    const posts = yield conn.query("SELECT * FROM posts");
    return res.json(posts[0]);
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.connect();
    const { id } = req.params;
    const post = yield conn.query("SELECT * FROM posts WHERE id= ?", id);
    return res.json(post[0]);
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    console.log(newPost);
    const conn = yield database_1.connect();
    yield conn.query("INSERT INTO posts SET ?", [newPost]);
    return res.json({
        msg: "Post saved successfully!"
    });
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updPost = req.body;
    const conn = yield database_1.connect();
    yield conn.query("UPDATE posts SET ? WHERE id= ?", [updPost, id]);
    return res.json({
        msg: "Post updated successfully!"
    });
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.connect();
    const { id } = req.params;
    yield conn.query("DELETE FROM posts WHERE id= ?", id);
    return res.json({
        msg: "Post deleted successfully!"
    });
});
exports.default = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
