// import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './constants.js';
import * as constants from './constants.js';
import {logger2} from './logger/index.js';

const infoLogger = logger2('Info');
infoLogger('Bắt đầu gửi mail',constants.TYPE_ERROR);