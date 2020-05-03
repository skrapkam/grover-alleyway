/** @jsx jsx */ import Link from "gatsby-link";
import styled from "@emotion/styled";
import { Component } from "react";
import { jsx } from "@emotion/core";

class Header extends Component {
  render() {
    return (
     <div>
        {this.props.children}
        </div>
    );
  }
}

export default Header;