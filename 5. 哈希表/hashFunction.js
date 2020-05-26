function hash_func(str, max) {
    // 定义hashcode
    let hash_code = 0;

    // 霍纳算法
    for (let i = 0; i < str.length; i++) {
        hash_code = 31 * hash_code + str.charCodeAt(i)
    }
    hash_code = hash_code % max
    return hash_code
}

console.log(hash_func("rzh", 11))
console.log(hash_func("whx", 11))