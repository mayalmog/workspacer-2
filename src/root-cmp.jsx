import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";

import { AppHeader } from "./cmps/app-header";

export const RootCmp = () => {
  return (
    <section className="root-cmp">
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              element={route.element}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
    </section>
  );
};
