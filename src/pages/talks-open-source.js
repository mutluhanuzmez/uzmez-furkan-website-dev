import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';


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
    <SEO title="Talks & Open Source" />
    
  </>
);
