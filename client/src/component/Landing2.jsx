import React from "react";
import "./style/landing2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing2() {
  return (
    <div>
      <div className="statement">
        <h3>Project Icharus</h3>
        <h4>Welcome</h4>
        <h5>
          Our goal at Icarus is to create a safer future for students, families,
          and patrons in communities around the nation.
        </h5>
      </div>
      <section className="landing2">
        <div className="icon1">
          <FontAwesomeIcon icon="info-circle" className="iconSee" />
        </div>
        <div className="info1">
          <p>
            At Icarus we are using geo-fencing technologies to develop a passive
            safety for the AR-15 platform. This technology allows our company
            and the user to “black-out” areas on a map such as: schools, movie
            theaters, parks, and their own home if they desire. Upon
            implementation of this safety, our system will recognize the
            location of the firearm, and if the user is not located in a “black
            out” zone, the safety can be disabled.
          </p>
        </div>
        <div className="icon2">
          <FontAwesomeIcon icon="list-alt" className="iconSee" />
        </div>
        <div className="info2">
          <div className="dir1">
            <ul>
              <li>Login or Register Account</li>
              <li>Place Pre-Order</li>
              <li>Send Message with Location for Fencing</li>
            </ul>
          </div>
          <div className="dir2">
            <ul>
              <li>Please allow 24-36 hours for addition to network</li>
              <li>If more than one location to add may take longer</li>
              <li>Contact support for further questions</li>
            </ul>
          </div>
        </div>
        <div className="icon3">
          <FontAwesomeIcon icon="feather-alt" className="icon" />
        </div>
        <div className="info3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            magna fringilla urna porttitor. Ipsum dolor sit amet consectetur
            adipiscing elit. Sed felis eget velit aliquet. Sapien faucibus et
            molestie ac feugiat sed lectus. Sem viverra aliquet eget sit. Nec
            ullamcorper sit amet risus. Commodo viverra maecenas accumsan lacus
            vel facilisis volutpat. Ac turpis egestas sed tempus urna et
            pharetra pharetra massa. In vitae turpis massa sed elementum.
            Lobortis mattis aliquam faucibus purus in massa tempor nec. Non
            curabitur gravida arcu ac tortor dignissim convallis. Massa sapien
            faucibus et molestie ac feugiat. Sociis natoque penatibus et magnis
            dis. Bibendum est ultricies integer quis auctor elit sed vulputate
            mi. Ut tellus elementum sagittis vitae. Nisi porta lorem mollis
            aliquam ut porttitor leo a diam. In est ante in nibh mauris cursus
            mattis molestie. Enim nulla aliquet porttitor lacus luctus accumsan
            tortor posuere. Lorem dolor sed viverra ipsum nunc aliquet bibendum.
          </p>
        </div>
        <div className="pic1">
          <FontAwesomeIcon icon="feather-alt" className="icon" />
        </div>
        {/*side pictures of google map*/}
        <div className="pic2"></div>
        <div className="pic3"></div>

        <div className="pic4">
          <FontAwesomeIcon icon="feather-alt" className="iconSee" />
        </div>
        <div className="pic5" src="./style/images/360top.jpg">
          <FontAwesomeIcon icon="feather-alt" className="icon" />
        </div>
        <div className="pic6">
          <FontAwesomeIcon icon="feather-alt" className="icon" />
        </div>
      </section>
    </div>
  );
}

export default Landing2;
