function shout(string) {
 return string.toUpperCase()
}

shout("hello");

function whisper(string) {
  return string.toLowerCase()
}

whisper

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
  
}