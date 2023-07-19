import { Route, Routes } from "react-router-dom";
import Timeline from "./components/Timeline";
import Theme from "./components/Theme";

import "./App.scss";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Theme />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/themes/:id/topics" element={<Topic />} />
        <Route path="/topics/:id/timelines" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
