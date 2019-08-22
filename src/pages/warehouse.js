import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Subtitle from '../components/shared/Subtitle';
import Anchor from '../components/shared/Anchor';
import Paragraph from '../components/shared/Paragraph';

const Img = styled.img`
  margin-right: 1rem;
  float: left;

  @media (max-width: ${props => props.theme.breakpoint}) {
    margin: 0 auto 1rem;
    display: block;
    float: none;
  }
`;

export default () => (
  <>
    <SEO title="Warehouse"/>
    <Subtitle>
      There will be my writings
    </Subtitle>
    <Paragraph>
     <Anchor href=" https://github.com/anadolueem/signaturecomparison/blob/master/sketch_190521a.pde">Signature Comparison</Anchor>
           <br />
      <Anchor href="https://github.com/mutluhanuzmez/uzmez-furkan-website-dev/blob/master/src/pages/index.js ">Canvas Robot</Anchor>
           <br />
 
            <br />
  
    </Paragraph>
  </>
);
