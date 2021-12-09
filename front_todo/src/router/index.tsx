import { Route, BrowserRouter, Routes } from "react-router-dom";
import { RegisterTask } from "../pages/registerTask";
import { Home } from "../pages/home";

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<RegisterTask />} />
      </Routes>
    </BrowserRouter>
  );
}
