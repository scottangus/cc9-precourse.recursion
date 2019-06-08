/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (input) => {
  var results = [];
  //console.log(input);
  //console.log(typeof input);
  if (typeof input === "boolean" || typeof input === "number" || input === null){
    return String(input);
  }
  else if (typeof input === "string"){
    //console.log("I am a string");
    return "\""+ input + "\"";
  }
  else if(Array.isArray(input)){
    //console.log("I am an array");
    for (var x = 0; x < input.length; x++){
      results.push(stringifyJSON(input[x]));
    }
    return "[" + results + "]";
  }
  else if(typeof input === "object" && Object.prototype.toString.call(input) === "[object Date]"){
    //console.log("I am a Date!");
    //results.push("\"" + input.toISOString() + "\"");
    return "\"" + input.toISOString() + "\"";
  }
  else if(typeof input === "object"){
    //console.log("I am an object");
    for (var currentKey in input){
      //console.log(Object.prototype.toString.call(input[currentKey]));
      if (input[currentKey] !== undefined && typeof input[currentKey] !== "function"){
        results.push(stringifyJSON(currentKey) + ":" + stringifyJSON(input[currentKey]));
      }
      
    }
    return "{" + results + "}"
  }
  return String(input);
  //return String.toString(input);
};
