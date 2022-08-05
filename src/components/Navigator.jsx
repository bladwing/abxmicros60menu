import { Routes, Route } from "react-router-dom";
import Setup from "../pages/Setup";
import Service from "../pages/Service";
import Mechanic from "../pages/Mechanic";
import Cycle from "../pages/Cycle";
import Calibration from "../pages/Calibrations";
import QC from "../pages/Qc";
import { Primebottleunit, Cleanerpack } from "../pages/ServiceSub";
import Results from "../pages/Results";
import MainMenu  from "../pages/MainPage";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/results" element={<Results />} />
      <Route path="/qc" element={<QC />} />
      <Route path="/calibration" element={<Calibration />} />
      <Route path="/service" element={<Service />} />
      <Route path="/primebottleunit" element={<Primebottleunit />} />
      <Route path="/cleanerpack" element={<Cleanerpack />} />
      <Route path="/mechanic" element={<Mechanic />} />
      <Route path="/cycle" element={<Cycle />} />
      <Route path="/Setup" element={<Setup />} />
    </Routes>
  );
};
export default Navigator;
