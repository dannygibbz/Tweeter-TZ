const express = require("express")
const path = require("path")
const app = express()
const port = 4000

app.get("/data", (req, res) => {
  res.send([
    {
      name: "Marty",
      text: "This is heavy, doc.",
      date: new Date(),
      id: Math.random(),
    },
    {
      name: "Doc",
      text:
        "There's that word again. Heavy. Why are things so heavy in the future? Is there a problem with the Earth's gravitational pull?",
      date: new Date(),
      id: Math.random(),
    },
    {
      name: "Biff",
      text: "Why don't you make like a tree ... and get outta here!",
      date: new Date(),
      id: Math.random(),
    },
  ])
})

app.use(express.static(path.join(__dirname, "build")))

// Ship the react app
app.get("/", function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
