/*function foo(){
    console.log("Hello!");
}

Foo();
// do some other stuff

var bar = function(){
    console.log("world");
};
bar();

function greet(){
    if (arguments.length < 2){
    console.log("Please use the name and greeting arguments");
    } else if (typeof name != )
    }
}*/


window.addEventListener("load", function() {
	
	var userName = "-Mark";
	var c = document.getElementById("container");
	var submit = document.getElementById("submit-message");
	var input = document.getElementById("new-message");
	submit.addEventListener("click", addMessage);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addMessage();
		}
	});
	
	function addMessage() {
		var msg = document.createElement("div");
		var text = document.createElement("p");
		var user = document.createElement("p");
		msg.className = "message";
		text.innerText = input.value;
		text.className = "text";
		user.innerText = userName;
		user.className = "user";
		msg.appendChild(text);
		msg.appendChild(user);
		
		var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Remove";
		del.addEventListener("click", function() {
			c.removeChild(this.parentNode);
		});
		
		
		
		msg.appendChild(del);
		
		
		
		c.appendChild(msg);
	}

});