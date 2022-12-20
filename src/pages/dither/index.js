import React from "react"
import { GlobalStyle } from "../../reset";
import {Back, RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import Img from "gatsby-image";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";
import { Link } from "gatsby"



const index = props => (
    <Wrapper>
           <Helmet>
        <meta charSet="utf-8" />
        <title>DITHER | GROVER ALLEYWAY</title>
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
        <div>
            <RecordTitle>Dither</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a aria-label="Spotify" rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/3Ed2vd1yX1MEkUondCH1IB?si=aQ48GcH8QC62nsCj-lW-Vw"><li> <ListenButton>Spotify</ListenButton></li></a> 
                       <a aria-label="Apple Music" rel="noopener noreferrer" target="_blank" href="https://music.apple.com/us/album/dither/1530275857?i=1530275858&uo=4&app=music&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       <a aria-label="Tidal" rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/album/154022688/track/154022689"><li> <ListenButton>Tidal</ListenButton></li></a>
                       <a aria-label="Bandcamp" rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/dither"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Dither</li>
                            <li>Inverted Love Song</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Single</li>
                            <li>Release date: 09.08.2020</li>
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
    cover: file(relativePath: { eq: "records/dither.png" }) {
      ...fluidImage
    }
  }
`;