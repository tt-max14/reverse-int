module.exports = function reverse (n) {
    const module = Math.abs(n);
    const final = module.toString().split('').reverse().join('');
    return final;
}
