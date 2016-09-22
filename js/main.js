window.onload=function(){
  //eveything has to be inside window.onload function to make the page load beofore start js

  var seconds = 60;
  var counter;
  var message = document.getElementById('message');
  var wrapper = document.getElementById('wrapper');
  var buttonStart = document.getElementById('buttonStart');
  var buttonStop = document.getElementById('buttonStop');
  var buttonReset = document.getElementById('buttonReset');
  var Spansec = document.getElementById("Spanseconds");
  // storing the DOM element in a var

  buttonStart.addEventListener("click",function(){
    var inputMin = document.getElementById("Inputminutes");
    if ( isNaN (inputMin) ){
      alert ('Must be a number');
      inputMin.value = '00';
      return false;
    }
    var minutes = inputMin.value;
    // it has to be inside the function otherwise when the page is loaded the value is empty... and it wont take any new value because it is stored in the var before I typed it.

    // when we start it needs to be -1 in minutes
    minutes= minutes - 1;

    message.innerHTML = 'You can do it!!';

     var counter = setInterval( function(){
       seconds--;
       Spansec.innerHTML = seconds;
       // giving a new 'text' to show in the page.


//---------- to put 0 before and change colours -----------

      if ( seconds < 10) {
        Spansec.innerHTML ='0' + seconds;
      }
      inputMin.value = minutes;
      if ( minutes < 10) {
        inputMin.value = '0' + minutes;
        message.innerHTML = 'Less than 10 minutes!';

      }
      if ( minutes < 5 ) {
        message.innerHTML = 'Less than 5 minutes!';
        wrapper.style.backgroundColor = '#AA0000';
        inputMin.style.backgroundColor = '#AA0000';
      }


//---------- to substrat in minutes when seconds go to 0 -----------
       if( seconds === 0 ) {
          minutes--;
          seconds = 60;
       }
       if ( minutes === -1 ){
         clearInterval(counter);
         console.log('we are in -1');
         inputMin.value = '00';
         alert('relax, take  minutes out of the computer');
         message.innerHTML = 'Well Done!';
       }
     }, 1000); //end counter(setInterval)

    buttonStop.addEventListener('click', function () {

      clearInterval(counter);

    });//end buttonStop

    buttonReset.addEventListener('click', function () {
      window.location.reload();
    }); // end buttonReset
  });// end buttonStart

}; //end window.onload
