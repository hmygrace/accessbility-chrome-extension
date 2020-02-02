let newColor = "white";
let newFontSize = "16px";
let newFontWeight = "300";

window.onload = function(){
    document.body.addEventListener('mouseover', function (event) {
        console.log("mouseover");
        // get reference to the element user mouseover
        if(event.target.id!="popup"){
            event.target.style.border = "thick solid grey";
            event.target.style.borderWidth = "5px";
        }
        // reset the borderWidth after a short delay
        // setTimeout(function() {
        //     event.target.style.borderWidth = "";
        //     }, 400);
      }, false);
    document.body.addEventListener('mouseout', function (event) {
        console.log("mouseout");
        // get reference to the element user mouseover
        if(event.target.id!="popup"){
            event.target.style.border = "";
            event.target.style.borderWidth = "";
        }
        // reset the borderWidth after a short delay
        // setTimeout(function() {
        //     event.target.style.borderWidth = "";
        //     }, 400);
    }, false);
    this.document.body.addEventListener('click',function(event){
        
        if(event.target.id!="popup"){
            // event.target.style.backgroundColor = newColor;
            changeColorFunc(event,newColor);
            event.target.style.fontSize = newFontSize;
            event.target.style.fontWeight = newFontWeight;
        }
        // chrome.storage.sync.get('color', function(data) {
        //     // changeColor.style.backgroundColor = data.color;
        //     // changeColor.setAttribute('value', data.color);
        //     event.target.style.backgroundColor = data.color;
        //     // document.body.style.fontSize = '20px';
        //     // changeColor(document.getElementsByTagName("body")[0]);
        //     // document.div.style.color = data.color;
        //   });
    });
};
function changeColorFunc(element,color){
    element.target.style.color = color;
    for(var i=0; i < element.target.children.length; i++){
        changeColorFunc(element.target.children[i],color);
    }
  }


let changeColor = document.getElementById('changeColor');

changeColor.onclick = function() {
    newColor = document.getElementById('color-selector').value;
    // chrome.storage.sync.set({color: newColor}, function() {
    //       console.log('The color is '+newColor);
    //     });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/color-change.js"});
    // });
};

let changeFontSize = document.getElementById('changeFontSize');

changeFontSize.onclick = function() {
    var newSize = document.getElementById('font-size-selector').value;
    newFontSize = newSize;
    // chrome.storage.sync.set({fontSize: newSize}, function() {
    //       console.log('The size is '+newSize);
    //     });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/fontSize-change.js"});
    // });
};

let changeFontWeight = document.getElementById('changeFontWeight');

changeFontWeight.onclick = function() {
    var newWeight = document.getElementById('font-weight-selector').value;
    newFontWeight = newWeight;
    // chrome.storage.sync.set({fontWeight: newWeight}, function() {
    //       console.log('The weight is '+newWeight);
    //     });
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {file: "scripts/fontWeight-change.js"});
    // });
};


// let chooseElement = document.getElementById('chooseElement');
// chooseElement.addEventListener('click', cssSelector);

// function cssSelector(tab){
//   chrome.tabs.insertCSS(tab.id, { file: "./combined.css" });
//   chrome.tabs.executeScript(tab.id, { file: "./combined.js" });

//     chrome.tabs.insertCSS(tab.id, { file: "content_scripts/mouseover.css" });
//     chrome.tabs.executeScript(tab.id, { file: "content_scripts/mouseover.js" });
//   // chrome.tabs.executeScript(tab.id, { file: "element-select.js" });
  
// }

// chooseElement.onClicked.addListener(function(tab) {
//   chrome.tabs.insertCSS(tab.id, { file: "combined.css" });
//   chrome.tabs.executeScript(tab.id, { file: "combined.js" });
// });


// window.sg_options = {
//   remote_interface: 'sg_interface.js'
// }

// window.selector_gadget = new SelectorGadget();
// let changeColor2 = document.getElementById('changeColor2');

// chrome.storage.sync.get('color', function(data) {
//   changeColor2.style.backgroundColor = '#4688f1';
//   changeColor2.setAttribute('value', '#4688f1');
// });
// changeColor2.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };

// let changeColor3 = document.getElementById('changeColor3');

// chrome.storage.sync.get('color', function(data) {
//   changeColor3.style.backgroundColor = '#39c';
//   changeColor3.setAttribute('value', '#39c');
// });
// changeColor3.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };