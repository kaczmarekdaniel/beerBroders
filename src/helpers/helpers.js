/* eslint-disable no-undef */
import axios from "axios";

export const fetchArticles = (query, state) => {
  axios
    .post(
      "https://graphql.datocms.com/",
      {
        query,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
        },
      }
    )
    .then(({ data: { data } }) => {
      state(data.allArticles);
    })
    .catch((err) => {
      console.log(err);
    });
};
