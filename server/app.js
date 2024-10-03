import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import PlantRoute from './routes/PlantRoute.js';
import UserRoute from './routes/UserRoute.js';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/api/v1/plant", PlantRoute);
app.use("/api/v1/user",UserRoute);

export default app;