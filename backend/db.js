const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://syednoor058:01782734573@cluster0.sbiygef.mongodb.net/hungryShaed_mern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose
    .connect(mongoURL)
    .then(async (_success) => {
      console.log("Database is connected...!");
      // const database = await success.db('hungryShaed_mern');
      const fetchData = await mongoose.connection.db.collection("food_items");
      fetchData
        .find({})
        .toArray()
        .then(async (data) => {
          const food_category = await mongoose.connection.db.collection(
            "food_category"
          );
          food_category
            .find({})
            .toArray()
            .then((category_data) => {
              global.food_items = data;
              global.food_category = category_data;
            });
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
};

module.exports = mongoDB;
