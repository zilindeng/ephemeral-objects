import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import style from "./blog-link.module.less"

const BlogLink = ({ post }) => (
     <div className={style.link} style={{ gridColumn: `${post.frontmatter.grid}`}}>
        <small>{post.frontmatter.date}</small>
        <div>
          {post.frontmatter.title}
        </div>
        <div>
          {post.frontmatter.description}
        </div>
          <Link to={post.frontmatter.path}>
            Read more
          </Link>
        <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
      </div>
)

export default BlogLink
