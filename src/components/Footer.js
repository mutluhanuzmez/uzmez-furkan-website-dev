import React from 'react';
import styled from 'styled-components';

import Paragraph from './shared/Paragraph';
import Anchor from './shared/Anchor';

const Footer = styled.footer`
  padding-bottom: 2rem;
`;

export default () => (
  <Footer>
    <Paragraph>
      View my complete resume on{' '}
      <Anchor href="https://www.linkedin.com/">LinkedIn</Anchor>
      .<br />
      You can also download it as PDF on{' '}
      <Anchor href="https://docs.google.com">
        Google Drive
      </Anchor>
   
      <br />
      Follow me on <Anchor href="https://twitter.com/">Twitter</Anchor>
      .
      <br />
      See some of my code on{' '}
      <Anchor href="https://github.com/anadolueem">GitHub</Anchor>.
    </Paragraph>
  </Footer>
);
