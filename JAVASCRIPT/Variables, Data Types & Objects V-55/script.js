console.log ("Hey this is tutorial 55")

/*  var a = 5;

var b = 6;

var c = "Firdous";

var _a = 55;

var _55a = "Firdous"  (not allowed as names of variables cant start with a number)

console.log(a+b+4)

console.log(typeof a, typeof b, typeof c)


const a1 = 6
a1 = a1 + a1 (not allowed as constant variables values cant be ChannelMergerNode, we use this to keep it constant no matter whatever happens)

Instead of "var" we use "let"  */

let a = 5;
a = a + a;

let b = 6;

let c = "Firdous";

let _a = "Rahul";

console.log(a) /* (Here ans will be 10 as we have mentioned above a = a + a;)  */

{
    let a = 66;
    console.log(a) /*(Here it will show 66 referring to the value of a inside the block{}) */
}

/* (But if we use var instead of both the let it will show 66 in both case as it has global value and does not refer to block values) */

let x = "Firdous apa"
let y = 55;
let z = 5.57;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
typeof console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Firdous",
    "job code": 5566
    "is_beautiful": true;
}

console.log(o)
o.salary = "100crores"  /*  (It will add this detail to the above details)  */
console.log(o)
o.salary = "500crores" /*  (Now it will change & display the value of salary to 500crores) */
console.log(o)