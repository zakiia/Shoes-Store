import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="question">1. How reacts works?</h5>
      <p className="answer">
        React depended on a virtual DOM, which is a copy of the actual DOM.
        react's virtual dom is immediately reloaded to reflect this new change
        whenever there is a change in the data state. After which, react
        compares the virtual dom to the actual dom to figure out what exactly
        has changed.
      </p>
      <h5 className="question">2. props vs state</h5>
      <p className="answer">
        State : State is manage within the component. it can be changed. state
        cam be accessed using the use state hooks in functional components and
        in-class components can be accessed using this. State changes can be
        asynchronous. State is control by react component. State can used to
        display changes with the componets. <br />
        Props : Props gets passed to the component. Props are read only and
        cannot be changed. Props can be accessed in functional component using
        props parameter and in-class component.Props are read only. Props are
        controlled by whoever renders the components. Props are used to
        communicate between components.
      </p>
    </div>
  );
};

export default Footer;
