
const express = require("express")

const cors = require("cors")


const app = express();


const port = 8081
;


app.use(cors())


const product = require("./Data/product.json")


app.get("/main", (req, res) => {

    res.json(product)
})




app.listen(port, () => {
    console.log(`the server is runnning on port ${port}`)
})