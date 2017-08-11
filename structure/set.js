// Set成员的值都是唯一

let set = new Set();

let arr = [4,5,4,2,3,3,2,2,5];

arr.forEach(num => {
    set.add(num);
});

console.log(set);
