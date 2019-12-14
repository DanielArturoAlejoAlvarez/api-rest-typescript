import {Router} from 'express';

import postCTRL from '../controllers/posts.controller';

const router = Router();

router.route('/')
    .get(postCTRL.getPosts)    
    .post(postCTRL.createPost);

router.route('/:id')
    .get(postCTRL.getPostById)
    .put(postCTRL.updatePost)
    .delete(postCTRL.deletePost);

export default router;