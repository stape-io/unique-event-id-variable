const copyFromDataLayer = require('copyFromDataLayer');
const setInWindow = require('setInWindow');
const copyFromWindow = require('copyFromWindow');
const getTimestampMillis = require('getTimestampMillis');
const generateRandom = require('generateRandom');
const localStorage = require('localStorage');

return getBrowserId() + '_' + getPageLoadId() + getGtmUniqueEventId();

function getGtmUniqueEventId() {
    return copyFromDataLayer('gtm.uniqueEventId') || '0';
}

function getBrowserId() {
    let gtmBrowserId = localStorage.getItem('gtmBrowserId');

    if (!gtmBrowserId) {
        gtmBrowserId = getTimestampMillis() + generateRandom(100000, 999999);
        localStorage.setItem('gtmBrowserId', gtmBrowserId);
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
