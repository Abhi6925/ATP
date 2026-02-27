//3. Find the sum of marks in [80,38,25,88]
let marks = [80,38,25,88];
let sum = 0;
for(let i = 0;i<marks.length;i++)
{
    sum += marks[i];
}
console.log(`The total marks are ${sum}`);