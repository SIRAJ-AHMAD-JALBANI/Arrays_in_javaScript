function reverseString(str){
  let reversed_string = str.split("").reverse().join("")
  console.log(reversed_string)
  return reversed_string
}

reverseString("Hello")