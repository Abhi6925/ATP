//write a function that recieves an array as arg and reutrn their sum
let sum=function(a){
    let i
    let sum1=0
    for(i=0;i<a.length;i++)
        sum1+=a[i]
    return sum1
}
let result=sum([1,2,3,4])
console.log(result)