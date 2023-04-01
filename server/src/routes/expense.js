import { Router } from 'express';
import controller from '../controllers/expense.js';
const router = Router();

// router.get('/', addIncome);
// router.get('/', addIncome);
// router.use('/', addIncome);
router.route('/').post(controller.addExpense).get(controller.getExpense);

router.route('/:id').delete(controller.deleteExpense);

export default router;
