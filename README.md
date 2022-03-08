# Unique Event ID Variable for Google Tag Manager WEB Container 

Custom variable for Google Tag Manager Web container that generated a unique ID for Google Tag Manager events. 
It can be used to set up event deduplication for Facebook conversion API.


## How it works

Variable is generated based on the data in the DataLayer, current timestamp and random number:

For example:
```
Event ID: '1646750371301_16467595538826'
```

## How to set it up

The instructions for setting up **Facebook conversion API event deduplication** using this variable are described in [this blog post](https://stape.io/how-to-set-up-facebook-event-deduplication-in-google-tag-manager/).


## Open Source

Unique Event ID Variable for GTM is developed and maintained by [Stape Team](https://stape.io/) under the Apache 2.0 license.
