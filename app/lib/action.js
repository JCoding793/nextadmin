"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User , Product} from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

//Create the Data from the database

export const addUser = async (formData) => {
 
  const { userName, emailId, password, phone, isAdmin, address, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      emailId,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Create User!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const addProduct = async (formData) => {
  const { title, desc, price, address, color, stock, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct= new Product({
      title,
      desc,
      price,
      address,
      color,
      stock,
      size,
    });
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Create Product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Update the data from the database
export const updateUser = async (formData) => {
 console.log(formData)
  const {id, userName, emailId, password, phone, isAdmin, address, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateFields = {
      userName, emailId, password, phone, isAdmin, address, isActive
    } ;
    Object.keys(updateFields).forEach(key=>(updateFields[key] === "" || undefined) &&  delete updateFields[key]);
    await User.findByIdAndUpdate(id , updateFields)
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Update User!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};


export const updateProduct = async (formData) => {
 
  const { 
    id,
    title,
    desc,
    price,
    address,
    color,
    stock,
    size, } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateProducts = {
      title,
      desc,
      price,
      address,
      color,
      stock,
      size,
    } 
    Object.keys(updateProducts).forEach(key=>(updateProducts[key] === "" || undefined) &&  delete updateProducts[key]);
    await Product.findByIdAndUpdate(id , updateProducts)
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Update Product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//Delete the Data from the database
export const deleteUser = async (formData) => {
  const { id } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id)
    // await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Delete User! Try Again");
  }
  revalidatePath("/dashboard/users");
  
};
export const deleteProduct = async (formData) => {
  const { id } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    await Product.findByIdAndDelete(id)
    // await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed To Delete Product!");
  }
  revalidatePath("/dashboard/products");
  
};


//Authnticate

export const authenticate =   async (prevState , formData)=>{
   const {userName, password} = Object.fromEntries(formData);

   try{
      await signIn("credentials" , {userName , password});
   }
   catch (err){
    console.log(err);
    return "Wrong Credentials!"
   }
}