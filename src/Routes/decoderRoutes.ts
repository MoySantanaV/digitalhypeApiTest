import express from 'express';
import * as decoderController from '../Controllers/decoderController';

const router = express.Router();

router.get('/decode', decoderController.getDecode);
router.post('/decode', decoderController.postDecode);
router.put('/decode/:_id', decoderController.putDecode);
router.delete('/decode/:_id', decoderController.deleteDecode);

export default router;