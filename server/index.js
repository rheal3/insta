import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import router from './routes/recipes.js';
import { getRecipes } from './controllers/recipes.js'

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))


// app.use('/', router);
app.get('/', getRecipes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



