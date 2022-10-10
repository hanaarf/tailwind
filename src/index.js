const jsdom = require('jsdom');
global.$ = require('jquery/dist/jquery')(jsdom().createWindow());
