const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true,"Need a name!"]
    },
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid"
})

fruit.save()


async function myfruits() {
    const fruits= await Fruit.find({});
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    mongoose.connection.close()
    });
}
//myfruits();

const itemsSchema ={
    name: String,
}

const Item = mongoose.model("Item",itemsSchema)

console.log(Item.find({}))
