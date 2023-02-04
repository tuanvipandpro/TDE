chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({ id: "ETD", title: "Export table as CSV", type: "normal", contexts: ["page"] });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  "use strict";
  if (item.menuItemId == "ETD") {
    chrome.tabs.executeScript(tab.id, { code: "dltcsvRightClick = true;", allFrames: true }, () => { chrome.tabs.executeScript(tab.id, { file: "downloadcsv.js", allFrames: true }); });
  }
});
