'use strict'

exports.hello = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body:  '<!DOCTYPE html><html><head><style>body{background-color:#000;margin:0;overflow:hidden;padding:0;}.screen {animation:colorPulse 5s infinite ease-in-out;background-image:radial-gradient(#444, #111);  box-shadow:0 0 5vmin 1vmin #000 inset;  box-sizing:border-box;  font-family:"Fira Mono", monospace;  font-size:20px;  height:100vh;  overflow:hidden;  padding:10vmin;  width:100vw;}.screen:before {  animation:wave 10s infinite ease-in-out;  content:"";  height:20vh;  left:0;  opacity:.5;  position:absolute;  right:0;  z-index:1;}.screen:after {  background-image:linear-gradient(transparent, transparent 3px, #222);  background-size:4px 4px;  bottom:0;  content:"";  left:0;  pointer-events:none;  position:absolute;  right:0;  top:0;  z-index:2;}p:last-child:after {  animation:blink 1s infinite;  content:"_";}@keyframes colorPulse {  0%, 100% {    color:#0c0;  }  48%, 52% {    color:#090;  }  50% {    color:#060;  }}@keyframes wave {  0% {    box-shadow:0 -10vh 20vh #0c0;    top:-100vh;  }  48%, 52% {    box-shadow:0 -10vh 20vh #090;  }  50% {    box-shadow:0 -10vh 20vh #060;  }  100% {    box-shadow:0 -10vh 20vh #0c0;    top:200vh;  }}@keyframes blink {  50% {    opacity:0;  }}  </style></head><body><div class="screen">  <i><p>The requirements are wrong.</p><p>If the requirements are not wrong, we have probably misunderstood something.</p><p>If we did not misunderstand, the needs will have changed before we deliver.</p> <p><h3>A system of delivery that is designed for quality will be designed with these assumptions in mind.</h3></p></i>  <p style="text-align:right">Brian Finster Esquire Senior, Value Stream Architect, Walmart Labs</p></div></body></html>',
 }

  return response;
}
