import { LoginPage } from "./views/login-page";
import { AppHeader } from "./cmps/app-header";
export const RootCmp = () => {
  return (
    <section className="root-cmp">
      <AppHeader />
      <main>
        <LoginPage />
      </main>
    </section>
  );
};
