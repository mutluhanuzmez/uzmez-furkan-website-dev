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
    <SEO title="My Writings" />
    <Subtitle>
      There will be my writings
    </Subtitle>
    <Paragraph>
     <Anchor href=" https://github.com/anadolueem/signaturecomparison/blob/master/sketch_190521a.pde">Signature Comparison</Anchor>
        <br />
      <Anchor href=" https://github.com/anadolueem/signaturecomparison/blob/master/sketch_190521a.pde">link1</Anchor>
         <br />
        <Anchor href=" https://github.com/anadolueem/signaturecomparison/blob/master/sketch_190521a.pde">link2</Anchor>
           <br />
          <Anchor href=" https://github.com/anadolueem/signaturecomparison/blob/master/sketch_190521a.pde">link3</Anchor>
             <br />
  
    </Paragraph>
  </>
);
