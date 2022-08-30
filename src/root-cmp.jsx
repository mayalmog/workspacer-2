import { LoginPage } from "./views/login-page";
// import { DeskPage } from "./views/desk-page";
import { AppHeader } from "./cmps/app-header";

export const RootCmp = () => {
  return (
    <section className="root-cmp">
      <AppHeader />
      <main>
        <LoginPage />
        {/* <DeskPage /> */}
      </main>
    </section>
  );
};
