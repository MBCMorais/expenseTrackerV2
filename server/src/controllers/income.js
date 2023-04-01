import IncomeModel from '../models/Income.js';

const addIncome = async (req, res, next) => {
	const { title, amount, category, description, date } = req.body;

	const income = await IncomeModel.create({
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
		await income.save();
		res.status(200).json({
			message: 'Income Added',
		});
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
	}
	console.log(income);
};

const getIncome = async (req, res, next) => {
	try {
		const incomes = await IncomeModel.find().sort({ createdAt: -1 });
		res.status(200).json(incomes);
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
	}
};

const deleteIncome = async (req, res, next) => {
	const { id } = req.params;

	try {
		await IncomeModel.findByIdAndDelete(id);
		res.status(200).json({ message: 'Income Deleted' });
	} catch (error) {
		res.status(500).json({
			message: 'Server Error',
		});
	}
};

export default { addIncome, getIncome, deleteIncome };
