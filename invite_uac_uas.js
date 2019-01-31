"use strict";

var expect = require("chai").expect;
var chai = require("chai");
var chaiSIP = require("chai-sip");


chai.use(chaiSIP);



var sip = chai.sip({userid:"<userid>",domain:"<domain>",password:"<password>", transport:"tcp", port:5050});

sip.waitForRequest(function (req) {
  console.log("got request",req);
  //expect(req).to.be.method("INVITE");
  if(req.method=="INVITE") {
    setTimeout(()=> {
      sip.sendBye(req);
    },3000)
  }
});



sip.invite("sip:<user>@<domain>",{diversion:"sip:+12345@<domain>","P-Asserted-Identity":"sip:+12234@<domain>"},null, null).onFinalResponse(function (resp) {

  expect(resp).to.be.status(200);


});
