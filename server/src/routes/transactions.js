import { Router } from 'express';
import controller from '../controllers/income.js';
const router = Router();

// router.get('/', addIncome);
// router.get('/', addIncome);
// router.use('/', addIncome);
router.route('/').post(controller.addIncome).get(controller.getIncome);

router.route('/:id').delete(controller.deleteIncome);

export default router;
