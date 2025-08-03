// let x=10;    //global execution context
// function greet(){
//     console.log("hello")
// }
// console.log(x)
// greet()



// console.log("start")
// setTimeout(()=>{
//     console.log("hwllo")
// },3000)
// console.log("end")


// console.log("start")
// setInterval(()=>{
//     console.log("hwllo")
// },1000)
// console.log("end")

// setInterval(()=>{
//     const now = new Date
// })
// console.log(new Date())

//  const now = new Date()
//  const time = now.toLocaleTimeString();
//  console.log(time);

const akshat=setInterval(()=>{
    const k1=new Date()
    const time= k1.toLocaleTimeString();
    console.clear()
    console.log("current time-",time)
},1000);
console.log("time")
setTimeout(()=>{
    clearInterval(akshat)
    console.log("stopsclock")
},20000)