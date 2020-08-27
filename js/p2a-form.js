(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = '//p2a.co/js/embed/widget/advocacywidget.min.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'advocacy-actionwidget-code')),


  window.addEventListener('message', function(e) {
    if (e.data.hasOwnProperty("scrollUp")) {
      scrollUp(e.data.scrollUp);
    }
    if (e.data.hasOwnProperty("styleChange")) {
      p2aWidgetStyleChanges(e.data.styleChange);
    }
    if (e.data.hasOwnProperty("appendStyles")) {
      p2aAppendStyleTag(e.data.appendStyles);
    }
    if (e.data.hasOwnProperty("redirectTo")) {
      p2aRedirectTo(e.data.redirectTo);
    }
  });

function scrollUp(selector) {
  document.querySelector(selector).scrollIntoView();
}

function p2aWidgetStyleChanges(styleChanges) {
  if (!typeof styleChanges === "object") return;
  for (let i = 0; i < styleChanges.length; i++) {
    var styleChange = styleChanges[i];
    if (!styleChange.hasOwnProperty("selector")) return;
    if (!styleChange.hasOwnProperty("property")) return;
    if (!styleChange.hasOwnProperty("value")) return;
    var selector = styleChange.selector;
    var property = styleChange.property;
    var value = styleChange.value;

    document.querySelector(selector).style[property] = value;
  }
}

function p2aAppendStyleTag(css) {
  var head = document.head;
  var style_tag = document.createElement('style');

  head.appendChild(style_tag);

  style_tag.type = 'text/css';
  if (style_tag.styleSheet) {
    style_tag.styleSheet.cssText = css;
  } else {
    style_tag.appendChild(document.createTextNode(css));
  }
}

function p2aRedirectTo(url) {
  window.location.href = url;
}