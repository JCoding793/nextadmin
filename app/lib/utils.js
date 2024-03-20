import mongoose from 'mongoose';

export const connectToDB = async () =>{
    const connection = {};
    try {
        if(connection.isConnected) return ;
          const db = await mongoose.connect("mongodb+srv://jatin:eiYipO1lFNy749fK@mycluster.qhalewp.mongodb.net/dashboard?retryWrites=true&w=majority&appName=MyCluster");
          connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
}