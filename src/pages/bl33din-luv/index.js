import React from "react"
import Back from '../../components/Back'
import { GlobalStyle } from "../../reset";
import { RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import { Link } from "gatsby"
import Img from "gatsby-image";

import { graphql } from "gatsby";



const index = props => (
    <Wrapper>
        <GlobalStyle />

        <Back />

        <div>
            <RecordTitle>bl33din' luv</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a target="_blank" href="https://open.spotify.com/track/51DpPpf0aHWSMVGS5fNw0a"><li> <ListenButton>Spotify</ListenButton></li></a> 
                       <a target="_blank" href="https://geo.music.apple.com/us/album/_/1474641683?i=1474641684&mt=1&app=music&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       <a target="_blank" href="https://listen.tidal.com/track/114216753"><li> <ListenButton>Tidal</ListenButton></li></a>
                       <a target="_blank" href="https://groveralleyway.bandcamp.com/track/bl33din-luv"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>bl33din' luv</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Single</li>
                            <li>Release date: 07.21.2019</li>
                            <li>Samples "Bleeding Love" by Leona Lewis.</li>
                        </ul>
                    </Metadata>

                </Info>

            </Content>

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
    cover: file(relativePath: { eq: "records/bl33din-luv.jpg" }) {
      ...fluidImage
    }
  }
`;