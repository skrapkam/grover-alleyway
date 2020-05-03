/** @jsx jsx */ import Link from "gatsby-link";
import { Component } from "react";
import { jsx, css } from "@emotion/core";

const BackStyled = css`
  margin-bottom: 56px;
  text-decoration: underline;
`;

class Back extends Component {
  render() {
    return (
     <div css={BackStyled}>
        <Link to="/">← GROVER ALLEYWAY</Link>
     </div>
    );
  }
}

export default Back;