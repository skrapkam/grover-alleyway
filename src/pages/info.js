import React from "react"
import { Back, Wrapper } from '../styles'
import { GlobalStyle } from "../reset";
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";
import Link from "gatsby-link";

const info = css`
    max-width: 650px;
`


const index = props => (
    <Wrapper>
        <Helmet>
            <meta charSet="utf-8" />
            <title>INFO | GROVER ALLEYWAY</title>
            <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
        </Helmet>
        <GlobalStyle />

        <Back>
        <Link to="/">← GROVER ALLEYWAY</Link>
        </Back>
        <div css={info}>
            <p>"Chuck Dukowski from Black Flag said he'd rather work a day job for the rest of his life than be dependent on his music for his living."—Ian MacKaye</p>
            <p>Thanks for listening.</p>
            <p>groveralleyway@gmail.com</p>
        </div>

    </Wrapper>
)

export default index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "records/barely-tolerable.jpg" }) {
      ...fluidImage
    }
  }
`;