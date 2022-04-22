const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;



//middleware

app.use(cors())
app.use(express.json())




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fgmis.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// https://www.mongodb.com/docs/drivers/




async function run() {

    try {

        await client.connect()

        const productCollections = client.db("productManager").collection("product");


        app.get('/products', async (req, res) => {
            const query = {}
            const cursor = productCollections.find(query)
            const result = await cursor.toArray()
            console.log(result)
            res.send(result)
        })

    }

    finally {

    }


}


run().catch(console.dir)




// get api

app.get('/', (req, res) => {
    res.send("Hey Server is On")
})





app.listen(port, () => {
    console.log('Listinig to Port', port)
})