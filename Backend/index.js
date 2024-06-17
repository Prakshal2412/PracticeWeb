const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 5000;
const cors=require('cors');
//prakshalnet2412
//Ek5NX0kY8QBKjhHs

main().catch(err => console.log(err));

app.use(express.json());
app.use(cors());

async function main() {
    await mongoose.connect('mongodb+srv://prakshalnet2412:Ek5NX0kY8QBKjhHs@urbanfood-react-app.j4lrayx.mongodb.net/urbanfood-react-app?retryWrites=true&w=majority&appName=urbanfood-react-app');
  
    app.get('/', (req, res) => {
        res.send('UrbanFood Recipe App Server is running')
      })
  }


  main().then(()=>console.log("Mongodb connected Successfuly!")).catch(err => console.log(err));

  //routes
  const ItemRoutes =require('./src/routes/itemRoute');
  app.use('/api',ItemRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})