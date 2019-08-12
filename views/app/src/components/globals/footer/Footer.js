import React from 'react';
import styled from 'styled-components';


const FooterPaddingStyled = styled.div`
  height: 200px;
  width: 100%;
  background-color: #f0f0f0;
  text-align: center;
  box-sizing: border-box;
  padding: 60px 0px;
`

const FooterStyled = styled.div`
    width: 100%;
    position: relative;
    height: auto;
    background-color: #070617;
`;


function Footer({ children }) {
  console.log(styled);
  return (
      <div>
        <FooterPaddingStyled>
            Putter Padding
        </FooterPaddingStyled>

        
        <FooterStyled>
           place holder
        </FooterStyled>
    </div>
  );
}

export default Footer;