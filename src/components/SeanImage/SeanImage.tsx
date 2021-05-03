import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./sean-image.scss";

const SeanImage: FC = () => (
  <StaticImage
    className="sean-image"
    src="../../images/sean.jpg"
    alt=""
    placeholder="blurred"
    layout="fullWidth"
    aspectRatio={1 / 1}
    quality={100}
  />
);

export default SeanImage;
