import React from "react";
import styled from "styled-components";
import { AiFillApple, AiFillYoutube } from "react-icons/ai";
import { Layout } from "../structures";

const MusicPage = () => {
  return (
    <Layout title="Music">
      <Music className="posts-list _responsive">
        <h2 className="list-title">📻 Music List</h2>
        <MediaType>
          <AiFillYoutube />
          Youtube Music
        </MediaType>
        <MusicList
          src="https://www.youtube.com/embed/videoseries?list=PLDxXNjzT5E_lrOQvFU0WYO7S1hh79pWWD"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></MusicList>
        <MediaType>
          <AiFillApple />
          Apple Music
        </MediaType>
        <div>
          <MusicList
            allow="autoplay *; encrypted-media *;"
            frameborder="0"
            height="450"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/kr/playlist/supa-cool/pl.u-NpXmza7tmR4qb0g?l=en"
          ></MusicList>
        </div>
      </Music>
    </Layout>
  );
};

const Music = styled.div`
  max-width: 680px;
  min-width: 0;
  width: 100%;
  margin-top: 36px;
  .list-title {
    font-size: 1.5rem;
    color: #333;
  }
`;

const MusicList = styled.iframe`
  width: 100%;
  max-width: 660px;
  min-height: 340px;
  overflow: hidden;
  background: transparent;
  border: none;
`;

const MediaType = styled.h3`
  display: flex;
  align-items: center;
  > svg {
    margin-right: 8px;
  }
`;

export default MusicPage;
