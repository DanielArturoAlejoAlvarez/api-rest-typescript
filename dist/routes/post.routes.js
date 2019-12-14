"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = __importDefault(require("../controllers/posts.controller"));
const router = express_1.Router();
router.route('/')
    .get(posts_controller_1.default.getPosts)
    .post(posts_controller_1.default.createPost);
router.route('/:id')
    .get(posts_controller_1.default.getPostById)
    .put(posts_controller_1.default.updatePost)
    .delete(posts_controller_1.default.deletePost);
exports.default = router;
