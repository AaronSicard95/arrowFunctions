const double = (arr) =>(arr.map(v=>(v*2)));

const squareAndFindEvens = (nums) =>{
    let squares = numbers.map(n=>(n**2));
    let evens = squares.filter(s=>(s%2===0));
    return evens;
}