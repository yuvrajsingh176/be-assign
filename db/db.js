import mongoose from 'mongoose';

async function connectToDB() {
  try {
    if (process.env.DB_HOST !== null) {
      await mongoose.connect(process.env.DB_HOST, {});
      console.log('Connected To DB');
    }
  } catch (error) {
    process.exit(1);
  }
}



export { connectToDB,  };
