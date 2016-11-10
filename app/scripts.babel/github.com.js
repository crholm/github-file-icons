'use strict';

// TODO credit
// <div>Icons made by <a href="http://www.flaticon.com/authors/agata-kuczminska" title="Agata Kuczminska">Agata Kuczminska</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

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
    var clazz = getIconClass(fileName);
    if(clazz){
      icon.className += ' github-file-icons ' + clazz;
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
