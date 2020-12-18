import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import Background from "../../../hoc/Background/Background";
import gear from "../../../assets/img/settings-gear-63.svg";

const DomainPage = (props) => {
  if (!sessionStorage.getItem("Token")) {
    props.history.replace("/");
  }
  const [checkVal, setCheckVal] = useState("Technical");
  function getSelectedVal(event) {
    setCheckVal(event.target.value);
  }
  const linkTo = {
    pathname: "/instructions",
    param: checkVal,
  };
  return (
    <Background>
      <div className='heading'>Choose Domain</div>
      <div className='sub-heading'>Choose a domain to start the quiz</div>
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        // }}
        onChange={getSelectedVal}>
        <div className='rdio-grp lgn-btn'>
          <input
            type='radio'
            value='Technical'
            name='selection'
            id='technical'
            className={classes.input}></input>
          <label
            htmlFor='technical'
            className={`${classes.label} ${classes.tech}`}>
            {/* <img src={gear} height='25px' style={{verticalAlign: "baseline"}} /> */}
            Technical
          </label>
        </div>
        <div className='rdio-grp lgn-btn'>
          <input
            type='radio'
            value='Design'
            name='selection'
            id='design'
            className={classes.input}></input>
          <label htmlFor='design' className={classes.label}>
            Design
          </label>
        </div>
        <div className='rdio-grp lgn-btn'>
          <input
            type='radio'
            value='Management'
            name='selection'
            id='management'
            className={classes.input}></input>
          <label htmlFor='management' className={classes.label}>
            Management
          </label>
        </div>
        <Link to={linkTo} className='btn btn-blue lgn-btn'>
          Start Quiz
        </Link>
      </div>
    </Background>
  );
};
export default DomainPage;
