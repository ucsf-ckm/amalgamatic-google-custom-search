[![Build Status](https://travis-ci.org/ucsf-ckm/amalgamatic-drupal6.svg?branch=master)](https://travis-ci.org/ucsf-ckm/amalgamatic-drupal6)

amalgamatic-google-custom-search
================================

[Amalgamatic](https://github.com/ucsf-ckm/amalgamatic) plugin for [Google Custom Search API](https://developers.google.com/custom-search/)

## Installation

Install amalgamatic and this plugin via `npm`:

`npm install amalgamatic amalgamatic-google-custom-search`

## Usage

````
var amalgamatic = require('amalgamatic'),
    custom = require('amalgamatic-google-custom-search');

// Set the domain to point to the domain you want to search
custom.setOptions({domain: 'www.example.com'});

// Add this plugin to your Amalgamatic instance along with any other plugins you've configured.
amalgamatic.add('example.com', custom);

//Use it!
var callback = function (err, results) {
    if (err) {
        console.dir(err);
    } else {
        results.forEach(function (result) {
            console.log(result.name);
            console.dir(result.data);
        });
    }
};

amalgamatic.search({searchTerm: 'medicine'}, callback);
````