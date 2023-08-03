import express from 'express';
import * as decoderController from '../Controllers/decoderController';

const router = express.Router();

router.get('api/decode', decoderController.getDecode);
router.post('api/decode', decoderController.postDecode);
router.put('api/decode/:_id', decoderController.putDecode);
router.delete('api/decode/:_id', decoderController.deleteDecode);

export default router;