import { Route, BrowserRouter, Routes } from "react-router-dom";
import { RegisterTask } from "../pages/tasks";
import { Home } from "../pages/home";
import { QrCode } from "../pages/qrCode";

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<RegisterTask />} />
        {/* recebendo um id dinamico no /tasks/:id, vou ter apenas um
            arquivo chamado tasks*/}
        <Route path="/tasks/:id" element={<RegisterTask />} />
        <Route path="/qrCode" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
}
