import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Error, Register, UnderConstruction } from "./pages/index";
import { AddStation, AllStations, About } from "./pages/Dashboard/index";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*Future implementation will be using ProtectedRoute when profile page is up and running */}
          <Route path="profile" element={<UnderConstruction />} />
          <Route path="add-station" element={<AddStation />} />
          <Route index element={<About />} />
          <Route path="/all-stations" element={<AllStations />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
