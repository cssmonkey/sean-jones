import React, { FC } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "../../styles/app.scss";
import "./layout.scss";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }) => <main>{children}</main>;

export default Layout;
