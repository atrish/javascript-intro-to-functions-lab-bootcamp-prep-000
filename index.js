function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string, grandmother) {
      return (${string} ${grandmother})
}

sayHiToGrandma("hello" "I can't hear you")
sayHiToGrandma("HELLO!" "YES INDEED!")
