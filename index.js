//async & await
// async all the async function and await to chain promisses toghether logical way

const getTodos = async ()=>{
//await stops asigning value to response till the promisse is solved
  const response = await fetch('todos/luigi.json');
  if(response.status !== 200){
    //throw a new err to catch the exact err
    throw new Error('cannot fetch the data');
  }
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data;
}


getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected', err.message))
//async returns a promisse
// const test= getTodos();
// console.log(test)


//FETCH API
//passing inside what we want to fetch

//fetch the data
// fetch('todos/luigi.json').then((response)=>{
//   console.log('resolved', response);
//   //reponse.json- method returns a promise
//   return response.json()
//   }).then(data=>{
//     console.log(data)
//     //catch err
//   }).catch((err)=>{
//   console.log('rejected', err)
// });



//HTTP REQUEST
//https://developer.mozilla.org/en-US/docs/Web/HTTP


//intigrated js method to get data

// const getTodos =(resources,callback) =>{
//   return new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', ()=>{
//       // console.log(request, request.readyState)
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         // console.log(request.responseText)
//         // callback(undefined,data);
//         resolve(data);
//       }else if(request.readyState === 4){
//         // console.log('could not fetch data')
//         // callback('could not fetch data', undefined);
//       reject('error getting resource')
//       }
//     })
//     //JSON-transfering data betwen client and server
//     //using xmlhttp methods
//     request.open('GET', resources);
//     request.send();
//   })
// }

// //CHAIN PROMISSES( GETTING DATA ONE AFTER ANOTHER JSON)

// getTodos('todos/luigi.json').then(data =>{
//   console.log('promise solved', data);
//   return getTodos ('todos/mario.json')
// }).then(data=>{
//  console.log('Promise 2 solved', data);
//  return getTodos('todos/show.json')
// }).then(data=>{
//   console.log('Promise 3 solved', data)
//  }).catch(err=>{
//   console.log('promise rejected', err)
// })


// PROMISE EXAMPLE

// getTodos('todos/luigi.json').then(data =>{
//   console.log('promise solved', data)
// }).catch(err=>{
//   console.log('promise rejected', err)
// })


// const getSmth = () => {

//   return new Promise((resolve,reject)=>{
//     //FETCH SMTH,
//     // resolve('pass data');
//     reject('pass err')
//   })
// }

//V1

// getSmth().then(data=>{
//   console.log(data);
// }).catch(err =>{
//   console.log(err)
// })

//V2
// getSmth().then((data)=>{
//   console.log(data);
// },(err)=>{
//   console.log(err)
// });


//getting data from different json one after another, using callback func passing the specific reource
// getTodos('todos/luigi.json',(err, data)=>{
//   console.log(data);
//   getTodos('todos/mario.json',(err, data)=>{
//     console.log(data)
//     getTodos('todos/show.json',(err, data)=>{
//       console.log(data)
//     }
//     )}
//passing 2 param to have specific callbacks

// console.log('callback fired');
// if(err){
//   console.log(err)
// }else {
//   console.log(data)
// }
// )})
