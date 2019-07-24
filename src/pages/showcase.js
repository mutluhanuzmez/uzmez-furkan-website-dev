import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

const Quote = styled.blockquote`
  margin: 0 1rem 0.75rem;
  padding-left: 0.75rem;
  border-left: 2px solid currentColor;
  font-size: 1rem;
`;

export default () => (
  <>
    <SEO title="Showcase" />
    <Paragraph>
     Memories
    </Paragraph>
  </>
);
