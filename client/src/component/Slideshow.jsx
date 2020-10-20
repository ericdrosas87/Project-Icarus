import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import "./style/slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = styled.div`
  width: 100%;
`;

class Slideshow extends React.Component {
  render() {
    return (
      <Wrapper>
        <Slider
          className="slider"
          dots={true}
          infinite={true}
          speed={2000}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <Page className="slide logo1">
            <div className="icon">
              <FontAwesomeIcon icon="feather-alt" />
            </div>
            <span>project</span>Icharus
          </Page>
          <Page className="slide mission">
            <h3>Project Icharus</h3>
            <h4>Mission Statement:</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
              Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
              Tortor at auctor urna nunc id cursus.
            </h5>
          </Page>
          <Page className="slide One">
            <div>Image 1</div>
            <div className="image">
              <img src="./images/topView.png" />
            </div>
          </Page>
          <Page className="slide Two">
            <div>Image 2</div>
            <div className="image">
              <img src="./images/sideView.png" />
            </div>
          </Page>
          <Page className="slide Three">
            <div>Image 3</div>
            <div className="image">
              <img src="./images/closehandle.png" />
            </div>
          </Page>
        </Slider>
      </Wrapper>
    );
  }
}

export default Slideshow;
