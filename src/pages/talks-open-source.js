import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

import collage from '../images/shamann-speaker.jpg';

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
    <Img width={256} height={256} src={collage} alt="Collage of several pictures taken at meetups" />
    <h1>furkans</h1>
     <Img width={256} height={256} src={collage} alt="Collage of several pictures taken at meetups" />
     <h1>furkans</h1>
      <Img width={256} height={256} src={collage} alt="Collage of several pictures taken at meetups" />
  </>
);
