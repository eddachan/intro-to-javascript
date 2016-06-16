//this is the beginning of type

ourTypes = { //This is a single line comment.
  // So first thing's first, let's talk comments. There are two ways to create a comment in Javascript.
  // This is a single-line comment. Whatever is written after two slashes will be ignored by the JS interpreter.
  // Single line comments can also follow code, as on line 1. 
  // You can also use mulit-line comments. Everthing in between /* and */ would be ignored by the interpreter.
  /*
    This is a mulit line comment! 
    Remember, you can nest single line comments within multi-line ones //like this
    But you can't nest multi-line comments within eachother or within single line comments!
    Play around with adding comments to these files. Maybe use comments to write yourself some reminders!
  */
  /********************** Primitive Data Types and Operators ********************
    Alright, let's jump right to it! Remember, google is your best friend, so if you need to research something, ask your good friend google! I like to reference MDN myself. 
    Here's the MDN link for primitive data types.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    
    And here's a brief reminder (remember, we are focusing on the ES5 spec, as ES6 hasn't been fully implemented as a standard in most browsers yet. We are therefore ignoring ES6 specifics.)
    In Javascript there are 5 Primitive Values.
      Undefined - a variable that has not been assigned a value             - undefined

      Null - the intentional absence of a value, not the same as undefined! - null
      
      Boolean - represents a logical entity, either true or false           - true/false
      
      String - a sequence of characters used to represent textual data.
               a string is any characters wrapped in either single or       - 'a string'
               double quotes. Be consistent in your use of single or 
               double quotes, I personally prefer using singles in js 
               and using doubles in html.                                   - "another string"
            
               
      Number - Unlike languages like C, javascript only has one number type - 3.14159265359
               for floats, doubles and ints. All numerical data types are   - 100
               represented by a number.                                     - -32536

      ********************** Variables ***********************************
      Again, we are focusing on ES5 standards, which means we will be declaring varibales only using the 'var' keyword. Feel free to read up on the newest additions in ES6.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations

      Remember algebra? Stuff like:
      x + 10 = 13
      x = _?
      back in algebra class, you would do problems like this, and your task was to find the value of x. Well in programming we use varibales as well. 
      Think of a variable as a container, like a box. You put a name on the box, and store whatever value you want in it. In javascript, we can assign any value to a variable!

      We use the assignment operator '=' to assign values to variables.
      var name = 'Tony';
      console.log(name);
      Try opening your developer console and play around with variables such as the two above lines.


      ******************** Operators ********************
      There are lots of operators in javascript, so many that I won't try to list them all. Here's the link!
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

      But to list a couple
      
      = assignment. Used to assign a value to a variable, such as var name = 'Tony';
      
      == equal. Returns true if operands are equal, such as 3 == '3'; // returns true
      
      === strict equal. Returns true if operands are equal and the same type, such as 3 === '3' //returns false, because one is a number and the other is a string. 3 === 3 would return true
      
      != not equal. Returns true if operands are not equal, such as 3 != '3' // returns false, because the number and the value of the string are both 3, even though they aren't the same type
      
      !== strict not equal. Returns true if operands are not equal and not the same type, such as 3 !== '3' // 
      returns true because though the values of the number and string are both 3, they are not the same type!

      > greater than. Returns true if the value on the left is greater than the value on the right, such as 3 > 4 // returns false

      >= greater than or equal to. Returns true if the value on the left is greater than or equal to the value on the right, such as 3 >= 3 // returns true

      < less than. Returns true if the value on the left is less than the value on the right, such as 3 < 4 // returns true

      <= less than or equal to. Returns true if the value on the left is less than or equal to the value on the right, such as 3 <= 3 // returns true

      
      There are a lot of other operators, so check out the documentation to find out what they are and what they do!
      For example, you will need to use the arithmetic operators to pass some of the tests. Notice they weren't explained above, so you'll need to look them up. But since I'm nice, I won't make you scroll up for that link.
      Here it is again:
      
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations

      Remember, if you feel like you need more practice, codeacademy.com, khanacademy.org and freecodecamp.com all have free interactive instructional tutorials you can do from any computer as long as you remember your account info!
  */

  /*
    Ok, so let's start working! If you haven't already, open specRunner.html in your browser. Notice all of the red?! Great! Follow the instructions in the readme to install the dependencies, and then start filling in the "blanks" below to make the tests pass!
  */
  thisShouldBeUndefined: undefined, //replace the values to make tests pass!

  thisShouldBeNull: null,

  aBoolean: false,

  anotherBoolean: true,

  aString: '0',

  aNumber: 5555,
};
var example;
example = 'Javascript is fun!';
/******************
Now for the fun bit! There was some code to get you started on the last section.
For this section, read the tests (either in the test/spec.js file, or right there in the browser). Figure out what the tests are looking for, and make them pass.
This may seem like some form of cruel punishment, but have faith, this will help you learn! 
TDD, or Test Driven Development is (or should be) the 
standard way to write code. 
You write tests (that all fail) showing the expected behavior of your code. Then you write code that makes the tests pass. 
Writing tests is something that will be gone over later, for now just focus on understanding the tests. 
I think you'll be surprised that you'll be able to 
understand what we're looking for!
******************/

/*
  Use the next section for 'variables and arithmetic operators.'
  The first two tests pass. Discuss why with your partner.
*/

var foo;
var bar = '0';
var num1 = 10;
var num2 = 20;
var total = num1 + num2;
var num3 = 5;
var minus = total - num3;
var divided = total / num3;
var remainder = 2;
var remainderToString = '2';









/*
  Use this next section for 'comparison operators'.
  Use the variables from the last section and follow the prompts below.
*/
var firstResult = num1 > num3;
var secondResult = total - num2 == num1;
var numberAsString = '10';
var equals = num1 == numberAsString;
var deepEquals = num1 === numberAsString;
var thirdResult = deepEquals < num1;
var fourthResult = num1 <= numberAsString;

/*
  Use this next section for operator precedence. 
  Remember PEMDAS in algebra class? Javascript has something similar.
  You can find a helpful chart at
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/
// For this section, assign the variables the value that the comment would return.
// Try entering the statement into the console to get the result.

// The first one is done for you as an example.
var a = true; // (10 * 10) == '100'

var b = 12; // 2 * (10 / 2) + 2;

var c = false; // 8 + 1 * 5 - 4 / 2 <= 9;

var d = false; // true === 'true'

var e = true; // 1 == true

var f = false; // 1 === true



//this is the beginning of if else

// These are the varibales you will be using in this section. Rather than scrolling up to find their values, why don't you practice accessing them from the browser's console?
var flowA = false;
var flowB = true;
var flowC = 0;
var flowD = 1;
var flowE = -10;
var flowF = 10;
var flowG = 100;
var flowH = '';
var flowI = 'howdy';
var flowJ = 'javascript';
var flowK = 0;
var flowL = 'javaScript';

/*
  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions

  "An expression is any valid unit of code that resolves to a value.

  Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluates and therefore resolves to value.

  The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

  The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable."

  So far we have been working with expressions, now we are going to start working with block statements. 

  From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

  "A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets."

  We are going to use the comparison operators and learn about control flow statements in the next section.

  The control flow is the order in which the computer executes statements. 
  https://developer.mozilla.org/en-US/docs/Glossary/Control_flow  

*/
// The first control flow statements we will use are 'if', 'else if', and 'else'. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// Those statements work like this.
/*
  You can have a block of code run if the condition you check is true by using the if statement.

  if (condition) {
    run this code if condition evaluates to true
  } 

  ------------------------------------------

  You can also have a block of code run if the condition is false by using the else statement.

  if (condition) {
    run this code if condition evaluates to true
  } else {
    run this code if condition is false
  }

  ------------------------------------------

  Finally, you can check multiple conditions, and have seperate blocks of code run if one of them is true.
  Check the first condition with the if statement, then as many other conditions as you like with the else if statement.
  Don't forget to use the else statement at the end whenever you use if/else if, so some code runs in the event that all conditions are false

  if (conditionA) {
    run this code if conditionA evaluates to true
  } else if (conditionB) {
    run this code if conditionB evaluates to true
  } else {
    run this code if all conditions are false
  }

*/
// Let see put that into action!
// The first couple of tests are passing as an example.

// create a variable called flowAnswerA.
var flowAnswerA;
// if flowC is greater than or equal to flowB assign flowAnswerA true. Otherwise asign fAnswerA false.
if (flowC >= flowB) {
  flowAnswerA = true;
} else {
  flowAnswerA = false;
}

// create a variable flowAnswerB
var flowAnswerB;
// if flowB is strictly equal (the same value and type) to flowD assign flowAnswerB true.
if (flowB === flowC) {
  flowAnswerB = true;
} 

// create a variable flowAnswerC
var flowAnswerC;
// if flowB equals (in a truthy kind of way) flowD assign flowAnswerC true
if (flowB == flowD) {
  flowAnswerC = true;
}
// create a variable called flowAnswerD.
var flowAnswerD;
// if flowE plus flowG is bigger than flowG plus flowF, assign flowAnswerD the value of flowG plus flowE. Otherwise assign it the value of flowG plus flowF.
if (flowE + flowG > flowG + flowF) {
  flowAnswerD = flowG + flowE;
} else {
  flowAnswerD = flowG + flowF;
}
// create a variable called flowAnswerE.
var flowAnswerE;
// if flowA is equal to flowE assign flowAnswerE false. Otherwise assign it true.
if (flowA = flowE) {
  flowAnswerE = false;
} else {flowAnswerE = true;

}
// create a variable called flowAnswerF. 
var flowAnswerF;
// assign flowAnswerF the value of flowE multiplied by flowF.
var flowAnswerF = flowE * flowF;
// create a variable called flowAnswerG
var flowAnswerG;
// flowAnswerG should hold the greater of flowAnswerF, and flowG.
// if they have the same value, then flowAnswerG should have a value of true.
if (flowAnswer F > flowG)
else if (flowAnswer G = flowG)
else {
  flowAnswerG = true;
    }

// create a variable called flowAnswerH.
var flowAnswerH;
// assign it the value of flowG * negative one.
var flowAnswerH = (flowG * -1)
// create a varibale called flowAnswerI

// if flowAnswerF is greater than flowAnswerG flowAnswerI gets true.
// if flowAnswerG is greater than flowAnswerF flowAnswerI gets false.
// Otherwise flowAnswerI gets 'woo hoo!'

