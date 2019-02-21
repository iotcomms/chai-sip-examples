# Examples

This directory includes a few examples how to use the chai-sip plugin.

## Installation

To be test the examples first edit the content of the file to point to your own SIP server and then:

```
$ git clone https://github.com/iotcomms/chai-sip-examples.git
$ cd chai-sip-examples
$ npm install
```


## SIPRec

invite_siprec.js provides an example that sends a SIPRec Invite requests, starts two RTP streams towards the information in the 200 OK received for the request. After 5s it hangs up the recording by sending a SIP Bye request.

`$ node invite_siprec.js`

## SIPRec with provisional response callback triggering Cancel request

invite_cancel.js provides an example that sends a SIPRec Invite requests and then sends a Cancel request when a provisional response has been reveived for the original Invite.

`$ node invite_cancel.js`

## SIP UAC and UAS for proxy tests

invite_uac_uas.js implements a test for SIP proxies where a SIP request is sent to a server by  a UAC. The server proxies the request back to the test application which replies with a 200 OK response from the UAS. The call is then hung up after 5s by the UAS.

The UAC expect to receive a 200 OK response to the invite request.

`$ node invite_uac_uas.js`

## SCAIP message request

scaip_message.js implements a test where a SIP Message with a SCAIP (Social Care Alarm Internet Protocol) body and content-type us sent. The test expects a 200 OK response from the receiving side.

`$ node scaip_message.js`

*This project is sponsored by [iotcomms.io](https://iotcomms.io).*
