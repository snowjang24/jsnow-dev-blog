import React from "react";
import styled from "styled-components";
import { AiFillApple, AiFillYoutube } from "react-icons/ai";
import { Layout } from "../structures";

const MusicPage = () => {
  return (
    <Layout title="Music">
      <Music className="posts-list _responsive">
        <h2 className="list-title">📻 Music List</h2>
        <p>코딩을 위한 음악 플레이 리스트 🎶</p>
        <MediaType>
          <h3 class="title">
            <AiFillYoutube className="youtube" />
            Youtube Music
          </h3>
          <GoLink>
            <a
              href="https://www.youtube.com/playlist?list=PLDxXNjzT5E_lrOQvFU0WYO7S1hh79pWWD"
              target="_blank"
            >
              Go to Youtube
            </a>
          </GoLink>
        </MediaType>

        <MusicList
          src="https://www.youtube.com/embed/embed/?listType=playlist&list=PLDxXNjzT5E_lrOQvFU0WYO7S1hh79pWWD"
          frameborder="0"
          allowfullscreen
        ></MusicList>
        <MediaType>
          <h3 className="title">
            <AiFillApple className="apple" />
            Apple Music
          </h3>
          <GoLink>
            <a
              href="https://music.apple.com/kr/playlist/supa-cool/pl.u-NpXmza7tmR4qb0g?l=en"
              target="_blank"
            >
              Go to Apple Music
            </a>
          </GoLink>
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

const MediaType = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  svg {
    margin-right: 8px;
  }
  svg.apple {
    color: #99a9b5;
  }
  svg.youtube {
    color: #ff0000;
  }
  .title {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

const GoLink = styled.div`
  display: flex;
  align-items: center;
  color: #2b92fd;
  font-size: 0.8rem;

  &:hover {
    color: gray;
  }
`;

export default MusicPage;
