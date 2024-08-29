// function message(){
//     alert('javascript\nis\ns\client-side\nserver-side');
//     // alert("\n\t2\n\t\t3");
//     confirm("Click oj=k or cancel")
// }

// function myalert(){
    // var x=confirm("Click Ok or Cancel");
    // alert("USer selected Option is: "+x);
    // if(x==true){
    //     alert("User clicked on OK button");
    // }
    // else{
    //     alert("User clicked on Cancel Button");
    // }
//    var num1=parseInt(prompt("Enter any number: "));
//    var num2=parseInt(prompt("Enter 2nd number: "));
//    var op=prompt("Enter the operation you wish to perform: ");
//    var sum;
//    switch(op)
//    {
//         case 'Add':
//             sum=num1+num2;
//             alert("Result :"+sum);
//             break;
//         case 'Subtract':
//             sum=num1-num2
//             alert("Result :"+sum);
//             break;
//         case 'Multiply':
//             sum=num1*num2;
//             alert("Result :"+sum);
//             break;
//         case 'Divide':
//             sum=num1/num2;
//             alert("Result :"+sum);
//             break;
//         default:
//             alert("Choose valid option");
//     }
//     document.getElementById("rs").value = sum;
// }

function performOperation(op) {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result;

    switch(op) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            result = num1 / num2;
            break;
        default:
            alert("Choose a valid option");
            return;
    }
    document.getElementById("rs").value = result;
}



// document.write("<h1>This is heading</h1>");
// document.write("<p>This is paragraph</p>");

// var x = 10;
// console.log("x data type : "+typeof(x));
// x="javascript";
// console.log("x data type : "+typeof(x));
// x=true;
// console.log("x data type : "+typeof(x));
// var z=0;
// while(z<10){
//     console.log('Number : '+z);
//     z++;
// }

// outer: for (let i=0;i<120;i++)
// {
//     console.log(i);
// }