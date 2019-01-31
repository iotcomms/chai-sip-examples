"use strict";

var expect = require("chai").expect;
var chai = require("chai");
var chaiSIP = require("chai-sip");


chai.use(chaiSIP);




var sip = chai.sip({userid:"<userid>",domain:"<domain>", password:"<password>", transport:"TCP",port: 5066});
//{route:"sip:127.0.0.1;transport=tcp"}
sip.message("sip:alarm@<domain>;transport=tcp",null,"application/scaip+xml",
"<mrq><ref>787025300001</ref><cha>1</cha><mty>ME</mty><cid>__CID__</cid><dty>0004</dty><stc>0010</stc><crd>gsm:__GSMNUMBER__</crd></mrq>"
).onFinalResponse( (resp) =>  {
  console.log("Got final resp for SCAIP message",resp);
  expect(resp).to.be.status(200);

});
