import { ReactComponent as Logo } from "../../img/Logo.svg";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <h1>Logo</h1>
    </div>
  );
};
