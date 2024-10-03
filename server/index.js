import dotenv from 'dotenv';
import app from './app.js';
import DB_CONFIG from './dbconfig.js';

dotenv.config();

DB_CONFIG();

const PORT_NO = process.env.PORT_NO

app.listen(PORT_NO || 3000, ()=>{
    console.log(`Server is listening on ${PORT_NO}`);
    
})
