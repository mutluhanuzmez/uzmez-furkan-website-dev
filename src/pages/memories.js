import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';
import re1 from '../images/re1.jpg';
import re2 from '../images/re2.jpg';
import re3 from '../images/re3.jpg';
import re4 from '../images/re4.jpg';
import re5 from '../images/re5.jpg';
import re6 from '../images/re6.jpg';
import re7 from '../images/re7.jpg';
import castle from '../images/castle.jpeg';
import auvsiSuas2015 from '../images/auvsisuas2015.jpeg';
import acarrier from '../images/acarrier.jpg';
import empirestatefurkan from '../images/empirestatefurkan.jpg';
import suaswithmutlu from '../images/suaswithmutlu.jpg';
import timesfurkan from '../images/timesfurkan.jpg';
import washingtonMerkez from '../images/washingtonMerkez.jpg';
import washingtonwater from '../images/washingtonwater.jpg';
import Paragraph from '../components/shared/Paragraph';
import Subtitle from '../components/shared/Subtitle';
import './css/showcase.css'
const Quote = styled.blockquote`
  margin: 0 1rem 0.75rem;
  padding-left: 0.75rem;
  border-left: 2px solid currentColor;
  font-size: 1rem;
`;

const Img = styled.img`
  margin-right: 1rem;

  @media (max-width: ${props => props.theme.breakpoint}) {
    margin: 0 auto 1rem;
    display: block;
    float: none;
  }
`;

const Bordered = styled.tr`
  border-bottom: 1px solid #fff;
`

export default () => (
  <>
    <SEO title="Memories" />

    <table width="512rem">
      <tr>
       
      </tr>
      <Bordered>
        <td>
          
        </td>
        <td>
         
        </td>
      </Bordered>
      <tr>
        <td>

        </td>
        <td style={{ float: "right" }}>
          
        </td>

      </tr>
   
      <tr>
        <Subtitle>AUVSI SUAS - 2014 Maryland,USA </Subtitle>
      </tr>
      <tr>
        <td>
         <Paragraph>
            Award Ceromony
            </Paragraph>
        <Img width={312} height="auto" src={re2} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
        <Paragraph>
           National Air and Space Museum
            </Paragraph>
          <Img width={312} height="auto" src={re4} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
        <Paragraph>
         Team Presantation 
            </Paragraph>
          <Img width={312} height="auto" src={re5} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
        <Paragraph>
          MQ-8 Fire Scout
            </Paragraph>
          <Img width={312} height="auto" src={re6} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
          <Img width={312} height="auto" src={re7} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <Subtitle>AUVSI SUAS - 2015 </Subtitle>
      </tr>

    </table>
    <Img width={645} height="auto" src={auvsiSuas2015} alt="Collage of several pictures taken at meetups" />

    <iframe width="645" height="480" src="https://www.youtube.com/embed/3OJn-Hbj0WY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <table>
      <tr>
        <Subtitle>AUVSI SUAS - 2017 </Subtitle>
      </tr>
      <tr>
        <td>
          <Img width={312} height="auto" src={suaswithmutlu} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
          <Img width={312} height="auto" src={washingtonMerkez} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
          <Img width={312} height="auto" src={washingtonwater} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
          <Img width={312} height="auto" src={timesfurkan} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
          <Img className="rotateimg180" width={312} height="auto" src={empirestatefurkan} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
          <Img className="rotateimg180" width={312} height="auto" src={acarrier} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>

      </tr>
    </table>
  </>
);
