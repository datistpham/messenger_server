import { generateUser } from "../model/user.js"

const handleUser= {
    queryUser: async (id)=> {
        return await generateUser.findById(id)
    },
    queryListUserMessage: async (args)=> {
        return await generateUser.find( {_id: { $in: args}} ).lean()
    },
    createUser: async (args)=> {
        const newUser= new generateUser(args)
        return await newUser.save()
    }
}

export { handleUser } 