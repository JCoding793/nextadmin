import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { connectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcrypt from "bcrypt"
const login = async (credentials)=>{
  
  try{
  connectToDB()
  const user = await User.findOne({userName: credentials.userName});
  if(!user) throw new Error("Wrong Credentials");
  const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
  if(!isPasswordCorrect) throw new Error("Wrong password");
  return user
  }
  catch(err){
    console.log(err)
    throw new Error("Failed to login")
  }
}
export  const {signIn , signOut, auth} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try{
           const user = await login(credentials);
             return user;
        }catch(err){
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token , user}){
      if(user) {
        token.userName = user.userName;
        token.img = user.img;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.userName = token.userName;
        session.user.img = token.img;
      }
      return session;
    }
  }
})