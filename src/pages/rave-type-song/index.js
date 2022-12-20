import React from "react"
import { GlobalStyle } from "../../reset";
import { Back, RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import Img from "gatsby-image";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import { Link } from "gatsby"


const index = props => (
    <Wrapper>
           <Helmet>
        <meta charSet="utf-8" />
        <title>RAVE TYPE SONG | GROVER ALLEYWAY</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
        <GlobalStyle />


        <div>
        <Back>
        <Link to="/">← GROVER ALLEYWAY</Link>
        </Back>
            <RecordTitle>Rave Type Song</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a aria-label="Spotify" rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/track/4gthmYUcT2J5W8BWTpu5Di"><li> <ListenButton>Spotify</ListenButton></li></a> 

                       <a aria-label="Apple Music" rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1566687284?i=1566687286&mt=1&app=music&ls=1&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       
                       <a aria-label="Tidal" rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/track/183453372"><li> <ListenButton>Tidal</ListenButton></li></a>
                       
                       <a aria-label="Bandcamp" rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/track/rave-type-song"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Rave Type Song</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Single</li>
                            <li>Release date: 05.20.2021</li>
                            <li><p>Special thank you to Sarah.</p></li>
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
    cover: file(relativePath: { eq: "records/rave-type-song.png" }) {
      ...fluidImage
    }
  }
`;