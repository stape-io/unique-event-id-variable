___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.


___INFO___

{
  "type": "MACRO",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "Unique Event ID",
  "description": "Generates unique event id",
  "categories": [
    "UTILITY"
  ],
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

const queryPermission = require('queryPermission');
const copyFromDataLayer = require('copyFromDataLayer');


const startKey = 'gtm.start';
let startContents = '';

if (queryPermission('read_data_layer', startKey)) {
  startContents = copyFromDataLayer(startKey);
}


const uniqueEventIdKey = 'gtm.uniqueEventId';
let uniqueEventIdContents = '';

if (queryPermission('read_data_layer', uniqueEventIdKey)) {
  uniqueEventIdContents = copyFromDataLayer(uniqueEventIdKey);
}


const eventKey = 'event';
let eventContents = '';

if (queryPermission('read_data_layer', eventKey)) {
  eventContents = copyFromDataLayer(eventKey);
}


return startContents+'_'+uniqueEventIdContents+'_'+eventContents;


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "read_data_layer",
        "versionId": "1"
      },
      "param": [
        {
          "key": "keyPatterns",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "gtm.start"
              },
              {
                "type": 1,
                "string": "gtm.uniqueEventId"
              },
              {
                "type": 1,
                "string": "event"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  }
]


___TESTS___

scenarios: []


___NOTES___

Created on 11/03/2021, 11:05:32


