var gap = 0;
var slow = 7;
var md = false;
var oldMouseX = 0;
var mouseX = 0;
var mouseY = 0;
var numLevels = 13;
var gaps = [];
var gapscnt = 0;
var currentLevel = 0;
var px = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var vx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
init();

function tickHandler() {
    //run your logic here...
    if (md) {
        gap = averageGaps(mouseX - oldMouseX);
    }
    gap *= .9;
    vx[currentLevel] += gap;
    oldMouseX = mouseX;
    var i;
    for (i = currentLevel; i < numLevels; i++) {
        if (window.CP.shouldStopExecution(0)) break;
        vx[i + 1] += (vx[i] - vx[i + 1]) / slow;
    }
    window.CP.exitedLoop(0);
    for (i = currentLevel; i > 0; i--) {
        if (window.CP.shouldStopExecution(1)) break;
        vx[i - 1] += (vx[i] - vx[i - 1]) / slow;
    }
    window.CP.exitedLoop(1);
    for (i = 0; i < numLevels; i++) {
        if (window.CP.shouldStopExecution(2)) break;
        px[i] += vx[i] - px[i];
        // trying tweenmax duration 0 method of setting rotationY 
        TweenMax.to($('#level' + i), 0, {
            rotationY: px[i]
        });
    }
    window.CP.exitedLoop(2);
}



// functions 
function init() {
    // code for cube
    var d = 0.12;
    var p = 3;
    for (var i = 0; i < numLevels; i++) {
        if (window.CP.shouldStopExecution(3)) break;
        var posString = "-115px " + -48 * i + "px";
        TweenMax.to($('#level' + i + ' li'), 1, {
            css: {
                backgroundPosition: posString
            },
            delay: d * i
        });
    }
    window.CP.exitedLoop(3);
    TweenLite.ticker.addEventListener("tick", tickHandler);
    $('.cube').mouseover(function() {
        TweenMax.to($('.face'), 1, {
            opacity: 1
        });
    });
    $('.cube').mouseout(function() {
        TweenMax.to($('.face'), 1, {
            opacity: .85
        });
    });
    $(document).on('mousedown', function(event) {
        event.preventDefault();
        oldMouseX = mouseX;
        gaps.length = 0;
        md = true;
    }).on('mouseup', function(event) {
        md = false;
    }).on('mousemove', function(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    });



    $('#level0').mousedown(function() {
        currentLevel = 0;
    });
    $('#level1').mousedown(function() {
        currentLevel = 1;
    });
    $('#level2').mousedown(function() {
        currentLevel = 2;
    });
    $('#level3').mousedown(function() {
        currentLevel = 3;
    });
    $('#level4').mousedown(function() {
        currentLevel = 4;
    });
    $('#level5').mousedown(function() {
        currentLevel = 5;
    });
    $('#level6').mousedown(function() {
        currentLevel = 6;
    });
    $('#level7').mousedown(function() {
        currentLevel = 7;
    });
    $('#level8').mousedown(function() {
        currentLevel = 8;
    });
    $('#level9').mousedown(function() {
        currentLevel = 9;
    });
    $('#level10').mousedown(function() {
        currentLevel = 10;
    });
    $('#level11').mousedown(function() {
        currentLevel = 11;
    });
    $('#level12').mousedown(function() {
        currentLevel = 12;
    });




    var touchEnabled = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (touchEnabled == true) {
        console.log("touchEnabled");
        document.addEventListener('touchmove', onTouchMove, false);
        document.addEventListener('touchstart', onTouchStart, false);
        document.addEventListener('touchend', onTouchEnd, false);
    }

}


function onTouchMove(event) {
    event.preventDefault();
    var touch = event.touches[0];
    mouseX = touch.pageX - windowHalfX;
    mouseY = touch.pageY - windowHalfY;
}

function onTouchStart(event) {
    event.preventDefault();
    oldMouseX = mouseX;
    gaps.length = 0;
    md = true;
}

function onTouchEnd(event) {
    event.preventDefault();
    md = false;
}


function averageGaps(n) {
    if (isNaN(n)) {
        return 0;
    }
    var gl = gaps.length;
    gaps[gapscnt] = n;
    var ave = 0;
    for (var i = 0; i < gl; i++) {
        if (window.CP.shouldStopExecution(4)) break;
        ave += gaps[i];
    }
    window.CP.exitedLoop(4);;
    gapscnt = (gapscnt + 1) % 10;
    var tmp = ave / gl;
    if (isNaN(tmp)) {
        tmp = 0;
    }
    return tmp;
}