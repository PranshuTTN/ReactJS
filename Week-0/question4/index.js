   function instanceInvocationCount(){
    let invocationCount = 0;
    let instanceCount = 0;

    function innerFunction() {
        invocationCount++;
        return invocationCount;
    }

    instanceCount++;

    return {
        invoke: function() {
            return innerFunction();
        },
        getInstanceCount: function() {
            return instanceCount;
        },
        getInvocationCount: function() {
            return invocationCount;
        }
    };
}

const counter1 = instanceInvocationCount();
const counter2 = instanceInvocationCount();

let count = 0;

    function calculator(objButton) { 
    document.getElementById("invoke") 
        .innerHTML = "<h2>Invoke: " + counter1.invoke() + "</h2>"; 
    document.getElementById("invocationCount") 
        .innerHTML = "<h2>Invocation: " + counter1.getInvocationCount() + "</h2>";
    document.getElementById("instanceCount") 
        .innerHTML = "<h2>Instance: " + counter1.getInstanceCount() + "</h2>";     
    }

// console.log(counter1.invoke());
// console.log(counter1.invoke());
// console.log(counter2.invoke());
    
// console.log(counter1.getInvocationCount());
// console.log(counter2.getInvocationCount());
    
// console.log(counter1.getInstanceCount());
// console.log(counter2.getInstanceCount());  

// console.log(counter1.invoke());
// console.log(counter2.invoke());

// console.log(counter1.getInvocationCount());
// console.log(counter2.getInvocationCount());

// console.log(counter1.getInstanceCount());
// console.log(counter2.getInstanceCount());