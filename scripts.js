//created by Kevin Infante

/* Plan:
1. set of the on-events with the buttons, so that
    pressing the puttons displays text //done
2. set up a function to read the label with the text //done
3. create the "calculate" function //done
4. multiple operations in one line isn't supported. I either need to integrate it or prevent the user  from being able to write multiple operations in one line.
5. I'm thinking of doing delete/undo instead of pi //done
6. If I want to add more, I can implement a shift key which would include more functions such as mod, sin, log, etc.
7. I want to add limits and rounding to the output so I dont get things like 0.1666666666666666666666
8. I want to add bootstrap and viewport. Clean up the presentation a bit
*/
var input = "";

var first="";
var second="";
var num="";
var firstInt=0;
var secondInt=0;
var result =0;

$(document).ready(function() {

  // jQuery methods go here...
    $("button").click(ButtonPress); //selecting elements with id 1
});

function ButtonPress(){
    input=$("#inputField").val();
    if($(this).attr('class')==="num"){ 
        //input=$("#inputField").val();
        //input += $(this).attr('id');
        input+=$(this).attr('id'); //combines the previous 2 statements
        console.log(input+" "+input.length);
        //console.log($(this).attr('class'));
        //$("#inputField").val($(this).attr('id'));
        $("#inputField").val(input);
    }
    else if($(this).attr('class')==="operator"){
        input+=$(this).attr('id'); 
        console.log(input);
        $("#inputField").val(input);
        //add more conditions later, to prevent having multiple operators
    }
    else if($(this).attr('id')==="clr"){
        $("#inputField").val("");
    }
    else if($(this).attr('id')==="del"){
        if(input!== ""){  
            var newInput="";
            for(var i=0; i<input.length-1; i++){
                newInput+=input.charAt(i);
            }
            $("#inputField").val(newInput);
        }
    }
    else if($(this).attr('id')==="rad"){
        $("#inputField").val(Math.pow( parseFloat(input), 0.5));
    }
    else if($(this).attr('id')==="="){
        calculate(input);
    }
}

function calculate(input){
    first=""; second="";
    for(var i=0; i<input.length; i++){
        if(input.charAt(i)!= '+' && (i==0 || input.charAt(i)!= '-') && input.charAt(i)!= '/' && input.charAt(i)!= '*' && input.charAt(i)!= '^'){
            first+=input.charAt(i);
        }
        else if(input.charAt(i)== '+' || input.charAt(i)== '-' || input.charAt(i)== '/' || input.charAt(i)== '*' || input.charAt(i)== '^'){
            for(var j =i+1; j<input.length; j++){
                second+=input.charAt(j);
            }
            //console.log("read");
            break;
        }
    }
    console.log(first+" "+second+" "+input.charAt(i));
    if(input.charAt(i)=='+'){
        $("#inputField").val(parseFloat(first) + parseFloat(second));
    }
    if(input.charAt(i)=='-'){
        $("#inputField").val(parseFloat(first) - parseFloat(second));
    }
    if(input.charAt(i)=='*'){
        $("#inputField").val(parseFloat(first) * parseFloat(second));
    }
    if(input.charAt(i)=='/'){
        $("#inputField").val(parseFloat(first) / parseFloat(second));
    }
    if(input.charAt(i)=='^'){
        $("#inputField").val(Math.pow( parseFloat(first), parseFloat(second)));
    }
}