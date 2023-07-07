const express = require ('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const exchanges_router = require('./routes/exchanges.js')
const stocks_router = require('./routes/stocks.js')

const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

dotenv.config()
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.use(exchanges_router.router)
app.use(stocks_router.router)





// set post and listen

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})