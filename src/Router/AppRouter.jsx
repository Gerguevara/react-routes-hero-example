import { Route, Routes } from "react-router-dom";
import { LogginPages } from "../Auth/";
import { HeroesRoutes } from "../Heroes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LogginPages />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
