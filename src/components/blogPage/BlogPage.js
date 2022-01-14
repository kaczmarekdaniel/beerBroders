import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchArticles } from "helpers/helpers";
import BlogPost from "./BlogPost";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const BlogPosts = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    width: 65%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

const BlogPostSkeleton = styled.div`
  height: 50%;
  margin: 10px;
  width: 31%;
  display: flex;
  flex-direction: column;
  background-color: grey;
  padding: 0;
  &:first-of-type {
    width: 100%;
    height: 40%;
    margin-top: 10vh;

    flex-direction: row;
    background-color: #fff178;
    background-color: grey;
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      height: 55%;
      img {
        width: 60%;
      }
    }
    img {
      width: 60%;
      height: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 30vh;
  }

  img {
    cursor: pointer;
  }
`;

const query = `
  {
    allArticles {
        id
        title
        author
        articlecover {
          url
        }
        shortversion
        dat
        articlecontent {value}
        commentsid
      }
  }`;

const BlogPage = (props) => {
  const [articles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetchArticles(query, setLatestArticles);
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);
  return (
    <Wrapper>
      <BlogPosts>
        {articles.length == 0 ? (
          <>
            <BlogPostSkeleton />
            <BlogPostSkeleton />
            <BlogPostSkeleton />
            <BlogPostSkeleton />
          </>
        ) : (
          articles.map((post) => {
            return (
              <>
                <BlogPost postData={post} key={post.id} />
                <BlogPost postData={post} key={post.id} />
              </>
            );
          })
        )}
      </BlogPosts>
    </Wrapper>
  );
};

BlogPage.propTypes = {};

export default BlogPage;
