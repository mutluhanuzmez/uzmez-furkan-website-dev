import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Subtitle from '../components/shared/Subtitle';
import Anchor from '../components/shared/Anchor';
import mobile from '../images/mobile.png'
import mobileFlip from '../images/mobileFlip.png'
import re1 from '../images/kamon.png';
import re5 from '../images/kamonpre.png';
import re4 from '../images/cabrio.png';
import re2 from '../images/cabriopre.png';
import re3 from '../images/predicorection.png';
import re6 from '../images/predicorectionrslt.png';
import ekip from '../images/ekip.jpg';
import './index/index.css'

const Img = styled.img`
  margin-right: 1rem;

  @media (max-width: ${props => props.theme.breakpoint}) {
    margin: 0 auto 1rem;
    display: block;
    float: none;
  }
`;
class Index extends React.Component {
  constructor() {
    super();
    this.x = 80;
    this.y = 13;
    this.objX = 356;
    this.objY = 10;
    this.objectObtained = false;
    this.missionCompleted = false;
    this.canvasRef = React.createRef();
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.motionFlag = true;
    this.motionController = "Stop"
    this.start = this.start.bind(this);
    this.forFirstTime = true;
  }

  componentDidMount() {
    const c = this.canvasRef.current;
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    this.setState({ motionFlag: true })
    this.setState({ motionController: "Stop Robot" })
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 0.1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  componentDidUpdate() {
    const c = this.canvasRef.current;
    const ctx = c.getContext("2d");
    const img = document.getElementById("mobilrobo");
    const imgFlip = document.getElementById("mobilroboFlip");
    ctx.save()

    // console.log(this.state.motionFlag)
    if (this.state.motionFlag) {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(img, this.x, this.y, 64, 64);
      ctx.fillStyle = "red";
      ctx.fillRect(this.objX, this.objY, 20, 20);

      if (this.x == 300 && !this.objectObtained) {

        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(img, this.x, this.y, 64, 64);
        ctx.fillStyle = "green";
        ctx.fillRect(this.objX, this.objY, 20, 20);
        this.objectObtained = true;
        // clearInterval(myVar);
      } else if (this.x < 300 && !this.objectObtained) {

        this.x = this.x + 1;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(img, this.x, this.y, 64, 64);
        ctx.fillStyle = "red";
        ctx.fillRect(this.objX, this.objY, 20, 20);
      } else if (this.objectObtained && this.x == 300) {
        this.x = this.x - 1;
        this.objX = this.objX - 72;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
        ctx.fillStyle = "green";
        ctx.fillRect(this.objX, this.objY, 20, 20);
      } else if (this.x > 80 && this.objectObtained) {
        this.x = this.x - 1;
        this.objX = this.objX - 1;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
        ctx.fillStyle = "green";
        ctx.fillRect(this.objX, this.objY, 20, 20);
      } else if (this.x <= 80 && this.objectObtained) {

        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
        ctx.fillStyle = "green";
        ctx.fillRect(this.objX, this.objY, 20, 20);
        this.x = 80;
        this.y = 13;
        this.objX = 356;
        this.objY = 10;
        this.objectObtained = false;
        this.missionCompleted = false;
      }
    }


    ctx.restore();
  }

  start() {
    if (!this.state.motionFlag) {
      this.setState({ motionFlag: true })
      this.setState({ motionController: "Stop Robot" })
    } else {
      this.setState({ motionFlag: false })
      this.setState({ motionController: "Start Robot" })
    }
  }

  render() {
    return (
      <div>
        <SEO title="Motivation" keywords={['react', 'javascript', 'web']} />
        <Paragraph>
         I follow the new developments and interested so much Web Technologies, IoT, Industrie 4.0 and Robotics. I already made many basic projects about automation and robotics,I learned many different system integrations, From my bachelor, I have several experiences, I already joined 2 times AUVSI SUAS Competition,
          I am now a Master Student that completed my all lectures.
        </Paragraph>
        <img id="mobilrobo" width="64" height="64" style={{ display: "none" }} src={require("../images/mobile.png")} alt="The Scream" />
        <img id="mobilroboFlip" width="64" height="64" style={{ display: "none" }} src={require("../images/mobileFlip.png")} alt="The Scream" />
        <div id="container" style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}>
          <button id="controls" className={this.state.motionFlag ? "inMotion" : "inPosition"} type="button" onClick={this.start}>{this.state.motionController}</button>
          <canvas ref={this.canvasRef} id="viewport" width="500rem" height="80" style={{
            border: 1,
            backgroundColor: "#f1f1f1",
          }}></canvas>
          <menu>
          </menu>
        </div>
      
    

    

    
     <br />
      <Anchor href="https://github.com/mutluhanuzmez/uzmez-furkan-website-dev/blob/master/src/pages/index.js ">Canvas--Robot </Anchor>
           <br />
           <Paragraph>
          
          I already studied Embedded Systems, Embedded Security, Real Time Programming, Robotics and Advanced Control, Image and Signal Processing during my Master education.
          I am already working on object classification and localization as a topic of my master thesis.
        </Paragraph>
           <tr>
        <td>
         <Paragraph>
            Video Frame
            </Paragraph>
        <Img width={312} height="auto" src={re3} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
        <Paragraph>
           Output:Auto
            </Paragraph>
          <Img width={312} height="auto" src={re6} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
         <Paragraph>
            Sliding Window Results:
            </Paragraph>
        <Img width={312} height="auto" src={re5} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
        <Paragraph>
           Average:Truck
            </Paragraph>
          <Img width={312} height="auto" src={re1} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
      <tr>
        <td>
         <Paragraph>
            Sliding Window Results:
            </Paragraph>
        <Img width={312} height="auto" src={re2} alt="Collage of several pictures taken at meetups" />
        </td>
        <td>
        <Paragraph>
           Average:Auto
            </Paragraph>
          <Img width={312} height="auto" src={re4} alt="Collage of several pictures taken at meetups" />
        </td>
      </tr>
       

       
        <Paragraph>
          I can work for this subjects,
        <li>  Automation</li>
          <li> Desktop and Web Applications for robots, industrial systems</li>
          <li> Robot Vision
        <ul>
              <li>Object Recognition and Localization</li>
              <li>Material Sorting</li>
              
            </ul></li>
        </Paragraph>
        <tr>
        <Subtitle>AUVSI SUAS - 2014 </Subtitle>
      </tr>
        <Img width={645} height="auto" src={ekip} alt="Collage of several pictures taken at meetups" />
      </div>
    )
  }
};

export default Index;




