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

  const authenticate = async (req, res, next) => {
    try {
      const idToken = req.headers.authorization;
      console.log(idToken)
  
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      console.log(decodedToken)

  
      next()
    } catch (error) {
      res.status(401).json({error: 'Unauthorized'});
    }
  };

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


module.exports = { authenticate };
