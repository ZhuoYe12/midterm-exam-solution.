const express = require('express');  
const app = express();  
const port = 3000;  

// Define the route /test  
app.get('/test', (req, res) => {  
    res.json({ message: 'Express is working! Write your full name' });  
});  

// Start the server  
app.listen(port, () => {  
    console.log(`Server is running on http://localhost:${port}`);  
});  