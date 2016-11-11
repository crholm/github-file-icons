var fileNamesToClass = {
  '.gitignore': 'github',
  '.gitattributes': 'github',
  '.gitmodules': 'github',
  'bower.json': 'bower',
  'package.json': 'npm',
  'nginx.conf': 'nginx',
  '.babelrc': 'babel',
  '.bowerrc': 'bower',
  'Vagrantfile': 'vagrant',
  'docker-compose.extra.yml': 'docker',
  'docker-compose.yml': 'docker',
  '.dockerignore': 'docker',
  'dockerfile': 'docker',
  'dockerfile.extra': 'docker',
  'docker-sync.yml': 'docker',
  'gulpfile.js': 'gulp',
  'gruntfile.js': 'grunt',
};

var extentionToClass = {
  'html': 'html5',
  'html.erb': 'html5',
  'slim': 'html5',
  'css': 'css3',
  'less': 'css3',
  'scss': 'sass',
  'json': 'jsonld',
  'geojson': 'jsonld',
  'jsonld': 'jsonld',
  'pub': 'key',
  'png': 'image',
  'jpg': 'image',
  'svg': 'image',
  'babel.js': 'babel',
  'woff2': 'font',
  'woff': 'font',
  'ttf': 'font',
  'ttc': 'font',
  'otf': 'font',
  'eot': 'font',
  'accda': 'access',
  'accde': 'access',
  'accdb': 'access',
  'accdr': 'access',
  'accdt': 'access',
  'adn': 'access',
  'laccdb': 'access',
  'mdw': 'access',
  'asax' : 'asp',
  'ascx' : 'asp',
  'ashx' : 'asp',
  'asmx' : 'asp',
  'aspx' : 'asp',
  'axd' : 'asp',
  'hbs' : 'mustache',
  'hs': 'haskell',
  'clj': 'clojure',
  'hpp': 'cpp',
  'h': 'c',
  'eex': 'elixir',
  'ex': 'elixir',
  'exs': 'elixir',
  'xls': 'excel',
  'xlsb': 'excel',
  'xlsx': 'excel',
  'xlt': 'excel',
  'xlsm': 'excel',
  'es6': 'js',
  'js.erb': 'js',
  'js.flow': 'js'



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