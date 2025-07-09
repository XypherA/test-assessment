const express = require('express');
const app = express();

app.get('/greet',(req,res)=>{
    const name = req.query.name || "Guest";
    res.json({ message: `Hello ${name}` });
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})