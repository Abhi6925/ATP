//4. Find the smallest element in the array marks
let marks = [10,200,30,400,50];
let smallest = marks[0];
for(let i =1;i<marks.length;i++)
{
    if(smallest>marks[i]) 
        smallest = marks[i];
}
console.log(`Least marks among them are ${smallest}`);