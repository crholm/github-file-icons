'use strict';


var count = 0;

var addClasses = () => {
  count++;
  if(count > 10){
    return;
  }

  var hasIcons = document.querySelector('.github-file-icons');
  if(hasIcons){
    console.log('returning');
    return;
  }

  var rows = document.querySelectorAll('.file-wrap table tr.js-navigation-item');
  console.log('rows', rows);
  var extensionPattern =/\.[0-9a-z]{1,5}$/i;

  for(var i = 0; i < rows.length; i++){
    var icon = rows[i].querySelector('.icon');
    if(!icon){
      continue;
    }
    var badIcon = icon.querySelector('.octicon-file-text');
    if(!badIcon) {
      continue;
    }

    var fileName = rows[i].querySelector('td.content span a').innerHTML.trim();
    var extension = fileName.match(extensionPattern);
    if(extension){
      icon.className += ' github-file-icons ' + extension[0].substring(1) + '-icon';
    }else{
      icon.className += ' github-file-icons ';
    }

  }
}

// Simple state change manager.
var oldLocation = location.href;
var urlCheck = () => {
  if(oldLocation != location.href){
    oldLocation = location.href;
    count = 0;
  }
  addClasses();
}

setInterval(() => urlCheck(), 200);
addClasses();
