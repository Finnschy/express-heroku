const express = require("express")
const app = express()
// erster schritt: bei heroku muss man sagen, dass er eine variable port bei heroku bzw in unserer process.env nehmen soll, wenn es sie gibt. ansonsten geben wir einen festen PORT.
const PORT = process.env.PORT || 5000

// zweiter Schritt: änderung in package.json!
// wir fügen in package.json den befehl hinzu, mit dem wir den server starten wollen:
// "scripts": {
//     "start": "node index.js"
//   },

// dritter schritt: 
// heroku login ins terminal eingeben
// er fragt danach eine taste zu drücken, man wird zum browser weitergeleitet und logged sich ein
// muss bei jedem projekt gemacht werden

// vierter schritt:
// heroku create ins terminal 

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))