const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const chef = require('./data/chef.json')


app.get('/chef', async(req, res ) => {
  try {
    res.send(chef)
  } catch (error) {
    res.send(error)
  }
})

app.get('/chef/:id', async (req, res)=> {
  try {
    const id = req.params?.id;
  console.log(id);
  const find = chef.find(s => s?.id == id)
  res.send(find)
  } catch (error) {
    res.send(error)
  }
})


app.get('/', (req, res) => {
    try {
      res.send('chef is running ')
    } catch (error) {
      res.send(error)
    }
  })
  
  app.listen(port, () => {
    try {
      console.log(port, "port is okay");
    } catch (error) {
      res.send(error)
    }
  })
