function display() { 
    let arr = [1,2,3,4,5];
    let index = 0;
    function nextNumber() {
        if (index < arr.length) {
            document.getElementById("number").innerHTML = "<h3>" + arr[index] + "</h3><br>";
            index++;
            setTimeout(nextNumber, 3000);
        }
    }

    nextNumber();
}