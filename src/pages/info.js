import React from "react"
import Back from '../components/Back'
import { Wrapper } from '../styles'
import { GlobalStyle } from "../reset";
import Img from "gatsby-image";
import { css } from '@emotion/core'

import { graphql } from "gatsby";

const info = css`
    max-width: 650px;
`


const index = props => (
    <Wrapper>
        <GlobalStyle />

        <Back />

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