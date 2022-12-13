"use strict";
(function(){
  var elHardwareCursor=document.getElementById("wanthardwarecursor");
  var elUseRAFTime=document.getElementById("useraftime");
  var elWantGraph=document.getElementById("wantgraph");
  var elWantEventNow=document.getElementById("wanteventnow");
  var elWantMousePath=document.getElementById("wantmousepath");
  var can = document.getElementById("can");
  var a=[];
  var lastT=0;
  var tLastAnimate=0;
  var info="";
  var perf = window.performance;

  //--------------------------------------------------------------------------------
  function tick() {
    return perf.now();
    }
  //--------------------------------------------------------------------------------
  function onMouseMove( e ) {
    onMove( e.timeStamp, e.clientX, e.clientY );
    }
  //--------------------------------------------------------------------------------
  function onTouchMove( e ) {
    e.preventDefault();
    var touches = e.changedTouches;
    var t = touches ? touches[0] : null;
    if (t) {
      onMove( e.timeStamp, t.clientX, t.clientY );
      }
    }
  //--------------------------------------------------------------------------------
  function onMove( ets, clientX, clientY ) {
    var ts = elWantEventNow.checked ? tick() : ets;
    info = "average small delta="+getAve().toFixed(2)+"ms";
    var r = can.getBoundingClientRect();
    var x = (clientX-r.left)/(r.right-r.left)*can.width;
    var y = (clientY-r.top)/(r.bottom-r.top)*can.height;
    a[a.length] = {t:ts, x:x, y:y, off:ts-tLastAnimate, delta:ts-lastT};  // Chrome bug: # too large causes problem
    lastT = ts;
    while ((ts-a[0].t)>=1000) {
      a.shift();
      }
    }





  //--------------------------------------------------------------------------------
  function getAve() {
    var dsum=0;
    var dnum=0;
    for (var loop=1; loop<a.length; ++loop) {
      var delta = a[loop].t-a[loop-1].t;
      if (delta<20) {
        dsum += delta;
        ++dnum;
        }
      }
    return dnum?dsum/dnum:0;
    }
  //--------------------------------------------------------------------------------
  function getMouseDistance(ms) {
    var now = tick();
    var l1 = a.length-1;
    while ((l1>0) && (now-a[l1].t<80)) {
      --l1;
      }
    if (l1>0) {
      var a1 = a[l1];
      var a2 = a[a.length-1];
      return { x:(a2.x-a1.x)/(a2.t-a1.t)*ms, y:(a2.y-a1.y)/(a2.t-a1.t)*ms};
      }
    return {x:0,y:0};
    }

//  var _jj=0.0;
//  var _jjn=0;

  //--------------------------------------------------------------------------------
  function animate( tAnimate ) {
    var prev = tLastAnimate;
    tLastAnimate = elUseRAFTime.checked ? tAnimate : tick();
    var ofd = prev ? getMouseDistance(tLastAnimate-prev) : null;

// rAF aligned input experiment in Chrome causes rAF callback delays
//   ++_jjn;
//   _jj += (tick()-tAnimate);
//   if (_jjn==60) {
//     console.log( _jj/60 );
//     _jjn = 0;
//     _jj=0.0;
//     }


    window.requestAnimationFrame(animate);

    doHardwareCursorWork();

    var ctx = can.getContext("2d");

    // info line at top
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect( 0, 0, can.width, can.height );
    ctx.font = "14pt Arial";
    ctx.textAlign = "left";
    ctx.fillStyle = "#000000";
    ctx.fillText( a.length>3 ? a.length+" mouse events in "+(a[a.length-1].t-a[0].t).toFixed(1)+"ms -- "+info : "INSTRUCTIONS: Move mouse around in this window", 5, 20 );

    if (a.length>0) {

      if (ofd) {
        // blue circle at one frame distance
        var jj = getMouseDistance(Math.max(0,tLastAnimate-a[a.length-1].t));
        var mx = a[a.length-1].x+jj.x;
        var my = a[a.length-1].y+jj.y;
        ctx.beginPath();
        ctx.arc( mx+0.5, my+0.5, 2*Math.sqrt(ofd.x*ofd.x+ofd.y*ofd.y), 0, 2*Math.PI, false );
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();
        // red box at last location
        ctx.fillStyle = "#FF0000";
        ctx.fillRect( mx-4+0.5, my-4+0.5, 8, 8 );
        }

      // mouse path
      if (elWantMousePath.checked) {
        ctx.beginPath();
        for (var loop=0; loop<a.length; ++loop) {
          var i = a[loop];
          ctx.lineTo( i.x, i.y );
          }
        ctx.strokeStyle = "#800080";
        ctx.stroke();
        }

      if (elWantGraph.checked) {
        var SCALE=5;

        // polyline offsets from rAF
        ctx.beginPath();
        //ctx.moveTo( 0, 0 );
        for (var loop=0; loop<a.length; ++loop) {
          var i = a[loop];
          ctx.lineTo( loop*5, can.height-i.off*SCALE );
          }
        ctx.strokeStyle = "#808080";
        ctx.stroke();

        // horizontal lines at 5/10/15/20 ms
        ctx.beginPath();
        for (var ms=5; ms<=20; ms+=5) {
          var yy = can.height-ms*SCALE;
          ctx.moveTo( 0, yy );
          ctx.lineTo( can.width, yy );
          }
        ctx.strokeStyle = "#E0E0E0";
        ctx.stroke();

        // polyline deltas
        ctx.beginPath();
        //ctx.moveTo( 0, 0 );
        for (var loop=0; loop<a.length; ++loop) {
          var i = a[loop];
          ctx.lineTo( loop*5, can.height-i.delta*SCALE );
          }
        ctx.strokeStyle = "#0000FF";
        ctx.stroke();
        }
      }
    }
  //--------------------------------------------------------------------------------
  function doHardwareCursorWork() {
    var hwWant = elHardwareCursor.checked ? "auto" : "none";
    if (hwWant!=can.style.cursor) {
      can.style.cursor = hwWant;
      }
    }
  //--------------------------------------------------------------------------------
  function init() {
    can.addEventListener( "mousemove", onMouseMove, false );
    can.addEventListener( "touchmove", onTouchMove, true );
    animate();
    }

  init();
  })();

