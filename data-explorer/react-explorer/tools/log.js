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

// red, green, yellow, blue, purple, aqua
debug.color = 5;
error.color = 1;
info.color = 4;
success.color = 2;
verbose.color = 1;

/**
 * Debug Creater
 *
 * @param name
 * @param enabled
 * @param color
 */
function debugCreator(name, { enabled = true, color = 4 }) {
  const logger = debugFactory(`feat:${name}`);
  logger.enabled = enabled;
  logger.color = color;
  return logger;
}

export default {
  debug,
  debugCreator,
  debugFactory,
  error,
  info,
  success,
  verbose,
};
