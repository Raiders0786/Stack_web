var push_btn = document.getElementById("push-btn");
var pop = document.getElementById("pop-btn");
var size = document.getElementById("size-stack");
var size_btn = document.getElementById("size-btn");
var display = document.getElementById("display");


class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    pushElement(element) {
        if (!isNaN(element)) {
            document.getElementById("temp").innerHTML = " ";
            this.data[this.top] = element;
            this.top += 1;
        } else {
            document.getElementById("temp").innerHTML = "Please Enter a Numeric Value!";
        }
    }
    length() {
        document.getElementById("size-input").innerHTML = "Size Of stack:" + this.top;
    }
    peek() {
        return this.data[this.top - 1];
    }
    isEmpty() {
        return this.top === 0;
    }
    popElement() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        } else {
            document.getElementById("temp").innerHTML = "Stack is Empty!";
        }
    }
    printElement() {

        display.innerHTML = "";
        this.data.forEach(function(x) {
            display.innerHTML += "<div class='display-text'>" + x + "</div>"
        })

    }
}

let stack;

stack = new Stack();

push_btn.addEventListener("click", function() {
    var y = document.getElementById("push-input").value;
    if (y == "") {
        document.getElementById("temp").innerHTML = "OOPS!";
    } else {
        stack.pushElement(y);
        document.getElementById("push-input").value = "";
        stack.length();
        stack.printElement();
        console.log(stack.top);
    }
})



pop.addEventListener("click", function() {
    stack.popElement();
    document.getElementById("push-input").value = "";
    stack.printElement();
    stack.length();
})