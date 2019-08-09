import React from 'react';
import styled from 'styled-components';


const footerPaddingStyled = styled.div`
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  text-align: center;
  box-sizing: border-box;
  padding: 60px 0px;
`

const footerStyled = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    background-color: #070617;

    .col {

    }

`;


function Footer({ children }) {
  return (
      <>
        <footerPaddingStyled>
            Putter Padding
        </footerPaddingStyled>

        
        <footerStyled>
           place holder
        </footerStyled>
    </>
  );
}

export default Footer;