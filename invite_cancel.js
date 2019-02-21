"use strict";

var expect = require("chai").expect;
var chai = require("chai");
var chaiSIP = require("chai-sip");


chai.use(chaiSIP);




var sip = chai.sip({userid:"userid",domain:"127.0.0.1", password:"password", transport:"TCP",port: 5066});
//{route:"sip:127.0.0.1;transport=tcp"}
sip.inviteSipRec("sip:siprec@127.0.0.1;transport=tcp",null,null, null).onFinalResponse( (resp) =>  {
  console.log("Got final resp for SIPRec invite",resp);
  expect(resp).to.be.status(200);


},
//Second parameter to onFinalResponse is callback upon reception of provisional responses
(provisionalResponse) => {
  console.log("Got provisional resp for SIPRec invite",provisionalResponse);
  sip.sendCancel(provisionalResponse);







});
