import React from "react";

import * as Styled from "./styled";

export default ({ tableOfContents }) => {
  return (
    <Styled.Toc
      className="toc"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  );
};
