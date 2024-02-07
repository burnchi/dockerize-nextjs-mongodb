import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('connect ok', mongoose.connection.host);

  } catch (error) {
    console.log('connect fail', error);
  }
}

const TopicSchema = new mongoose.Schema({
  title: String,
  describe: String
})

export const TopicModel = mongoose.models.Topic || mongoose.model("Topic", TopicSchema)

