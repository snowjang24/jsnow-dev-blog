import React from "react";

const Toc = ({ tableOfContents }) => {
  return <aside dangerouslySetInnerHTML={{ __html: tableOfContents }}></aside>;
};

export default Toc;
