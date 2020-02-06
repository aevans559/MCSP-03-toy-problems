/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push', 'extra']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

 
 
 Array.prototype.isSubsetOf = function(arr) {
   // your code here
   const first = arr[0];

   let helper = () => {
     if (arr.length > 0) {
       if (this.includes(first)) {
         arr.shift();
       } else {
         return false;
       }
       return helper();
     } else {
       return true;
     }
    }
};





// Array.prototype.isSubsetOf = function(arr) {
//   // your code here
//   //create copy of subset
//   let copy = arr.slice();
  

//  let helper = (copy) => {
//    //if copy contains elements
//      if (copy.length) {
//    // iterate through parent array
//      this.map( element => {
//        //check to see if element in parent array exists in our copy
//        if (copy.includes(element)) {
//          // if the element does exist remove that element from the copy
//          copy.splice(copy.indexOf(element), 1);

//          // continue process until copy contains no more elements from the parent array
//          helper(copy);
//        } else {
//          // if there are any elements remaining return false
//          return false;
//        }
//      })
//      // else return true
//    } else {
//      return true;
//    }
//  }
// };