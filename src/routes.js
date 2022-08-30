import { LoginPage } from "./views/login-page";
import { DeskPage } from "./views/desk-page";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
    label: "LoginPage",
  },
  {
    path: "/desk",
    element: <DeskPage />,
    label: "DeskPage",
  },
];

export default routes;
