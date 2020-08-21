/******************************************************************/
// Assignment code here

///////////////////////////Variables////////////////////////////////

var lengthPss = null;                       // variale who stores the value of the length of the password

userChoice = [
  {
  name: "Lowercase Characters",             // 1st Boolean -> lowercase
  value: false                              // 2nd Boolean -> uppercase
  },                                        // 3rd Boolean -> numbers
  {                                         // 4th Boolean -> special Chart
    name: "Uppercase Characters",
    value: false
  },
  {
    name: "Numbers",
    value: false
  },
  {
    name: "Special Characters",
    value: false
  }
 ]; 
 
 
//Object to get characters like alphabet, numbers and special characters with its getters functions
var listChar = {
  lettersLow: "abcdefghijklmnopqrstuvwxyz",
  lettersUp: "ABCDEFGHIJKLMNOPQRSTUVWYYZ",
  numbers: "0123456789",
  specialChar: " " + "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" + "\"" + "\\",   // adding space, quotation and back slash as a character: " ", "\"" and "\\"
  
  getLowerCase: function(){
    return this.lettersLow;
  },

  getUpperCase: function(){
    return this.lettersUp;
  },

  getNumbers: function(){
    return this.numbers;
  },

  getSpecialChar: function () {
    return this.specialChar;
  }

};


///////////////////////////Functions////////////////////////////////

var userIntro = function(){

  // prompt to select lenght of the password
  var info = prompt("Please Select the length of the Password\n\n" +
  "It must be between 8 and 128 characters");

 // assign a boolean value when the user introduce the right number between 8 and 128
  var range = false;

 // validate 
 while(!range){

   if(!isNaN(info) ){   //validate if the input is not a number; e.g. isNaN("kkk") -> true 
       info = parseInt(info);
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
};

var userSelection = function(){
  var x = 0;      // variable to check that the user select at least one option

  while (x==0)
  {
    for(var i=0; i<userChoice.length; i++){

      userChoice[i].value = confirm("Would you like to include "+userChoice[i].name);
      if (userChoice[i].value){
        x++;
      }
    }

    //checking if at the end of the for-loop, user chose one option
    if(x == 0){
      alert("You have to choose at least one option for your password" +
            "\n 1. "+ userChoice[0].name+
            "\n 2. "+ userChoice[1].name+
            "\n 3. "+ userChoice[2].name+
            "\n 4. "+ userChoice[3].name);
    }
  }
  return x;
};

var generatePassword = function(){
  var str = "";
  var pass = "";

  //Information about criterias of the password
  alert("    Welcome to Password Generator\n"+
        "For the following Steps, you must Choose for:\n\n"+
        "- Length of your Password, it must be between 8 and 128 characters\n"+
        "- Lowercase Characters\n"+
        "- Uppercase Characters\n"+
        "- Numbers\n"+
        "- Special Characters\n");
  
  // selecting the length of the password
  lengthPss = userIntro();

  // selecting the type of characters options
  var x = userSelection();

  for(var i=0; i<Math.floor(lengthPss/x)+1; i++){     //for loop for the length of the password
                                                      // the formula Math.floor(lengthPss/x)+1
                                                      // implies that the seed for the password
                                                      // it would be shorter for the way of   
                                                      // generation of the  user options

    // if statement to generate the password seed according criterias
    // the pattern of the seed for the password it will be:
    // first lowercase + uppercase + numbers + special char 

      if(userChoice[0].value){
        str += listChar.getLowerCase()[Math.floor(Math.random()*listChar.getLowerCase().length)];
      }

      if(userChoice[1].value){
        str += listChar.getUpperCase()[Math.floor(Math.random()*listChar.getUpperCase().length)];
        //console.log(listChar.getUpperCase());
      }

      if(userChoice[2].value){
        str += listChar.getNumbers()[Math.floor(Math.random()*listChar.getNumbers().length)];
      }

      if(userChoice[3].value){
        str += listChar.getSpecialChar()[Math.floor(Math.random()*listChar.getSpecialChar().length)];
      }
      //console.log(str);
    }

    for(var i=0; i<lengthPss; i++){     //for loop for the length and randomness of the password
      pass+= str[Math.floor(Math.random()*str.length)];
    }

  return pass;
  }





/******************************************************************/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //added alert
  alert("Your Password is:\n" + password);        //Optional, statement it could be deleted

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);