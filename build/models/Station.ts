import mongoose from "mongoose";

export interface Station {
  Name: string;
  Adress: string;
  City: string;
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
}

const StationSchema = new mongoose.Schema<Station>({
  Name: {
    type: String,
    required: [true, "Please provide Nimi"],
  },
  Adress: {
    type: String,
    required: [true, "Please provide Adress"],
  },
  Operaattor: {
    type: String,
    enum: ["CityBike Finland", "test"],
    required: [true, "Please provide Operaattor"],
  },
  City:{
    type:String,
    enum:["Helsinki","Espoo"]
  },
  Kapasiteet: {
    type: String,
    required: [true, "Please provide Kapasiteet"],
  },
  x: {
    type: String,
    required: [true, "Please provide x"],
  },
  y: {
    type: String,
    required: [true, "Please provide y"],
  },
});

export default mongoose.model("Station", StationSchema);
