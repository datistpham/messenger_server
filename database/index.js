import mongoose from 'mongoose'
const connectDB= async ()=> {
    try {
        await mongoose.connect("mongodb+srv://giang:giangvippro@cluster0.pffyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {

        })
        console.log('Connect mongoose successfully')

    } catch(e) {
        throw e
    }
}

export default connectDB