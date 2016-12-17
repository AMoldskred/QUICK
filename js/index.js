/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var $time = 0;
window.highscore = localStorage.getItem("highscore");
window.points = 0;
var running = false;
 $('.modal').modal();

$('.modal').modal({
        dismissible: false
    });

$('#gamewrap').css({'display':'none'})

setInterval(function(){
    $('#points').html(window.points);
    $('#modalscore').html(window.points);
    $('#timeleft').html($time);
    $('#highscore').html(window.highscore);
    $('#fronthigh').html(window.highscore);
    if($time < 0){
        
        clearInterval(window.tim);
        running = false;
        $time = 0;
        window.highscore = localStorage.getItem("highscore");
    };

});
  $('#playagain').on("click",function(){
    window.points = 0;
    startgame();
       setTimeout(function(){
  stope();

   },30000)
  })


$('#play').on("click",function(){
   $("html, body").animate({ scrollTop: 1000 }, 1000);
   setTimeout(function(){
startgame();
   $('#firstpage').css({
    'display':'none'
   })
   },1000)
   setTimeout(function(){
  stope();

   },31000);
   $('#gamewrap').css({
    'display':'block'
   })
});

function stope(){
    $('#modal1').modal('open');
        if(window.points > window.highscore){
         localStorage.setItem("highscore", window.points);
    }
}

function startgame(){
  countdown();
  random();
}

function countdown(){
    $time = 30;
    running = true;
    if($time > 0 && running == true){
    window.tim = setInterval(function(){
        $time--;

    }, 1000);   
    }
    else if($time = 0){
    var running = false
    }
    
}


function random(){
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#10,#11,#12,#13,#14,#15,#16,#17,#18,#19,#20').removeClass("z-depth-3 active");
    window.number = Math.floor((Math.random() * 20) + 1);
    console.log(number);
    if(number == 1){
$('#1').toggleClass("z-depth-3 active");
    }
    else if(number == 2){
$('#2').toggleClass("z-depth-3 active");
    }
    else if(number == 3){
$('#3').toggleClass("z-depth-3 active");
    }
    else if(number == 4){
$('#4').toggleClass("z-depth-3 active");
    }
    else if(number == 5){
$('#5').toggleClass("z-depth-3 active");
    }
    else if(number == 6){
$('#6').toggleClass("z-depth-3 active");
    }
    else if(number == 7){
$('#7').toggleClass("z-depth-3 active");
    }
    else if(number == 8){
$('#8').toggleClass("z-depth-3 active");
    }
    else if(number == 9){
$('#9').toggleClass("z-depth-3 active");
    }
    else if(number == 10){
$('#10').toggleClass("z-depth-3 active");
    }
    else if(number == 11){
$('#11').toggleClass("z-depth-3 active");
    }
    else if(number == 12){
$('#12').toggleClass("z-depth-3 active");
    }
    else if(number == 13){
$('#13').toggleClass("z-depth-3 active");
    }
    else if(number == 14){
$('#14').toggleClass("z-depth-3 active");
    }
    else if(number == 15){
$('#15').toggleClass("z-depth-3 active");
    }
    else if(number == 16){
$('#16').toggleClass("z-depth-3 active");
    }
    else if(number == 17){
$('#17').toggleClass("z-depth-3 active");
    }
    else if(number == 18){
$('#18').toggleClass("z-depth-3 active");
    }
    else if(number == 19){
$('#19').toggleClass("z-depth-3 active");
    }
    else if(number == 20){
$('#20').toggleClass("z-depth-3 active");
    }
}

