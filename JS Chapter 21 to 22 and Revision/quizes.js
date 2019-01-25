
// // // // 1) Inside which HTML element do we put the JavaScript?
// // // // 2) What is the keyword that displays a message box?
// // // // 3) alert syntex.
// // // // 	a)alert "message";
// // // // 	b)alert 'message';
// // // // 	c)alert("message");
// // // // 	d)alert('message');
// // // // 	e)Alert("message");
// // // // 	f)Alert('message');
// // // // 4) What is the keyword that declares a variable?
// // // // 5) how to declared a variible?
// // // // 6) how to declared multiple variable in one line/statement?
// // // // 7) In a single statement declare a variable and assign a string to it. 
// // // // 8) Assign a string to a variable that has already been declared.
// // // // 9) This statement has already been coded.
// // // // var bestMan = "Charlie";
// // // // Assign the variable a new string value.
// // // // 10) how to alert a variable?
// // // // 11) If a number is enclosed in quotes, it's a ______. example.("10")? 
// // // // 12) What is the value of total?
// // // // 	var a = 100;
// // // // 	var b = 10;
// // // // 	var total = a + b;
// // // // 13) alert('10' + '20');
// // // // 14) alert(10 + '20');
// // // // 15) In a single statement declare a variable and assign a number to it. 
// // // // 16) Rewrite this using camelCase.
// // // // var Nameofband;
// // // // 17) Legal and Illegal variables names.
// // // // 	a) COUNT
// // // // 	b) 1st
// // // // 	c) _file1
// // // // 	d) FILE*
// // // // 	e) $count
// // // // 	f) The Answer
// // // // 	g) user$name
// // // // 	h) alert
// // // // 	i) HOME_DIRECTORY

// // // // 18) alert(20 % 6); alert(2 + 4 * 2);
// // // // 19) How can we add a single line comment in JavaScript?
// // // // 20) How to insert a comment that has more than one line?


























// // // // 1) var num = "10";

// // // //    alert(+num--);

// // // //    alert(num);
// // // // 2) num = 10++; 
// // // //    alert(7++);
// // // //    alert(num)
// // // // 3) var num = 10;
// // // //    num = num + num++;
// // // // 4) var num = 10;
// // // //    num = num++ - num-- + num;
// // // // 5) var num = "10";
// // // //    num = num-- + num-- + num--;
// // // //    alert(num)
// // // // 6) var num = "10";
   
// // // // +num = num;
// // // //    alert(num);
// // // // 7) var abc = 10;
// // // //    var abc;
// // // //    alert(abc); 
// // // // 8) var totalCost = 1 + 3 * 4;















// // // 1) var result = prompt(NaN);
// // //    alert(typeof result);





















































// // // 2) var result = alert("hello") + prompt("xyz"); //name
// // //    alert(result);















































// // // 3) var num = 10;
// // //    var cost = num++;
// // //    var result = prompt(++num + cost++);
// // //    alert(typeof result);

















































// // // 4) alert(confirm("string", "string", "string"));

























































// // // 5) var result = confirm("xyz");//ok
// // //    alert(result)
// // //    alert(typeof result)



















































// // // 6) var result = prompt("xyz");
// // //    alert(result);
// // //    alert(typeof result);


















































// // // 7) var result = typeof confirm("xyz");





















































// // // 8) var result = confirm("xyz") + +prompt("xyz");//5
// // //    alert(result);














































// // // 9) var result = confirm("xyz") + prompt("xyz");//string
// // //    alert(result)




















































// // // 10) var num = 10;
// // //     var result = +prompt("xyz");//++num
// // //     alert(result);













































// // // 11) var result = parseFloat("10.10");
// // //     alert(result)
// // //     alert(typeof result)








































// // // 12) var result = parseInt(confirm() + +prompt(""));//123.123

















































// // // 13) var num = +prompt("xyz");//2
// // //     var result = +num;
// // //     alert(result);
// // //     alert(typeof result);











































// // // 14) var result = +String(prompt());//10
// // //     alert(result);
// // //     alert(typeof result);













































// // // 15) var result = confirm("xyz")++ - ++confirm("xyz");


















// // 1) if (city = "Las Vegas") { 
// //     alert("Las Vegas")
// // }
// // alert(city)













// // 2)  if (UndefinedValue) { 
// //      alert("if") 
// //      }
// //  else { 
// //      alert("else")
// //  }














// // 3)  if (false) { alert("if") }
// //  else { alert("else") }
// //  if(true){ alert("2nd if") }


















// // 4)  var a; 
// //  (a || func)();
// //  (a && func)();
// //  function func(){
// //      alert("func")
// //  }
















// // 5)  function chicken() { 
// //     return egg();
// //  } 
// //  function egg() { 
// //      return chicken();
// //  } 
// //  alert(chicken() + " came first.");





















// // 6)  function power(base, exponent) { 
// //      if (exponent == 0) 
// //          return 1;
// //      else 
// //          return base * power(base, exponent - 1);
// //  }

// //  alert(power(2,4))
// //  (2,(2,(2,(2,1))))
















// // 7)  var string = ""
// //  if(string){
// //      alert(string + "if");
// //  }




















// // 8)  funtion gradeFunc(obtMarks, totalMarks){
// //      // code here
// //      return grade;
// //  }




// 1) var arr = [];
//    alert(typeof arr);
//    alert(typeof arr[2])

















// 2) var arr = [32,"asd",true,54,NaN,92,"qwerty"];
//    alert(arr[-2]);






















// 3) var arr = [1,2,3,4,5];
//    alert(arr[arr.length]);


























// 4) var arr = [1,2,3,4,5];
//    var arr2 = arr;
//    arr.push(6,7,8,9);
//    arr2.push(10,11,12,13);
//    console.log(arr);
//    console.log(arr2);


























// 5) var arr = [];
//    var arr2 = [];
//    alert(arr == arr2);
























// 6) var arr = [1,2,3];
//    arr[5] = 10;
//    arr.push(4,5);
//    arr[8].push(10)
//    console.log(arr);





























// 7) var arr = [1,2,3];
//    console.log( arr.unshift( arr.pop() ) );
//    console.log(arr);






























// 8) var arr = [1,2,3,4,5,6,7,8,9];
//    var a = arr.splice(2, -2, 10,20);
//    console.log(arr);
//    console.log(arr.length);
//    console.log(a)
//    console.log(a.length)
















