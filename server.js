const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is Successfully`);
})

// server
const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});

