//  var array1=["nag","sai","jannu","geeta",123];
//  var array2=["cpu","computer","boot"];
// // // // //length of first array//
//  console.log(array1.length); //5
// // // // //index of the first array//
//  console.log("Index of nag is "+array1.indexOf('nag')); 	//0
// // // // //slice of the first array//
// console.log(array1.slice(0,3)); /*output:["nag","sai","jannu"]*/
// // // // //pop of the first element//
//  console.log(array1.pop()); /*ouput:"geeta" */

// // // // //push the array element// 
// console.log(array1.push("seetha")); /* output :6*/

// // // // //add first array and second array using third array//
//   var array3=array1 + array2;
//  console.log(array3);
//  console.log(array1[0])
// // // // //shift the first array//
//  console.log(array1.shift())/* ouput :"nag"*/
// // // // //unshift the second array//
// console.log(array2.unshift()) ; /*ouput:4*/

// // // // //replace the first element to second array//
//  var index=array1.indexOf(array2)
// if(index !=array1.length){
// array1[index]=array2;
//  }
// console.log(array1)
// console.log(array2.includes(array1))
// console.log(array2)
// console.log(array3)
// Array.prototype.splice.apply(array2, [0, array1.length].concat(array2));

// console.log(array1.copyWithin(array2))
// console.log(array2)
// console.log(array1.concat(array2))


// console.log(array1=array2)

// var array1=["nag","sai","sandeep"];
// var array2=[1,2,3,4];
// console.log(array2=array1)
// console.log(array2)

// first_array=[1,2,3,4,5,6]
// second_array=[6,5,4]
// third_array=first_array
// first_array=second_array
// second_array=third_array
// console.log(first_array)
// console.log(second_array)
// //loops//

// i=10
// for(i=0;i<10;i++)
// {
//     console.log(+ i +" ");
// }

// // var age=prompt("enter your age")
// // if(age<=18)
// // {
// //     console.log("you are eligible for vote");
// // }
// // else{
// //     console.log("not eligible fo vote");
// // }

// // console.log(array1)
// // array1.join()
// // array1.pop();  //removes last element from an array and returns it as a value
// // array1.push('new');   //adds new elements at end of existing array
// // array1.shift();// removes first element in the array and return its value to variable
// // array1.unshift('new') ;    // adds new element at start of exisiting array
// // array1.reverse();     // reverses order of elements present inside array
// // array1.sort();        // sorts all elements in ascending order
// // array1.slice([0],[3])      //returns sub-array from index 'start' till 'end'. if not specified then starts with
// // array1.indexOf('element name',index);       //returns index number where given element is found or -1 if not found.
// // array1.concat(array2)
// // console.log(array1.push(123))
// // console.log(array1)

// var array1=[[[1,2,3],[[4,3,2],[4,7,5]],[5,4,2]]]
// console.log("\n")
// console.log(array1.length)
// console.log("\n")
// console.log(array1.concat(array1))


// console.log(array1.join(array2))

// console.log(array1.copyWithin(array2))
// console.log(array1.entries(10))

 set1=[1,2,3,4,5]
 set2=[...set1,6,5,4,3,2,1]
 console.log(set2)


 set1={
    name:'rahul',
    email:"abc@gmail.com"
 }
 set2={
    ...set1,
    age:25
 }
 console.log(set2)

 









