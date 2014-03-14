define(['./helper/logger'],function(logger) {
  if (logger == null){
    console.log('Package logger is not loaded.');
  }
  return {
    log: function(message) {
      logger.logMessage(message);
    }
  }
});
