import { Login, Dashboard } from "@/pages/index";
import { Routes, Route } from "react-router";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
