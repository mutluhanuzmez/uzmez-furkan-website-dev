import React from 'react';

import SEO from '../components/SEO';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';
import mobile from '../images/mobile.png'
import mobileFlip from '../images/mobileFlip.png'

class Index extends React.Component {
  constructor() {
    super();
    this.x = 80;
    this.y = 83;
    this.objX = 256;
    this.objY = 80;
    this.objectObtained = false;
    this.missionCompleted = false;
    this.canvasRef = React.createRef();
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    const c = this.canvasRef.current;
    const ctx = c.getContext("2d");
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  componentDidUpdate(){
    setTimeout(()=>{}, 30000000)
    const c = this.canvasRef.current;
    const ctx = c.getContext("2d");
    const img = document.getElementById("mobilrobo");
    const imgFlip = document.getElementById("mobilroboFlip");
    ctx.save()
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img, this.x, this.y, 64, 64);
    ctx.fillStyle = "red";
    ctx.fillRect(this.objX, this.objY, 20, 20);
    if (this.x == 200 && !this.objectObtained) {
      console.log("test1", !this.objectObtained);
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(img, this.x, this.y, 64, 64);
      ctx.fillStyle = "green";
      ctx.fillRect(this.objX, this.objY, 20, 20);
      this.objectObtained = true;
      // clearInterval(myVar);
    } else if (this.x < 200 && !this.objectObtained) {
      console.log("test2");
      this.x = this.x + 5;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(img, this.x, this.y, 64, 64);
      ctx.fillStyle = "red";
      ctx.fillRect(this.objX, this.objY, 20, 20);
    } else if (this.objectObtained && this.x == 200) {
      console.log("test3");
      this.x = this.x - 5;
      this.objX = this.objX - 72;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
      ctx.fillStyle = "green";
      ctx.fillRect(this.objX, this.objY, 20, 20);
    } else if (this.x > 80 && this.objectObtained) {
      this.x = this.x - 5;
      this.objX = this.objX - 5;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
      ctx.fillStyle = "green";
      ctx.fillRect(this.objX, this.objY, 20, 20);
    } else if (this.x <= 80 && this.objectObtained) {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(imgFlip, this.x, this.y, 64, 64);
      ctx.fillStyle = "green";
      ctx.fillRect(this.objX, this.objY, 20, 20);
    }

    ctx.restore();
  }


  render() {
    return (
      <div>
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
        <img id="mobilrobo" width="64" height="64" style={{ display: "none" }} src={require("../images/mobile.png")} alt="The Scream" />
        <img id="mobilroboFlip" width="64" height="64" style={{ display: "none" }} src={require("../images/mobileFlip.png")} alt="The Scream" />
        <canvas ref ={this.canvasRef} id="myCanvas" width="512" height="256" style={{
          border: 1,
          backgroundColor: "#d3d3d3"
        }}></canvas>


        <Paragraph>
          I already studied Embedded Systems,Embedded Security,Real Time Programming,Robotics and Advanced Control,Image and Signal Processing during my Master education.
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




