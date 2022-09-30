import React from "react"
import { GlobalStyle } from "../../reset";
import {Back, RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import Img from "gatsby-image";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";
import Link from "gatsby-link";



const index = props => (
    <Wrapper>
           <Helmet>
        <meta charSet="utf-8" />
        <title>INVERTED LOVE SONG | GROVER ALLEYWAY</title>
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
            <RecordTitle>Inverted Love Song</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a aria-label="Spotify" rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/track/2JkC56xmQjOJdkQjLUIsHc"><li> <ListenButton>Spotify</ListenButton></li></a> 
                       <a aria-label="Apple Music" rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1522711657?i=1522711659&mt=1&app=music&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       <a aria-label="Tidal" rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/track/147936263"><li> <ListenButton>Tidal</ListenButton></li></a>
                       <a aria-label="Bandcamp" rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/track/inverted-love-song"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Inverted Love Song</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Single</li>
                            <li>Release date: 07.11.2020</li>
                            <li>Samples "Bleeding Love" by Leona Lewis, "Lead the Way" by Mariah Carey, "Xtal" by Aphex Twin, and "Triple Falling Plum Blossoms 三六" by Guzheng.</li>
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
    cover: file(relativePath: { eq: "records/inverted-love-song.jpg" }) {
      ...fluidImage
    }
  }
`;