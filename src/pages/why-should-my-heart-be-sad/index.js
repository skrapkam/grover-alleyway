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
      <title>WHY SHOULD MY HEART BE SAD? | GROVER ALLEYWAY</title>
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
      <RecordTitle>WHY SHOULD MY HEART BE SAD?	</RecordTitle>

      <Content>

        <CoverStyle>
          <Img fluid={props.data.cover.childImageSharp.fluid} />
          <ListenButtonWrapper>
            <ul>
              <a aria-label="Spotify"
                rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/3eaSlWGgLw36PtDmOHgNpy"><li> <ListenButton>Spotify</ListenButton></li></a>

              <a aria-label="Apple Music"
                rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1729559811?mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m"><li><ListenButton>Apple Music</ListenButton></li></a>

              <a aria-label="Tidal"
                rel="noopener noreferrer" target="_blank" href="https://listen.tidal.com/album/343668065"><li> <ListenButton>Tidal</ListenButton></li></a>

              <a aria-label="Bandcamp"
                rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/why-should-my-heart-be-sad"><li><ListenButton>Bandcamp</ListenButton></li></a>
            </ul>
          </ListenButtonWrapper>
        </CoverStyle>


        <Info>
          <Tracks>
            <h2>Track(s)</h2>
            <ol>
              <li>Salt</li>
              <li>Rave Type Song</li>
              <li>Ceramics Class in Silver Lake</li>
              <li>Whale Watching With You in Newport Beach</li>
              <li>His Agony</li>
              <li>Her Apathy</li>
              <li>A Heart Like Mine Is Hard To Find</li>
              <li>A SONG TO MAKE MYSELF HAPPIER</li>
              <li>SHE ONLY LIKED ME WHEN SHE WAS DRUNK</li>
              <li>“IT’S MORE SO JUST THE GAS MONEY”</li>
              <li>DISPOSABLE HEARTACHE</li>
              <li>MY LOVE WAS A FOOL</li>
              <li>SCUM AND REFUSE</li>
              <li>WHY SHOULD MY HEART BE SAD?</li>
            </ol>
          </Tracks>

          <Metadata>
            <h2>Info</h2>
            <ul>
              <li>Release type: Album</li>
              <li>Release date: 02.23.24</li>
              <li>An attempt to give respite and consolation to myself.</li>
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
    cover: file(relativePath: { eq: "records/WSMHBS.jpg" }) {
      ...fluidImage
    }
  }
`;