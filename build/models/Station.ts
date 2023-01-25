import mongoose from "mongoose";

interface Station {
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
}

const StationSchema = new mongoose.Schema<Station>({
  Nimi: {
    type: String,
    required: [true, "Anna nimi"],
    trim: true,
  },
  Namn: {
    type: String,
    required: [true, "Ange namn"],
    trim: true,
  },
  Name: {
    type: String,
    required: [true, "Please provide name"],
    trim: true,
  },
  Osoite: {
    type: String,
    required: [true, "Anna Osoite / Please provide address"],
  },
  Adress: {
    type: String,
    required: [true, "Please provide adress"],
  },
  Kaupunki: {
    type: String,
    required: [true, "Anna kaupunki / Please provide City"],
  },
  Stad: {
    type: String,
    required: [true, "Please provide email"],
  },
  Operaattor: {
    type: String,
    required: [true, "Please provide email"],
  },
  Kapasiteet: {
    type: String,
    required: [true, "Please provide email"],
  },
  x: {
    type: String,
    required: [true, "Please provide email"],
  },
  y: {
    type: String,
    required: [true, "Please provide email"],
  },
});



export default mongoose.model("Station", StationSchema);
