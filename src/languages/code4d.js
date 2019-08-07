var constant = require('../../../../keywords/constant.js');
var command = require('../../../../keywords/command.js');
var keyword = require('../../../../keywords/keyword.js');
// var literal = require('../../../../keywords/literal.js');
// var built_in = require('../../../../keywords/built_in.js');
var plugin = require('../../../../keywords/plugin.js');

module.exports = function(hljs) {
    var regexConstant = new RegExp(constant);
    var regexPlugin = new RegExp(plugin);
    var regexKeyword = new RegExp(keyword);
    var regexCommand = new RegExp(command);
    var commandCorrection = new RegExp("((\\w|-)("+command+")|("+command+")(\\w))");
    var keywordCorrection = new RegExp("(("+keyword+")(\\w))");
  
    return {
      aliases: ['4d'],
      keywords: {},
      contains: [
        {
        className: 'command',
        begin: /Character/, end: /\.|\s/,
        excludeEnd: true,
        },
        // {
        // className: 'normal',
        // begin: keywordCorrection ,end:/[\.\n():;\s]/,
        // excludeEnd: true,
        // },
        {
          className: 'locale',
          begin: /\$[A-Za-zèéùàç0-9_]+(?=[-\)+\[\]=\-≤≥:;\(.*,\\{a-zA-Z} \n])/
        },
        {
          className: 'locale',
          begin: /\$[A-Za-z]{1}/
        },
        {
          className: 'param',
          begin: /\$[0-9]{0,1}/
        },
        {
          className: 'comment',
          begin: /\`([^\n]+[\n])?/
        },
        {
          className: 'comment',
          begin: /\/\/[^\n]+[\n]/
        },
        {
          className:'constant',
          begin: regexConstant , end: /[\s).(;]/,
          excludeEnd: true,
        },
        {
          className: 'string',
          begin: '"', end:'"',
          excludeEnd: true, excludeBegin: true,
        },
        {
          className: false,
          begin: /(\.[0-9]{1,9})/,
        },
        {
          className: false,
          begin: commandCorrection ,end:/[\.:;())\n\s]/,
          excludeEnd: true,
        },

        //
        //
        //

        {
          className: 'method',
          contains:[
            {
              className: 'locale',
              begin: /\$[A-Za-zèéùàç0-9_]+(?=[-\)+\[\]=\-:;\(.*,\\{a-zA-Z} \n])/
            },
            {
              className: 'locale',
              begin: /\$[A-Za-z]{1}/
            },
            {
              className: 'param',
              begin: /\$[0-9]{0,1}/
            },
            {
              className: 'comment',
              begin: /\`([^\n]+[\n])?/
            },
            {
              className: 'comment',
              begin: /\/\/[^\n]+[\n]/
            },
            {
              className:'constant',
              begin: regexConstant , end: /[\s();]/,
              excludeEnd: true,
            },
            {
              className:'plugin',
              begin: regexPlugin , end: /[\s)(;]/,
              excludeEnd: true,
            },
            {
              className: 'string',
              begin: '"', end:'"',
            },
            {
              className: 'command',
              begin: regexCommand, end: /[():+;\[\](\s\n\.]/, 
              excludeEnd:true,
            },
            {
              className: 'normal',
              begin: /[=:;\w]/,
            },
            {
              className: 'method',
              // begin: /\.[a-zA-Z0-9_-]+\(/,
              // end: /((\)\))(\s|\n)|(\.\w*\(\))(\s|\n)|\))/,
              contains: 
              [
                {
                  className: 'command',
                  begin: regexCommand, end: /[():+;\[\](\s\n\.]/, 
                  excludeEnd:true,
                },
                {
                  className: 'locale',
                  begin: /\$[A-Za-zèéùàç0-9_]+(?=[-\)+\[\]=\-:;\(.*,\\{a-zA-Z} \n])/
                },
                {
                  className: 'locale',
                  begin: /\$[A-Za-z]{1}/
                },
                {
                  className: 'param',
                  begin: /\$[0-9]{0,1}/
                },
                {
                  className: 'comment',
                  begin: /\`([^\n]+[\n])?/
                },
                {
                  className: 'comment',
                  begin: /\/\/[^\n]+[\n]/
                },
                {
                  className:'constant',
                  begin: regexConstant , end: /[\s();]/,
                  excludeEnd: true,
                },
                {
                  className:'plugin',
                  begin: regexPlugin , end: /[\s)(;]/,
                  excludeEnd: true,
                },
                {
                  className: 'string',
                  begin: '"', end:'"',
                },
                {
                  className: 'normal',
                  begin: /[=:;\w]/,
                },
                {
                  className: 'property',
                  begin: /\.[a-zA-Z0-9_-]*(?=:|.|;|\s|\n)/,
                },
              ],
              variants: [
                {
                  begin: /\.[a-zA-Z0-9_-]+\(/,
                  end: /[-\.\n ]/,
                  excludeEnd: true
                },
                {
                  begin: /\.[a-zA-Z0-9_-]+\(/,
                  end: /[-\.$)\w]*/,
                  excludeEnd: true
                },
              ]
            },
            {
              className: 'property',
              begin: /\.[a-zA-Z0-9_-]*(?=:|.|;|\s|\n)/,
            },
            {
              className: 'command',
              begin: regexCommand, end: /[):+;\[\](\s\n\.]/, 
              excludeEnd:true,
            },
          ],
          variants: [
            {
              begin: /\.[a-zA-Z0-9_-]+\(/,
              end: /[-\.\n ]/,
              excludeEnd: true
            },
            {
              begin: /\.[a-zA-Z0-9_-]+\(/,
              end: /[-\.$)\w]*/,
              excludeEnd: true
            },
          ]
        },
        {
          className: 'command',
          begin: regexCommand + /(?=[.():+;\[\]\s\n])/,
        },
        {
         className:'keyword',
         begin: regexKeyword , end: /[\s(]/,
         excludeEnd: true,
       },
        {
          className:'plugin',
          begin: regexPlugin , end: /[\s)(;]/,
          excludeEnd: true,
        },
        {
         className:'keyword',
         begin: regexKeyword , end: /[\s(]/,
         excludeEnd: true,
       },
       {
        className: 'property',
        begin: /\.[a-zA-Z0-9_-]*(?=:|.|;|\s|\n)/,
      },
      ]
    };
  };