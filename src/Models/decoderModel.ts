import mongoose from 'mongoose';

const decoderSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  id: String
});

const Decoder = mongoose.model('Decoder', decoderSchema);

export default Decoder;
