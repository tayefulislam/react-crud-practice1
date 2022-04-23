const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()
const port = process.env.PORT || 5000;



//middleware

app.use(cors())
app.use(express.json())





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
            // console.log(result)
            res.send(result)
        })


        // add to db (POST)

        app.post('/product/add', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct)
            const result = await productCollections.insertOne(newProduct)


            res.send(result)
        })

        // delet data 
        app.delete('/delete/:id', async (req, res) => {

            const id = req.params.id;

            const query = { _id: ObjectId(id) }

            const result = await productCollections.deleteOne(query)
            res.send(result)

        })

        // udpate 


        app.put('/update/:id', async (req, res) => {

            const id = req.params.id;
            const product = req.body;

            const filter = { _id: ObjectId(id) };

            const options = { upsert: true }

            const updateProduct = { $set: product }

            const result = await productCollections.updateOne(filter, updateProduct, options);

            res.send(result)

            // console.log(filter)



        })


        // find one 



        app.get('/product/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)

            const query = { _id: ObjectId(id) }

            const result = await productCollections.findOne(query);

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