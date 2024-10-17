//@ts-nocheck
const express =require("express")
const cors = require('cors');
const app = express();
app.use(cors())

app.delete('/data', (req, res) => {
  // Respond with some sample data
  const data = { name: 'John Doe', age: 30 };
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});