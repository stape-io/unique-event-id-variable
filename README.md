# Unique Event ID Variable for Google Tag Manager WEB Container 

Custom variable for Google Tag Manager Web container that generated a unique ID for Google Tag Manager events. 
It can be used to set up event deduplication for Facebook conversion API.


### How it works

Variable is generated based on the data in the DataLayer: event, start, and uniqueEventId:

For example:
```
Data Layer values after this Message: {gtm: {start: 1616318632825, uniqueEventId: 3}, event: 'click'}
Event ID: '1616318632825_3_click'
```

## How to set it up

The instructions for setting up Facebook conversion API event deduplication using this variable are described in [this blog post](https://gtm-server.com/how-to-set-up-facebook-event-deduplication-in-google-tag-manager/).


## Open Source

Unique Event ID Variable for GTM is developed and maintained by [GTM Server Team](https://gtm-server.com/) under the Apache 2.0 license.
