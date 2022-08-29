import WorkspacerLogo from "../assets/img/workspacer-logo.svg";
export const AppHeader = () => {
  return (
    <header className="app-header flex">
      <img src={WorkspacerLogo} alt="" />
      <h1>App Header</h1>
    </header>
  );
};
