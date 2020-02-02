// function floatingDiv(parent) {
//     if(!parent) parent = "body";
x = window.innerWidth-divWidth;
jQuery('<div/>', {
    id: 'floating',
    text: '<HTML HERE>',
    style: 
        'position:fixed;'+
        'top:0px;'+
        'left:'+x+'px'+
        'width:'+divWidth+'px'+
        'width:'+divHeight+'px'
}).appendTo(parent);
//   }