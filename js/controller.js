var SERVER_URL = "ws:10.28.6.75:9090";
var WS         = new WebSocket(SERVER_URL);

function socketSetup () {
  WS.onopen = function () {
    console.log("Connection opened...");
    WS.send(JSON.stringify(eval("({ angle: " + 0 + "})")));
  }
  WS.onmessage = function (e) {
    console.log("From Server: " + e.data.toString());
  }
  WS.onclose = function (e) {
    console.log("Connection closed...");
  }
  WS.onerror = function (e) {
    console.log("Connection error...");
  }
};

function angleStatus () {
  var indicator = document.getElementById('angle');
  var json = "";

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
      json = "{ angle: " + Math.round(event.gamma) + "}";
      json = JSON.stringify(eval("(" + json + ")"));
      if(WS.readyState == 1) WS.send(json);
      indicator.innerHTML = Math.round(event.gamma);
    }, true);
  } else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
      json = "{ angle: " + Math.round(event.acceleration.y * 2) + "}";
      json = JSON.stringify(eval("(" + json + ")"));
      if(WS.readyState == 1) WS.send(json);
      indicator.innerHTML = Math.round(event.acceleration.y * 2);
    }, true);
  } else {
    window.addEventListener("MozOrientation", function () {
      json = "{ angle: " + Math.round(orientation.y * 50) + "}";
      json = JSON.stringify(eval("(" + json + ")"));
      if(WS.readyState == 1) WS.send(json);
      indicator.innerHTML = Math.round(orientation.y * 50);
    }, true);
  }
};

function render () {
  socketSetup();
  angleStatus();
};

render();
