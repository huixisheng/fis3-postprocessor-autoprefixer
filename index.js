'use strict';

var autoprefixer = require('autoprefixer');
var postcss      = require('postcss');

module.exports = function(content, file, settings){

  /**
   *
   settings
   { browsers:
    [ 'Firefox >= 20',
     'Safari >= 6',
     'Explorer >= 9',
     'Chrome >= 12',
     'ChromeAndroid >= 4.0' ],
      filename: '/Users/huixisheng/FIS/fis3-postprocessor-autoprefixer/tests/css/webkit-gradient.css'
    }
   */
  var postcssArr = [];
  if( settings.flexboxfixer ){
    postcssArr.push(require('postcss-flexboxfixer'))
  }
  if( settings.gradientfixer ){
    postcssArr.push(require('postcss-gradientfixer'))
  }
  postcssArr.push(autoprefixer(settings));

  return postcss(postcssArr).process(content).css;
};