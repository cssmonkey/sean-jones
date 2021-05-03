import React from "react";
import PropTypes, { InferProps } from "prop-types";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "../../styles/app.scss";
import "./layout.scss";

const Layout = ({ children }: InferProps<typeof Layout.propTypes>) => <main>{children}</main>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
