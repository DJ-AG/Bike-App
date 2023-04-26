import Jorney from "../models/Jorney"
import { StatusCodes } from "http-status-codes";

export const getAllJorneys = async (req: any, res: any) => {
  let result = Jorney.find(req.jorneys);

  const jorneys = await result;
  const totalJorneys = await Jorney.countDocuments();


  const numOfPages = Math.ceil(totalJorneys / 10);
  
  res.status(StatusCodes.OK).json({ jorneys, totalJorneys, numOfPages });
};