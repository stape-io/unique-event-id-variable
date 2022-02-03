const copyFromDataLayer = require('copyFromDataLayer');
const setInWindow = require('setInWindow');
const copyFromWindow = require('copyFromWindow');
const getTimestampMillis = require('getTimestampMillis');
const generateRandom = require('generateRandom');

return getGtmStart() + getPageLoadId() + '_' + getGtmUniqueEventId() + getEventName();


function getGtmStart() {
    let gtmStart = copyFromDataLayer('gtm.start');

    if (gtmStart) {
        return gtmStart + '_';
    }

    return '';
}

function getGtmUniqueEventId() {
    return copyFromDataLayer('gtm.uniqueEventId') || '0';
}

function getPageLoadId() {
  let eventId = copyFromWindow('gtmPageLoadId');

  if (!eventId) {
    eventId = getTimestampMillis() + generateRandom(100000, 999999);
    setInWindow('gtmPageLoadId', eventId, false);
  }

  return eventId;
}

function getEventName() {
    let eventName = copyFromDataLayer('event');

    if (eventName) {
        return '_' + eventName;
    }

    return '';
}
