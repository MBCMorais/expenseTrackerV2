import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import Config from './config/config.js';
import indexRoute from './routes/index.js';

const app = express();
app.use(express.json());
app.use(cors());

const server = () => {
	connectDB();
	app.listen(process.env.PORT, () => {
		console.log(`Server started on port ${Config.port}`);
	});
};

app.use('/api/v1', indexRoute);

server();

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
// D:\Code\Repos\Expense\expenseTrackerV2\server\.env
// D:\Code\Repos\Expense\expenseTrackerV2\server\src\server.js
