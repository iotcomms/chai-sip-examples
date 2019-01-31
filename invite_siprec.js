"use strict";

var expect = require("chai").expect;
var chai = require("chai");
var chaiSIP = require("chai-sip");


chai.use(chaiSIP);




var sip = chai.sip({userid:"<userid>",domain:"<domain>", password:"<password>", transport:"TCP",port: 5066});
//{route:"sip:127.0.0.1;transport=tcp"}
sip.inviteSipRec("sip:siprec@<domain>;transport=tcp",null,null, null).onFinalResponse( (resp) =>  {
  console.log("Got final resp for SIPRec invite",resp);
  expect(resp).to.be.status(200);
  setTimeout(()=> {
    sip.sendBye(resp);
    console.log("Sent bye, got response",resp);

  },5000);

});
