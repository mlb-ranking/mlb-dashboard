import debugFactory from 'debug';

const verbose = debugFactory('mlb:verbose');
const info = debugFactory('mlb:info');
const debug = debugFactory('mlb:debug');
const error = debugFactory('mlb:error');
const success = debugFactory('mlb:success');

// Enable loggers
debug.enabled = true;
error.enabled = true;
info.enabled = true;
success.enabled = true;
verbose.enabled = false;

// red, green, yellow, blue, purple, aqua
debug.color = 5;
error.color = 1;
info.color = 4;
success.color = 2;
verbose.color = 1;

export default {
  debug,
  error,
  info,
  success,
  verbose,
};
