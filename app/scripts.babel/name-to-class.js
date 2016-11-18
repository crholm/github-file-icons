
var fileIcons = [
  { icon: 'git',
    files:['.gitignore', '.gitattributes', '.gitmodules'],
    extensions: []
  },
  { icon: 'bower',
    files:['bower.json', '.bowerrc', 'bowerfile'],
    extensions: []
  },
  { icon: 'babel',
    files:['.babelrc'],
    extensions: ['babel.js']
  },
  { icon: 'npm',
    files:['package.json'],
    extensions: []
  },
  { icon: 'nginx',
    files:['nginx.conf'],
    extensions: []
  },
  { icon: 'vagrant',
    files:['Vagrantfile'],
    extensions: []
  },
  { icon: 'docker',
    files:['docker-compose.extra.yml', 'docker-compose.yml', '.dockerignore',
           '.dockerignore', 'dockerfile', 'dockerfile.extra', 'docker-sync.yml'],
    extensions: []
  },
  { icon: 'gulp',
    files:['gulpfile.js'],
    extensions: []
  },
  { icon: 'grunt',
    files:['gruntfile.js'],
    extensions: []
  },
  {
    icon: 'html5',
    files:[],
    extensions: ['html', 'html.erb', 'slim']
  },
  {
    icon: 'css3',
    files:[],
    extensions: ['css', 'less']
  },
  {
    icon: 'sass',
    files:[],
    extensions: ['scss', 'sass']
  },
  {
    icon: 'jsonld',
    files:[],
    extensions: ['json', 'jsonld', 'json']
  },
  {
    icon: 'key',
    files:[],
    extensions: ['pub']
  },
  {
    icon: 'image',
    files:[],
    extensions: ['png', 'jpg', 'svg']
  },
  {
    icon: 'font',
    files: [],
    extensions: ['woff2', 'woff', 'ttf', 'ttc', 'otf', 'eot']
  },
  {
    icon: 'access',
    files:[],
    extensions: ['accda', 'accde', 'accdb', 'accdr', 'accdt', 'adn', 'laccdb', 'mdw']
  },
  {
    icon: 'asp',
    files:[],
    extensions: ['asax', 'ascx', 'ashx', 'asmx', 'aspx', 'axd']
  },
  {
    icon: 'markdown',
    files:[],
    extensions: ['md']
  },
  {
    icon: 'mustache',
    files:[],
    extensions: ['hbs']
  },
  {
    icon: 'haskell',
    files:[],
    extensions: ['hs']
  },
  {
    icon: 'clojure',
    files:[],
    extensions: ['clj']
  },
  {
    icon: 'cpp',
    files:[],
    extensions: ['hpp', 'cpp']
  },
  {
    icon: 'c',
    files:[],
    extensions: ['c', 'h']
  },
  {
    icon: 'elixir',
    files:[],
    extensions: ['eex', 'ex', 'exs']
  },
  {
    icon: 'excel',
    files:[],
    extensions: ['xls', 'xlsb', 'xlsx', 'xlt', 'xlsm']
  },
  {
    icon: 'js',
    files:[],
    extensions: ['js', 'es6', 'js.erb', 'js.flow']
  },

];


var fileNamesToClass = {};
var extentionToClass = {};
for(var i = 0; i < fileIcons.length; i++){
  var icon =  fileIcons[i];
  for(var j = 0; j < icon.files.length; j++){
    fileNamesToClass[icon.files[j]] = icon.icon;
  }
  for(var j = 0; j < icon.extensions.length; j++){
    extentionToClass[icon.extensions[j]] = icon.icon;
  }

}





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