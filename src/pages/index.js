import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { MdFolder, MdQueueMusic } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

import { Layout } from "../structures";

const IndexPage = () => {
  const routes = [
    { name: "posts", url: "/posts", icon: MdFolder },
    { name: "tags", url: "/tags", icon: IoMdPricetags },
    { name: "music", url: "/music", icon: MdQueueMusic },
  ];
  return (
    <Layout title="JSnow">
      <Index className="_responsive">
        <h1 className="blog-title">👋 JSnow's dev Blog</h1>
        <ul classNaeme="page-list">
          {routes.map((route) => (
            <li className="page">
              <Link to={route.url}>
                <route.icon />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Index>
    </Layout>
  );
};

const Index = styled.div`
  max-width: 680px;
  min-width: 0;
  width: 100%;
  margin-top: 36px;
  .blog-title {
    font-size: 1.5rem;
    color: #333;
  }
  .page-list {
    display: flex;
  }
  .page > a {
    svg {
      margin-right: 8px;
    }
    display: flex;
    align-items: center;
  }
`;
export default IndexPage;
