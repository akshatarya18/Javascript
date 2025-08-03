  
  //promise creatation 

  let pr= new Promise((resolve,reject)=>{
     let success=false //true
     if(!success){     
        resolve("work done")
     } else{
        reject("work not done")
     }
  });  
//   output of promise
   pr.then((akshat)=>{
 console.log(akshat)
   }).catch((rudra)=>{
    console.log(rudra)
   })