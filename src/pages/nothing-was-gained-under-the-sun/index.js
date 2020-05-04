import React from "react"
import { GlobalStyle } from "../../reset";
import { Back, RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import Img from "gatsby-image";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";

import Link from "gatsby-link";


const index = props => (
    <Wrapper>
           <Helmet>
        <meta charSet="utf-8" />
        <title>NOTHING WAS GAINED UNDER THE SUN | GROVER ALLEYWAY</title>
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
            <RecordTitle>Nothing Was Gained Under The Sun</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/3M9LOI2vb8GK6Dqox7B4Ih"><li> <ListenButton>Spotify</ListenButton></li></a> 
                       <a rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1495702669?mt=1&app=music&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       <a rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/album/128484513"><li> <ListenButton>Tidal</ListenButton></li></a>
                       <a rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/nothing-was-gained-under-the-sun"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Nothing Was Gained Under the Sun</li>
                            <li>Solace</li>
                            <li>Sunlit Skies</li>
                            <li>Where the Mountains End</li>
                            <li>Clsr (Part II)</li>
                            <li>Synecdoche</li>
                            <li>Reprieve</li>
                            <li>It Never Felt so Good</li>
                            <li>Don't Bother Waiting for Me</li>
                            <li>Even the Light Will Be Darkened by Its Clouds</li>
                            <li>This Was a Moment</li>
                            <li>Sure</li>
                            <li>bl33din' luv</li>
                            <li>Meaningless</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Album</li>
                            <li>Release date: 01.20.2020</li>
                            <li>Created on a laptop computer using Ableton Live software to control and mix VST plugins as well as manipulations of audio recordings. Plugins include Decapitator, VintageVerb, and Serum.</li>
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
    cover: file(relativePath: { eq: "records/nothing-was-gained-under-the-sun.jpg" }) {
      ...fluidImage
    }
  }
`;