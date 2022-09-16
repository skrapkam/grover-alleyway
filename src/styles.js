import styled from "@emotion/styled";

export const RecordTitle = styled.h1`
    font-weight: normal;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 56px;
    line-height: 2.5rem;
    @media (max-width: 990px) {
        margin-bottom: 32px;
      }
`

export const Info = styled.div`
    padding-left: 5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1405px) {
        display: block; 
      }

      @media (max-width: 990px) {
        padding-left: 0;
      }

`

export const Tracks = styled.div`
      padding-right: 5vw;
`

export const Metadata = styled.div`
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;

    h2 {
        text-transform: uppercase;
        font-size: 1rem;
    }

    ul {
        list-style-type: none;
        margin-left: 0;
    }

    @media (max-width: 990px) {
        display: block; 
      }

`

export const CoverStyle = styled.div`
width: 450px;
margin-bottom: 56px;
@media (max-width: 990px) {
    width: auto;
  }

`

export const Wrapper = styled.div`
    padding: 32px;
`

export const ListenButton = styled.button`
  background: white;
  width: 100%;
  border: 1px solid black;
  height: 48px;
  text-transform: uppercase;
  cursor: pointer;
  color: #000;

  &:hover {
      background: #000;
      color: #fff;
  }

  &:active {
      opacity: 50%;
  }

`

export const ListenButtonWrapper = styled.div`
  margin-top: 32px;

`

export const Back = styled.div`
margin-bottom: 56px;
text-decoration: underline;
`