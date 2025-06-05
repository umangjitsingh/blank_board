import express from 'express';
import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import cors from 'cors';





const PORT = process.env.PORT;


const app = express();

if (process.env.NODE_ENV === 'local') {
	app.use(cors({
		origin: 'http://localhost:5173/',
		credentials: true
	}))
} else {
	app.use(cors({
		credentials: true
	}))
}
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'production') {

	app.use(express.static(path.join(__dirname,"./frontend/dist")));
	app.get('/*', (req, res) => {
		res.sendFile((path.resolve(__dirname,"./","frontend","dist","index.html")));
	});
}


const dbConnect = async () => {
	try {
		if (process.env.NODE_ENV === 'local') {
			await mongoose.connect(process.env.LOCAL_DB_URI);
			console.log('Local db connected')
		} else {
			await mongoose.connect(process.env.MONGODB_URI);
			console.log('Production db connected')
		}
	} catch (e) {
		console.log("FAILED DB CONNECTION... ", e);
		process.exit(1);
	}
}


dbConnect().then(()=>{
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}..`)
	})
}).catch((e)=>{
	console.log("Error : error running 1.db  2.server",e)
})


