"use strict";

const React = require("react");

const healthInsuranceFee = require("./lib/healthInsuranceFee.js");
const laborInsuranceFee = require("./lib/laborInsuranceFee.js");
const retirePlanFee = require("./lib/retirePlanFee.js");

let Index = React.createClass({
  displayName: "Index",

  render(){
    return (
      <p>{JSON.stringify(healthInsuranceFee)}</p>
    );
  }
});

React.render(<Index/>, document.getElementById("container"));
