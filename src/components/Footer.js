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
      <Anchor href="https://drive.google.com/open?id=164_UUh6k9XmjAKUso4f3k_Fv2rQ-PJaf">
        Google Drive
      </Anchor>
   
      <br />
      Follow me on <Anchor href="https://twitter.com/">Twitter</Anchor>
      .
      <br />
      See some of my code on{' '}
      <Anchor href="https://furkanuzmez.github.io/warehouse">GitHub</Anchor>.
    </Paragraph>
  </Footer>
);
