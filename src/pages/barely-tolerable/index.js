import React from "react"
import { GlobalStyle } from "../../reset";
import { RecordTitle, Info, Content, CoverStyle, Wrapper, Tracks, Metadata, ListenButton, ListenButtonWrapper } from '../../styles'
import Img from "gatsby-image";
import { Helmet } from "react-helmet"
import { graphql } from "gatsby";



const index = props => (
    <Wrapper>
         <Helmet>
        <meta charSet="utf-8" />
        <title>BARELY TOLERABLE | GROVER ALLEYWAY</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
        <GlobalStyle />


        <div>
            <RecordTitle>Barely Tolerable</RecordTitle>

            <Content>

                <CoverStyle>
                    <Img fluid={props.data.cover.childImageSharp.fluid} />
                    <ListenButtonWrapper>
                    <ul>
                       <a rel="noopener noreferrer" target="_blank" href="https://open.spotify.com/album/5c4iAypdvqgsmZlCqjwzR8"><li> <ListenButton>Spotify</ListenButton></li></a> 
                       <a rel="noopener noreferrer" target="_blank" href="https://geo.music.apple.com/us/album/_/1469600060?mt=1&app=music&at=1000lHKX"><li><ListenButton>Apple Music</ListenButton></li></a> 
                       <a rel="noopener noreferrer" target="_blank" href="https://groveralleyway.bandcamp.com/album/barely-tolerable"><li><ListenButton>Bandcamp</ListenButton></li></a> 
                    </ul>
                    </ListenButtonWrapper>
                </CoverStyle>


                <Info>
                    <Tracks>
                        <h2>Track(s)</h2>
                        <ol>
                            <li>Furusato</li>
                            <li>Ease the Fire</li>
                            <li>Clsr</li>
                            <li>Help My Unbelief</li>
                            <li>Interlude</li>
                            <li>The Only Thing I See</li>
                            <li>Thanks for Stopping By</li>
                            <li>Keep Hurting Me</li>
                            <li>Barely Tolerable</li>
                        </ol>
                    </Tracks>

                    <Metadata>
                        <h2>Info</h2>
                        <ul>
                            <li>Release type: Album</li>
                            <li>Release date: 02.23.2019</li>
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
    cover: file(relativePath: { eq: "records/barely-tolerable.jpg" }) {
      ...fluidImage
    }
  }
`;