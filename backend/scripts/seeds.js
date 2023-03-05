//TODO: seeds script should come here, so we'll be able to put some data in our local env

const mongoose = require("mongoose");
const connection = process.env.MONGODB_URI;
mongoose.connect(connection);

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");

let userId;
let itemId;

async function seedDatabase() {
   const users = Array.from(Array(100)).map((_item,i) => ({
      username: `fakeuser${i}`,
      email:`fakeuser${i}@anythink.com`,
      bio: 'test bio',
      favorites: [],
      followings: [],
   }))

   for(let user of users){
     const u = new User(user)
     const dbItem = await u.save();
     if(!userId){
        userId = dbItem._id; 
     }
   }

    const items = Array.from(Array(100)).map((_item,i) => ({
      slug: `fakeitem${i}`,
      title:`fake item ${i}`,
      description: 'test description',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png',
      comments: [],
      tagList: ['test','tag'],
      seller: userId
  }))

  for(let item of items){
    const it = new Item(item)
    const dbItem = await u.save();
    if(!itemId){
        itemId = dbItem._id
    }
  }

  const comments = Array.from(Array(100)).map((_item,i) => ({
    body:'This is body',
    seller: userId,
    item: itemId
  }))
  
  for(let comment of comments){
    const c = new Comments(comment)
     await u.save();
  }
}

seedDatabase()
  .then(() => {
  console.log("Finished DB seeding");
  process.exit(0);
})
.catch((err) => {
  console.log(`Error while running DB seed: ${err.message}`);
  process.exit(1);
});
