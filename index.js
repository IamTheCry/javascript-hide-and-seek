
// Define a function which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  return document.querySelector(selector)
};


// Define a function that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you [read the docs]
//(https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ). (Note that in `index.html` `#nested` and `.target` just //_happen_ to be `div`s. This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('#nested .target');
};



// - Define a function that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`]
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list');

};

// - Define a function that pulls out the most deeply nested child
// from `div#grand-node`. (Remember, you can iterate over elements and call
// `querySelector()` and `querySelectorAll()` on them. This is challenging to
// implement correctly, but not beyond your ability!)
function deepestChild() {
  // set the starting point
  var startNode = document.querySelector('div#grand-node')
  var result = '';
  // make a function to loop through the node
  function nodeLooper(node) {
    // check if the node has children
    if (node.children.length < 1) {
      console.log(node)
      result = node;
    } else { 
      console.log('elseran')
      // if it has children check each child for children
      for (var i = 0; i < node.children.length; i++) {
        nodeLooper(node.children[i])
      }
      // if it has no children, return that node
    }
    return result;
  }
  console.log('result',nodeLooper(startNode))
  return nodeLooper(startNode);
};


