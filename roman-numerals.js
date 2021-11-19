const romanNums=(num)=>{
    const numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const values = [1000, 500, 100, 50, 10, 5, 1];
    let result = '';
    values.forEach((v,i)=>{result+=numerals[i].repeat(Math.floor(num/v));num%=v});
    return result;
}

console.log(romanNums(4));
console.log(romanNums(267));