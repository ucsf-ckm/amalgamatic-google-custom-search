// var cheerio = require('cheerio');
// var http = require('http');
// var extend = require('util-extend');
// var url = require('url');

// var options = {
//     url: 'http://www.library.ucsf.edu/search/node'
// };

exports.setOptions = function () {
    // options = extend(options, newOptions);
};

exports.search = function () {
//     'use strict';

//     if (! query || ! query.searchTerm) {
//         callback(null, {data: []});
//         return;
//     }

//     var myUrl = options.url + '/' + encodeURIComponent(query.searchTerm);

//     var myOptions = url.parse(myUrl);
//     myOptions.withCredentials = false;

//     http.get(myOptions, function (res) {
//         var rawData = '';

//         res.on('data', function (chunk) {
//             rawData += chunk;
//         });

//         res.on('end', function () {
//             var $ = cheerio.load(rawData);
//             var result = [];

//             var rawResults = $('.search-results .title a');

//             rawResults.each(function () {
//                 result.push({
//                     name: $(this).text(),
//                     url: $(this).attr('href')
//                 });
//             });
            
//             callback(null, {
//                 data: result, 
//                 url: myUrl
//             });
//         });
//     }).on('error', function (e) {
//         callback(e);
//     });
};