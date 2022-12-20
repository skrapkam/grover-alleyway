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
        <title>AN AMALGAM OF WAVES | GROVER ALLEYWAY</title>
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
            <RecordTitle>An Amalgam of Waves</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a aria-label="Spotify"rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/5mkGTsA0ldG3jQAnXS5PSa"><li> <ListenButton>Spotify</ListenButton></li></a> 

                       <a aria-label="Apple Music" rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1546524721?mt=1&app=music&ls=1&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       
                       <a aria-label="Tidal" rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/album/167483753"><li> <ListenButton>Tidal</ListenButton></li></a>
                       
                       <a aria-label="Bandcamp" rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/an-amalgam-of-waves"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Fine</li>
                            <li>Inverted Love Song</li>
                            <li>It Hurts</li>
                            <li>A Tribute to Fremont Older</li>
                            <li>Tired Sunset</li>
                            <li>Gospel Type Beat</li>
                            <li>Dither</li>
                            <li>Haha, Trap</li>
                            <li>Untitled 09</li>
                            <li>No Night is Colder than Your Mind</li>
                            <li>Post-rock Will Never Die, but You Will</li>
                            <li>Goodbye, Goodbye, Goodbye</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Album</li>
                            <li>Release date: 01.29.2021</li>
                            <li><p>Most of these tunes were made during the COVID pandemic in 2020. Making tunes, listening to them repeatedly on my daily walks, and obsessing over the right snare sound were a few ways I kept sane during this crazy time. Hopefully you enjoy them as much as I enjoyed making them.</p> <p>Cheers, Sam.</p></li>
                            <li>Cover art by <a href="http://www.austinyu.com/">Austin Yu</a>.</li>

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
    cover: file(relativePath: { eq: "records/an-amalgam-of-waves.jpg" }) {
      ...fluidImage
    }
  }
`;