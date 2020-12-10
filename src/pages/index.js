
import React, { useState } from 'react'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { GlobalStyle } from "../reset";
import Header from "../components/header";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { Helmet } from "react-helmet"


const Wrapper = styled.div`
  padding: 32px;
`

const Name = styled.div`
  font-weight: bold;
  color: #000;
  letter-spacing: 1vw;
  position: fixed;
  left: 50%;
  top: 50%;
  text-transform: uppercase;
  font-size: 6vw;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
`

const Title = styled.div`
`
const Image = styled.div`

`

const Type = styled.div`
text-align: center;
`

const Date = styled.div`
text-align: right;
`
const LinkContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr; 
width: 100%;  
color: #000;

text-transform: uppercase;
@media (max-width: 850px) {
  grid-template-columns: 3fr 1fr; 
}

`

const Fade = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

 
const Container = styled.div`
  display: grid;
  animation: ${Fade} .5s ease-in;

  opacity: 1;
  grid-template-columns: ${props =>
    props.isVisible
      ? 'repeat(auto-fill, minmax(1fr))'
      : 'repeat(auto-fill, minmax(16rem, 1fr))'};
  column-gap: 40px;
  row-gap: 40px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ${Title} {
    ${props =>
    props.isVisible
      ? 'display:block'
      : 'display:none'};
  }
}

${Type} {

  @media (max-width: 850px) {
    display: none!important;
  }
  
  ${props =>
    props.isVisible
      ? 'display:block'
      : 'display:none'};
}
}


${Date} {


  ${props =>
    props.isVisible
      ? 'display:block'
      : 'display:none'};
}
}

${Image} {

  ${props =>
    props.isVisible
      ? 'display:none'
      : 'display:block'};
}
}

 
`


const Button = styled.button`
  background: #fff;
  border: none;
  font-size: .8rem;
  outline: none;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 16px;    
  }
`
const ButtonContainer = styled.div`
text-align: right;

`
const active = css`
  background: #000;
  color: white;
  text-decoration: none!important;
  border-radius: 45px;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  &:active {
    opacity: 50%;
  }
`
const InfoLink = styled.div`
  display: block;
  text-transform: uppercase;
  a {
    text-decoration: underline;
    color: #000;
  }
`

const HeaderStyled = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 56px;
`

const Music = ({ data }) => {

  
  const [state, showGrid] = useState(true)

  React.useEffect(() => {
    const data = localStorage.getItem('my-tier-list');
    if (data) {
      showGrid(JSON.parse(data));
    }
  }, []); 

  React.useEffect(() => {
    localStorage.setItem('my-tier-list', JSON.stringify(state))
  });

  function toggleGrid() {
    showGrid(true)
    console.log(state)

  }

  function toggleList() {
    showGrid(false)
    console.log(state)

  }

 
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GROVER ALLEYWAY</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <GlobalStyle />

      <Header>

        <HeaderStyled>
          <InfoLink>
            <Link to="/info">Info</Link>
          </InfoLink>
          <ButtonContainer>
            <Button onClick={toggleGrid} css={state === true ? active : ''}>List</Button>
            <Button onClick={toggleList} css={state === false ? active : ''}>Grid</Button>
          </ButtonContainer>

        </HeaderStyled>

      </Header>

      <Name>Grover Alleyway</Name>

      <Container isVisible={state}>
        {data.records.edges.map(({ node }) => (

          <a href={node.url}>

            <Image>
              <Img
                fluid={node.image.src.childImageSharp.fluid}
              />
            </Image>

            <LinkContainer>
              <Title>{node.title}</Title>
              <Type>{node.type}</Type>
              <Date>{node.date}</Date>
            </LinkContainer>
          </a>
        ))}
      </Container>



    </Wrapper>
  );
};

export default Music;


export const RecordsQuery = graphql`
  query {
    records: allRecordsJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          type
          date 
          url
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

