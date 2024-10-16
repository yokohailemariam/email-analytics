const isDev = process.env.NODE_ENV === "development";
chrome.action.onClicked.addListener(() => {
  const url = isDev ? "http://localhost:5173" : "index.html";
  chrome.tabs.create({ url });
});
