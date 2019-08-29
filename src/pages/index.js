import React from 'react';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';
import mobile from '../images/mobile.png'
import mobileFlip from '../images/mobileFlip.png'
import './index/index.css'

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
        <SEO title="About Me" keywords={['react', 'javascript', 'web']} />
        <Paragraph>
          I follow the new developments and interested so much  Web Technologies ,IOT , Industrie 4.0 and robotics. I already made many basic projects about automation and robotics,I learned many different system integration,
          From my bachelor I have several experience , I already joined 2 times AUVSI SUAS Competetion,
          I am now Master Student that completed my all lectures, I should start my master next october 2019  I am looking a company for my master thesis.
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



        <Paragraph>
          I already studied Embedded Systems, Embedded Security, Real Time Programming, Robotics and Advanced Control, Image and Signal Processing during my Master education.
        </Paragraph>
        <Paragraph>
          I can work for this subjects,
        <li> Factory automation</li>
          <li> Web Applications for robots, industrial systems</li>
          <li> Robot Vision
        <ul>
              <li>Color Detection</li>
              <li>Material Sorting</li>
              <li>Object Recognition</li>
            </ul></li>
          <li> Cryptography methods for Embedded system</li>
          <li> Electrical Power System Design</li>
          <li> Electrical Design(HomeAutomation /Solar Systems)</li>
        </Paragraph>
      </div>
    )
  }
};

export default Index;




