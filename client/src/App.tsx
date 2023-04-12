import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Error, UnderConstruction } from "./pages/index";
import { AddStation, AllStations, About, Jorney } from "./pages/dashboard/index";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/*Future implementation will be using ProtectedRoute when profile page is up and running */}
          <Route path="/profile" element={<UnderConstruction />} />
          <Route path="/create" element={<AddStation />} />
          <Route path="/" index element={<About />} />
          <Route path="/getstations" element={<AllStations />} />
          <Route path="/jorney" element={<Jorney />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
