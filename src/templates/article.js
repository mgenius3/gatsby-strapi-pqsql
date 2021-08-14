import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleTemplate = ({ data, location }) => (
  <Layout location={location}>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author[0].id}`}>
        {" "}
        {data.strapiArticle.author[0].username}{" "}
        <i>@ {data.strapiArticle.author[0].email}</i>{" "}
      </Link>{" "}
    </p>
    <img
      src={`http://localhost:1337${data.strapiArticle.image.url}`}
      alt="img"
    />
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        url
      }
      author {
        id
        email
        username
      }
    }
  }
`