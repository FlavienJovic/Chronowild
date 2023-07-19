import { Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import Theme from "./components/Theme";

import "./App.scss";
import Topic from "./components/Topic";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Theme />
            </>
          }
        />
        <Route
          path="/timeline"
          element={
            <>
              <Navbar />
              <Timeline />
            </>
          }
        />
        <Route
          path="/themes/:id/topics"
          element={
            <>
              <Navbar />
              <Topic />
            </>
          }
        />
        <Route
          path="/topics/:id/timelines"
          element={
            <>
              <Navbar />
              <Timeline />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
