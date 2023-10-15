const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware 
app.use(bodyParser.json());


app.post('/webhook', (req, res) => {
    const data = req.body; 
    
    console.log('Received data:', data);
    res.status(200).json({ message: 'Data received successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
