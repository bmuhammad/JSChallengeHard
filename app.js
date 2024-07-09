/* function showRating(rating) {
  let rate = "";

  for (let i = 0; i < Math.floor(rating); ++i) {
    rate = rate + "*";
    if (i !== Math.floor(rating) - 1) {
      rate = rate + " ";
    }
   
  }

  if(!Number.isInteger(rating)){
    rate = rate + " .";
}


  return rate;
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));*/

/*
function sortLowToHigh(arr) {
  let sortedArray =  arr.sort((a, b) => a - b);
 
  return sortedArray;
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

console.log(sortLowToHigh([5, 10, 0, -5]));

console.log(sortLowToHigh([3, 2, 1, 0]));
*/

/*
function sortHighToLow(arrOfObjects){

  return  arrOfObjects.sort((a, b) => b.price - a.price);

}

console.log(sortHighToLow([
    {id: 1,price:50},
    {id: 2,price:30},
    {id: 3,price:60},
    {id: 4,price:10},
]))
    */

/*async function postsByUser(userId) {
  //  fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(res => console.log(res))
  // console.log(userId);

  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const result = await promise.json();
  
  const posts = result.filter(element => element.userId === userId);
  
  console.log(posts);
}

postsByUser(4);
*/

