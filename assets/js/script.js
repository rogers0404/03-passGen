/******************************************************************/
// Assignment code here

///////////////////////////Variables////////////////////////////////

var lengthPss = null;
userChoice = [false, false, false, false]; // 1st Boolean -> lowercase
                                           // 2nd Boolean -> uppercase
                                           // 3rd Boolean -> numbers
                                           // 4th Boolean -> special Chart

//Object to get characters like alphabet, numbers and special characters with its getters functions
var listChar = {
  letters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: " " + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + "\"",
  
  getLowerCase: function(){
    return this.letters;
  },

  getUpperCase: function(){
    return this.letters.toUpperCase;
  },

  getNumbers: function(){
    return this.numbers;
  },

  getSpecialChar: function () {
    return this.specialChar;
  }

};

var userIntro = function(){

   // prompt to select lenght of the password
   var info = prompt("Please Select the length of the Password\n\n" +
   "It must be between 8 and 128 characters");
  // assign a boolean value when the user introduce the right number between 8 and 128
   var range = false;

  // validate 
  while(!range)
  {
    console.log("isNaN: "+isNaN(info));
    console.log("prompt: "+ info);
    console.log("range: "+range)

    if(!isNaN(info) ){   //validate if the input is not a number; e.g. isNaN("kkk") -> true 
        info = parseInt(info);
        console.log(info);
        if (info >= 8 && info <= 128){
          range = true;
        }
        else
        {
          alert("You must introduce a number between 8 and 128");
          info = prompt("Please Select the length of the Password\n\n" +
                        "It must be between 8 and 128 characters");
        }
    }   
    else {
      alert("You must introduce a valid number");
      info = prompt("Please Select the length of the Password\n\n" +
      "It must be between 8 and 128 characters");
      }
  }  

  return info;
}

///////////////////////////Functions////////////////////////////////

var generatePassword = function(){

 lengthPss = userIntro();
     

}


/******************************************************************/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //Add parenthesis to writePassword Function






/***************************************************************/
/*{ <script> }
        var el_down = document.getElementById("geeks"); 
  
        /* Function to generate combination of password */ 
        /*function generateP() { 
            var pass = ''; 
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
              
            for (i = 1; i <= 8; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                pass += str.charAt(char) 
            } 
              
            return pass; 
        } 
  
        function gfg_Run() { 
            el_down.innerHTML = generateP(); 
        } 
    </script> */
/***************************************************************/