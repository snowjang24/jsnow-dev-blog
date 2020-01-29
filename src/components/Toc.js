import React from "react";
import classNames from "classnames";

const Toc = ({ className, tableOfContents }) => {
  return (
    <aside
      className={classNames(className, "toc")}
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    ></aside>
  );
};

export default Toc;
