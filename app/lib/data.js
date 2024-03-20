import { User , Product} from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) =>{
    console.log(q)
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
// { username: {$regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page -1)
    try{
        connectToDB()
        const count = await User.find({userName: { $regex: regex }}).count()
        const users = await User.find({userName: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { users , count};
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}

export const fetchProducts = async (q, page) =>{
    console.log(q)
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
// { username: {$regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page -1)
    try{
        connectToDB()
        const count = await Product.find({title: { $regex: regex }}).count()
        const products = await Product.find({title: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { products , count};
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}

// Find Specific Id
export const fetchUser = async (id) => {
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed To fetch User!");
    }
  };
  export const fetchProduct = async (id) => {
    try {
      connectToDB();
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed To Fetch  Product!");
    }
  };