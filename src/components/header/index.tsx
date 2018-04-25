import * as React from "react";
import { Header, Image } from "semantic-ui-react";
import "./style.scss";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <Header size="huge" as="h2">
        <Image src="/src/assets/images/logo-rebrand-ltr.svg" />
      </Header>
    </div>
  );
};

export default HeaderBar;
