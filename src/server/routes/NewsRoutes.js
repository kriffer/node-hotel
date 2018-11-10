import { Router } from 'express';
import * as NewsController from '../controllers/NewsController';
const router = new Router();

// Get all Posts
router.route('/news').get(NewsController.getPosts);

// Get one post by cuid
router.route('/news/:cuid').get(NewsController.getPost);

// Add a new Post
router.route('/news').post(NewsController.addPost);

// Delete a post by cuid
router.route('/news/:cuid').delete(NewsController.deletePost);

export default router;
