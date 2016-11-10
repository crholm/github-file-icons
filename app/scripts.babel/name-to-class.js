var fileNamesToClass = {
  '.gitignore':'github',        'bower.json' : 'bower',           'package.json' : 'npm',
  'nginx.conf': 'nginx'
};

var extentionToClass = {
  'html': 'html5',                   'html.erb': 'html5',
  'css': 'css3',                     'less': 'css3',              'scss': 'sass',
  'json': 'jsonld',                  'geojson': 'jsonld',
  'pub': 'key',
  'png': 'image',                    'jpg':'image'
};



function getIconClass(filename){
  filename = filename.toLowerCase().trim();

  var clazz = fileNamesToClass[filename];
  if(clazz){
    return clazz + '-icon';
  }

  var e;
  extensionPattern =/\.[0-9a-z]{1,5}\.[0-9a-z]{1,5}$/i;
  extension = filename.match(extensionPattern);
  if(extension){
     e = extension[0].substring(1).trim();

    clazz = extentionToClass[e];

    if(clazz){
      return clazz + '-icon';
    }
  }



  var extensionPattern =/\.[0-9a-z]{1,5}$/i;
  var extension = filename.match(extensionPattern);
  if(extension){
    e = extension[0].substring(1);

    clazz = extentionToClass[e];
    if(clazz){
      return clazz + '-icon';
    }
    return e + '-icon';
  }
}