const exp = require("express");
const app = exp();
const path = require("path");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
});
app.use("/about_us", function (req, res) {
    res.sendFile(path.join(__dirname, "about_us.html"));
});

app.post("/user_login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    // res.redirect("/admin_dasboard");
    res.send("POST-> Username: " + username + " password: " + password);
});
app.get("/admin_dasboard", function (req, res) {
    // res.send("Text Msg");
    var obj = { username: "hqushtom", email: "aaa@gmail.com" };
    res.json(obj);
});

app.get("/user_login", function (req, res) {
    var username = req.query.username;
    var password = req.query.password;

    res.send("Username: " + username + " password: " + password);
});

// localhost:3000/login
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
});

// http://localhost:3000/product/14578
app.get("/product/:id", function (req, res) {
    var product_id = req.params.id;
    res.send("Product ID: " + product_id);
});




app.route("/login")
    .get(function (req, res) {

    })
    .post(function (req, res) {

    });




var port = process.env.PORT || 3000;
app.listen(port);