// server.js

const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Route for Climate Crisis
// https://github.com/jdelacruz23/group-project-1-g10?tab=readme-ov-file
app.get('/climate-crisis', (req, res) => {
    res.redirect('https://github.com/jdelacruz23/group-project-1-g10?tab=readme-ov-file');
});

// Route for Typesetting
// https://github.com/jdelacruz23/typesetting
app.get('/typesetting', (req, res) => {
  res.redirect('https://github.com/jdelacruz23/typesetting')
});

// Route for Four Algorithms
// https://github.com/jdelacruz23/four-sorting-algo
app.get('/four-algorithms', (req, res) => {
  res.redirect('https://github.com/jdelacruz23/four-sorting-algo')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});