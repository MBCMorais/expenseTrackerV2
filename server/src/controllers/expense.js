import ExpenseModel from '../models/Expense.js';

const addExpense = async (req, res, next) => {
	const { title, amount, category, description, date } = req.body;

	const expense = await ExpenseModel.create({
		title,
		amount,
		category,
		description,
		date,
	});

	try {
		if (!title || !category || !description || !date) {
			return res.status(400).json({ message: 'All fields required' });
		}
		if (amount <= 0 || !amount === 'number') {
			return res.status(400).json({ message: 'All fields required' });
		}
		await expense.save();
		res.status(200).json({
			message: 'Expense Added',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
		console.log(error);
	}
};

const getExpense = async (req, res, next) => {
	try {
		const expense = await ExpenseModel.find().sort({ createdAt: -1 });
		res.status(200).json(expense);
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
	}
};

const deleteExpense = async (req, res, next) => {
	const { id } = req.params;

	try {
		await ExpenseModel.findByIdAndDelete(id);
		res.status(200).json({ message: 'Expense Deleted' });
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
	}
};

export default { addExpense, getExpense, deleteExpense };
