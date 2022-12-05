

function createLogger(namespace) {
    function logger(message, type) {
        console[type](`[${namespace}] ${message}`);
    }
    return logger;
}

export default createLogger;