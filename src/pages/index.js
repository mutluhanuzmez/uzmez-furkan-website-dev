import React from 'react';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

export default () => (
  <>
    <SEO title="About Me" keywords={['react', 'javascript', 'web']} />
    <Paragraph>
      I am from Turkıye, I{' '}
      <span role="img" aria-label="horse">
        💖 🐬
      </span>{' '}
      the technology ,especially robotics , I interested so much and love motion
      I already made many basic projects about automation and robotics,I learned many different system integration,
      From my bachelor I have several experience , I already joined 2 times AUVSI SUAS Competetion,
      I am now Master Student that completed my all lectures, I should start my master next october 2019  I am looking a company for my master thesis.
    </Paragraph>
   
    <Paragraph>
     I already studied Embedded Systems,Embedded Security,Real Time Programming,Robotics and Advanced Control,Image and Signal Processing during my Master education.
    </Paragraph>
    <Paragraph>
     I can work for this subjects,
    <li> Factory automation</li>
    <li> Web Applications for robots, industrial systems</li>
 
    <li> Robot Vision
    <ul>
      <li>Color Detection- OpenCV</li>
      <li>Face Recognition</li>
    </ul></li>
    <li> Cryptography methods for Embedded system</li>
    <li> Electrical Power System Design</li>
    <li> Electrical Design(HomeAutomation /Solar Systems)</li>
    </Paragraph>

  </>
);
