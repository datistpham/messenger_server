import ReverseMd5 from 'reverse-md5'
const rev= ReverseMd5({
    lettersUpper: false,
    lettersLower: true,
    numbers: true,
    special: false,
    whitespace: true,
    maxLen: 12
})

export { rev }