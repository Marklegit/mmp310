var questions = 3;

var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
if(adjective){
  
}
else{
    alert('You did NOT answer the question.');
}

while (adjective !==' '){
    adjective = prompt('Please TYPE an ABJECTIVE');
}


var verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
if(verb){
   
}
else{
    alert('You did NOT answer the question.');
}




questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);

if(noun){
   
}
else{
    alert('You did NOT answer the question.');
}


/*alert('Nice try.');*/

var sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);