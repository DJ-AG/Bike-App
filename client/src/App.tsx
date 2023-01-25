import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Error, Register, ProtectedRoute } from "./pages/index";
import {
  AddStation,
  AllStations,
  Profile,
  About,
} from "./pages/Dashboard/index";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/auth" element={<ProtectedRoute />}>
            <Route path="add-station" element={<AddStation />} />
            <Route path="profile" element={<Profile />} />
          </Route>
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
