import mongoose from 'mongoose'

const aimodelSchema  =  new mongoose.Schema({
      prompt: {
      type: String,
      required: true,
      trim: true,
    }, 
     response: {
      type: String,
      required: true,
    },
       status: {
      type: String,
      enum: ['success', 'error'],
      default: 'success',
    }
},  {
    timestamps: true,
  })

 const Aimodel = mongoose.model('Aimodel',aimodelSchema)

export default  Aimodel