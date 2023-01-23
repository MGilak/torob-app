import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./components/home/Home";
import Mobile from "./components/mobile/Mobile";
import MbileSection from "./components/MbileSection/MbileSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/mobileSection" element={<MbileSection />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>          
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
