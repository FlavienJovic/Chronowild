import { Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import Theme from "./components/Theme";

import "./App.scss";
import Topic from "./components/Topic";
import Navbar from "./components/Navbar";
import AdminPage from "./components/AdminPage";

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
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <AdminPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
