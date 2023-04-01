import dotenv, { config } from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 5050;

const MONGO_URL = process.env.MONGO_URL || 'http://localhost:27017/tracker';

const Config = {
	url: MONGO_URL,
	port: PORT,
};

export default Config;
