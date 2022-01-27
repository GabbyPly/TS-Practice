const app = require('./app.js');
const port = process.env.PORT || 3000;
// const url = process.env.MONGODB_URI;
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
});
