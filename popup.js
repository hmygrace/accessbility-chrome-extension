let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};

window.sg_options = {
  remote_interface: 'sg_interface.js'
}

window.selector_gadget = new SelectorGadget();
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