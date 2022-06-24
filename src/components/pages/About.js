import React from "react";
import "./PeopleWishes.css";
import "../../App.css";
const About = () => {
  const godwin = "imagesG/img-17.jpg";
  return (
    <div className="products">
      <h1>who is Godwin</h1>

      <div className="product-img">
        <img className="imgs" style={imgs} src={godwin} alt="ray images" />
      </div>
      <aside className="information">
        <p>
          If you ask me I can't tell you who he is but what i can say is what He
          is
        </p>
        <p>
          He is a kind of person that love to work the right part even if He is
          the only one on that roads.
        </p>
        <p>He is a man who believed in pursuing God.</p>
        <p>and the rest please kindly ask him.</p>
      </aside>
    </div>
  );
};

export default About;
let imgs = {
  //  maxWidth: "500px",
  //  maxHeight: "500px",
  background: " rgb(246, 156, 85)",
  borderRadius: "30%",
};
