// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.insertCSS(tab.id, { file: "content_scripts/mouseover.css" });
//   chrome.tabs.executeScript(tab.id, { file: "content_scripts/mouseover.js" });
// });
// chrome.runtime.onInstalled.addListener(function() {
//     document.addEventListener('mouseover', function (event) {
//         console.log("mouseover");
//         // get reference to the element user mouseover
//         event.target.style.borderWidth = "5px";
//         // reset the borderWidth after a short delay
//         setTimeout(function() {
//             event.target.style.borderWidth = "";
//             }, 400);
//         }, false);
// });

// // Previous dom, that we want to track, so we can remove the previous styling.
// var prevDOM = null;

// // Mouse listener for any move event on the current document.
// document.addEventListener('click', function (e) {
//   var srcElement = e.srcElement;

//   // Lets check if our underlying element is a DIV.
// //   if (srcElement.nodeName == 'DIV') {

//     // For NPE checking, we check safely. We need to remove the class name
//     // Since we will be styling the new one after.
//     if (prevDOM != null) {
//       prevDOM.style.borderWidth = "10px";
//     }

//     // Add a visited class name to the element. So we can style it.
//     srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

//     // The current element is now the previous. So we can remove the class
//     // during the next iteration.
//     prevDOM = srcElement;
// //   }
// }, false);
