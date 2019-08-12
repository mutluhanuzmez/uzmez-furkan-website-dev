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
import Paragraph from '../components/shared/Paragraph';
import Subtitle from '../components/shared/Subtitle';

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
    <SEO title="Showcase" />

      <table width="512rem">
        <tr>
          <Subtitle>Antalya</Subtitle>
        </tr>
        <Bordered>
          <td>
            <Img width="312rem" height="312rem" src={re1} alt="Collage of several pictures taken at meetups" />
          </td>
          <td style={{
            paddingLeft: 15
          }}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
               magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita
                 kasd gubergren, no sea takimata sanctus est Lorem
                  ipsum dolor sit amet.
            </Paragraph>
          </td>
        </Bordered>
        <tr>
          <td>

          </td>
          <td style={{float: "right"}}>
          <Subtitle>Eskişehir</Subtitle>
          </td>

        </tr>
        <tr>
          <td style={{
            paddingRight: 15
          }}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Paragraph>
          </td>
          <td  style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
            <Img width={312} height={312} src={re2} alt="Collage of several pictures taken at meetups" />
          </td>
        </tr>
        <tr>
          <Subtitle>Cairo</Subtitle>
        </tr>
        <tr>
          <td>
            <Img width={312} height={312} src={re3} alt="Collage of several pictures taken at meetups" />
          </td>
          <td>
            <Img width={312} height={312} src={re4} alt="Collage of several pictures taken at meetups" />
          </td>
          <td>
            <Img width={312} height={312} src={re5} alt="Collage of several pictures taken at meetups" />
          </td>
          <td>
            <Img width={312} height={312} src={re6} alt="Collage of several pictures taken at meetups" />
          </td>
          <td>
            <Img width={312} height={312} src={re7} alt="Collage of several pictures taken at meetups" />
          </td>
        </tr>
      </table>
  </>
);
