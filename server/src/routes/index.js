import { Router } from 'express';
import transactions from './transactions.js';
import expense from './expense.js';
const myRouter = Router();

//@caminho "/api/v1"

myRouter.use('/income', transactions);
myRouter.use('/expense', expense);
myRouter.get('/', (req, res) => {
	res.send('hello world');
});

export default myRouter;
