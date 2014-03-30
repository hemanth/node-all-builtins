module.exports = (function() {
  return require('repl')._builtinLibs.reduce(function(module,builtin){
    module[builtin] = require(builtin);
    return module;
  },{});  
})();
