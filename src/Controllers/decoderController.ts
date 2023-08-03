import { Request, Response } from 'express';
import Decoder from '../Models/decoderModel';

export const getDecode = async (req: Request, res: Response) => {
  try {
    const allData = await Decoder.find({});
    res.status(200).json(allData);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

export const postDecode = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, id } = req.body;
    const decoder = new Decoder({ first_name, last_name, id });
    await decoder.save();

    const allData = await Decoder.find({});
    res.status(200).json(allData);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

export const putDecode = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { first_name, last_name, id } = req.body;
    await Decoder.findByIdAndUpdate(_id, { first_name, last_name, id });
    const allData = await Decoder.find({});
    res.status(200).json(allData);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

export const deleteDecode = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await Decoder.findByIdAndDelete(_id);
    const allData = await Decoder.find({});
    res.status(200).json(allData);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};