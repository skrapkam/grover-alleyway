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
            <title>HIS AGONY / HER APATHY | GROVER ALLEYWAY</title>
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
            <RecordTitle>His Agony / Her Apathy</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                        <ul>
                            <a aria-label="Spotify" rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/5Pd9cABy9Jx5wCDl7Mna54?si=a2b2682669f0495b"><li> <ListenButton>Spotify</ListenButton></li></a>

                            <a aria-label="Apple Music" rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1604505378?mt=1&app=music&ls=1&at=1000lHKX&itscg=30200&itsct=songlink_music"><li><ListenButton>Apple Music</ListenButton></li></a>

                            <a aria-label="Tidal" rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/album/212064914"><li> <ListenButton>Tidal</ListenButton></li></a>

                            <a aria-label="Bandcamp" rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/his-agony-her-apathy"><li><ListenButton>Bandcamp</ListenButton></li></a>
                        </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>His Agony</li>
                            <li>Her Apathy</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Single</li>
                            <li>Release date: 02.04.2022</li>
   
<li>"We don't think
                                about the terror
                                of one person
                                aching in one place alone
                                untouched,
                                unspoken to,
                                watering a plant,
                                being without a telephone
                                that will never ring
                                because there isn't one."</li>


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
    cover: file(relativePath: { eq: "records/his-agony-her-apathy.jpg" }) {
      ...fluidImage
    }
  }
`;