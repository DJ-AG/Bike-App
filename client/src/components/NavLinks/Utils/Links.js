import {IoHome } from "react-icons/io5";
import {MdDirectionsBike } from "react-icons/md";
import {IoIosCreate } from "react-icons/io";
import {BsGlobe} from "react-icons/bs"

const links = [
  { id: 1, text: "About", path: "/", icon: <IoHome /> },
  { id: 2, text: "All Stations", path: "getstations", icon: <MdDirectionsBike/> },
  { id: 3, text: "Add Station", path: "create", icon: <IoIosCreate /> },
  { id:4, text:"Jorneys", path:"jorney", icon:<BsGlobe/> }
];

export default links;
