global.window = global;
global.assert = require('chai').assert;
require('../src/js/index');
require('../src/js/login');
require('../src/js/data');
require('./data.spec.js');
