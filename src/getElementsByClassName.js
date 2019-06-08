/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (input) => {
  //console.log(typeof input);
  //console.log(String(window.document));
  //console.log(document.documentElement.hasChildNodes());
  var results = [];
  function recursion(currentLevel){
    if ("className" in currentLevel){
      if (currentLevel.className.indexOf(input) !== -1){results.push(currentLevel);}
    }
    if (currentLevel.hasChildNodes()){
      for (let node of currentLevel.childNodes){
        //console.log(node);
        //if (node.className === input){
          //results.push(node);
        //}
        recursion(node);
      }
    }
  }
  recursion(document.documentElement)
  return results;
};
