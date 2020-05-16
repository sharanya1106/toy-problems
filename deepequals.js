const obj1 = {
    name: 'sharanya',
    rollno: '57'
}
const obj2 = {
   name: 'sharanya',
   rollno: '57'
}

function isObject(obj) {
   if(typeof obj === "object" && obj != null) {
       return true;
   } else {
       return false;
   }
}
function deepEqual(val1, val2) {
   if(val1 == val2) {
       return true;
   } else if (isObject(val1) && isObject(val2)) {
       if(Object.keys(val1).length != Object.keys(val2).length) return false;
       for(let i in obj1) {
           if(!deepEqual(val1[i], val2[i])) {
               return false;
           }
       }
       return true;
   } else {
       return false;
   }
}

  console.log(deepEqual(obj1, obj2));
  console.log(deepEqual(7, 7));
  console.log(deepEqual(6, 7));