import { Routes, Route } from "react-router-dom";

import FacultyHome from "./faculty/FacultyHome";
import Yogesh from "./faculty/Yogesh";
import Anoop from "./faculty/Anoop";
import Mazher from "./faculty/Mazher";
import Vijendra from "./faculty/Vijendra";

function Faculty() {
  return (
    <Routes>
      <Route index element={<FacultyHome />} />
      <Route path="yogesh" element={<Yogesh />} />
      <Route path="anoop" element={<Anoop />} />
      <Route path="mazher" element={<Mazher />} />
      <Route path="vijendra" element={<Vijendra />} />
    </Routes>
  );
}

export default Faculty;
