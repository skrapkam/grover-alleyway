import { Global, css } from "@emotion/core";
import * as React from 'react'

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

 body {
     font-family: arial;
 }

 a {
     text-decoration: none;
     color: black;
 }
 

 a:hover {
     text-decoration: underline;
 }

 a:active {
     opacity: 50%;
 }
     
    `}
  />
);