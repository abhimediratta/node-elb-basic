const express = require('express');

const app =express();

app.get('/',(req,res) => {
    console.log('x-ringba-wl-account-id:', req.headers['x-ringba-wl-account-id']);
    res.send(`Welcome ${req.hostname}`);
})

app.listen(8080,() => {
    console.log(`server is running on port 4444`);
})