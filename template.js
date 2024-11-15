const copyFromDataLayer = require('copyFromDataLayer');
const setInWindow = require('setInWindow');
const copyFromWindow = require('copyFromWindow');
const getTimestampMillis = require('getTimestampMillis');
const generateRandom = require('generateRandom');


return getBrowserId() + '_' + getPageLoadId() + getGtmUniqueEventId();

function getGtmUniqueEventId() {
    let gtmId = copyFromDataLayer('gtm.uniqueEventId')  || 0;
    return gtmId >= 0 ? gtmId : '00';
}

function getBrowserId() {
    let gtmBrowserId =  copyFromWindow('gtmBrowserId');

    if (!gtmBrowserId) {
        gtmBrowserId = getTimestampMillis() + generateRandom(100000, 999999);
        setInWindow('gtmBrowserId', gtmBrowserId, false);
    }

    return gtmBrowserId;
}

function getPageLoadId() {
  let eventId = copyFromWindow('gtmPageLoadId');

  if (!eventId) {
    eventId = getTimestampMillis() + generateRandom(100000, 999999);
    setInWindow('gtmPageLoadId', eventId, false);
  }

  return eventId;
}
