import express from 'express';
import { createTodo, getTodoById, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post('/create', createTodo);
router.get('/get/:id', getTodoById);
router.delete('/delete/:id', deleteTodo);

export default router;
