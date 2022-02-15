import { Col, Row } from "react-bootstrap";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Trajectory.css";
import Subsection from "../Components/Subsection/Subsection";
import TrajectoryCard from "../Components/TrajectoryCard/TrajectoryCard";
import AboutCard from "../Components/AboutCard/AboutCard";

export default function Trajectory() {
  return (
    <>
      <div className="container">
        <SectionTitle
          descripcion="Check out my Trajectory"
          title="Trajectory"
        />

        <div>
          <h1 className="Subtt">Lenguajes & technologies</h1>
          {/* Para mas iconos: https://devicon.dev/ */}
          <Row>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-debian-plain"
                cardTitle="Debian"
                cardText="Experience with Linux Servers based on Debian"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-react-original"
                cardTitle="React / React Native"
                cardText="Solid knowledge for web and app development with React"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-javascript-plain"
                cardTitle="JavaScript"
                cardText="Experience using JS for Frontend and Programs"
              />
            </Col>
          </Row>

          <Row>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-python-plain"
                cardTitle="Python"
                cardText="Experience developing programs with Python"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-docker-plain"
                cardTitle="Docker"
                cardText="Experience doing containers, images, docker-compose and dockerfiles"
              />
            </Col>
            <Col className="about-col--icons">
              <AboutCard
                iconClass="devicon-android-plain"
                cardTitle="App Development"
                cardText="Knowledge developing Android and IOS apps with React Native "
              />
            </Col>
          </Row>
        </div>

        <Subsection description="Some of my achievements" title=" Resume" />
        <div className="ed-ex"></div>
        <Row>
          <h1 className="Col-tit">Education & experience</h1>
        </Row>

        <Row>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Computer Engineering"
              sub="UNAM | FES ARAGON 2018-2022"
              txt="I have learned: Programming, Networks,
              Creation of Databases (SQL),
              Design and implementation of electronic circuits through the use of programmable logic circuits (PIC) and Arduino,
              Cloud Computing with AWS"
            />
          </Col>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Freelance project manager"
              sub="Web Development | From December de 2021 to date"
              txt="Responsible for the coordination, planning and implementation of web pages,
              Responsible of the Front-End development using React JS and TypeScript,
              I set up Linux servers using Debian, Docker and NGINX"
            />
          </Col>
        </Row>

        <Row>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Web Services"
              sub="UNAM | FES ARAGON"
              txt="Web services and microservices with Linux, Docker and AWS"
            />
          </Col>
          <Col className="about-col--icons">
            <TrajectoryCard
              tit="Ethical hacking"
              sub="Gloal Lynx 2021"
              txt="Cybersecurity principles with specialized tools"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
