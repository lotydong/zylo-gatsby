webpackJsonp([0x67ef26645b2ab800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/Users/joshn/Documents/github/zylo/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/Users/joshn/Documents/github/zylo/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/Users/joshn/Documents/github/zylo/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/Users/joshn/Documents/github/zylo/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/Users/joshn/Documents/github/zylo/node_modules/babel-preset-stage-0/lib/index.js","C:/Users/joshn/Documents/github/zylo/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),u=r(a),c=n("./src/layouts/index.js"),i=r(c),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),s=r(l);t.default=function(e){return u.default.createElement(i.default,o({},e,s.default))},e.exports=t.default},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=u.call(e),t=u.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=c(e),f=c(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),a=d.length-1;a>=0;a--)if(d[a]!=f[a])return!1;for(a=d.length-1;a>=0;a--)if(s=d[a],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var u=Array.prototype.slice,c=n("./node_modules/deep-equal/lib/keys.js"),i=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),d=r(s),f=n("./node_modules/prop-types/index.js"),p=r(f),T=n("./node_modules/react-side-effect/lib/index.js"),E=r(T),y=n("./node_modules/deep-equal/index.js"),m=r(y),A=n("./node_modules/react-helmet/lib/HelmetUtils.js"),M=n("./node_modules/react-helmet/lib/HelmetConstants.js"),h=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),u(this,t.apply(this,arguments))}return c(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case M.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return i({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[i({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(r.type){case M.TAG_NAMES.TITLE:return i({},o,(t={},t[r.type]=u,t.titleAttributes=i({},a),t));case M.TAG_NAMES.BODY:return i({},o,{bodyAttributes:i({},a)});case M.TAG_NAMES.HTML:return i({},o,{htmlAttributes:i({},a)})}return i({},o,(n={},n[r.type]=i({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=i({},t);return Object.keys(e).forEach(function(t){var r;n=i({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,u=a.children,c=o(a,["children"]),i=(0,A.convertReactPropstoHtmlAttributes)(c);switch(n.warnOnInvalidChildren(e,u),e.type){case M.TAG_NAMES.LINK:case M.TAG_NAMES.META:case M.TAG_NAMES.NOSCRIPT:case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:u});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:u})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=i({},r);return n&&(a=this.mapChildrenToProps(n,a)),d.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},g=(0,E.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(b),S=h(g);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n("./node_modules/react/react.js"),c=r(u),i=n("./node_modules/object-assign/index.js"),l=r(i),s=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],u=a.toLowerCase();if(e.indexOf(u)!==-1&&n[u])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],i=c.toLowerCase();t.indexOf(i)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||i===s.TAG_PROPERTIES.REL&&"stylesheet"===e[i].toLowerCase()||(n=i),t.indexOf(c)===-1||c!==s.TAG_PROPERTIES.INNER_HTML&&c!==s.TAG_PROPERTIES.CSS_TEXT&&c!==s.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),u=0;u<a.length;u++){var c=a[u],i=(0,l.default)({},r[c],o[c]);r[c]=i}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:y(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:y(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:y(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},M=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),h=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,S=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,i=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;g&&h(g),g=M(function(){j(s.TAG_NAMES.BODY,n),j(s.TAG_NAMES.HTML,r),_(d,f);var p={baseTag:v(s.TAG_NAMES.BASE,t),linkTags:v(s.TAG_NAMES.LINK,o),metaTags:v(s.TAG_NAMES.META,a),noscriptTags:v(s.TAG_NAMES.NOSCRIPT,u),scriptTags:v(s.TAG_NAMES.SCRIPT,i),styleTags:v(s.TAG_NAMES.STYLE,l)},T={},E={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=p[e].oldTags)}),g=null,c(e,T,E)})},_=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),j(s.TAG_NAMES.TITLE,t)},j=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),u=Object.keys(t),c=0;c<u.length;c++){var i=u[c],l=t[i]||"";n.getAttribute(i)!==l&&n.setAttribute(i,l),o.indexOf(i)===-1&&o.push(i);var d=a.indexOf(i);d!==-1&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==u.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,u.join(","))}},v=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],u=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return u=t,n.isEqualNode(e)})?o.splice(u,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=C(n);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+d(t,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+d(t,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",u=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(u?"/>":">"+a+"</"+e+">")},"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},w=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=O(n,o);return[c.default.createElement(s.TAG_NAMES.TITLE,a,t)]},P=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),c.default.createElement(e,o)})},R=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return w(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return P(e,t)},toString:function(){return N(e,t,n)}}}},x=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,u=e.metaTags,c=e.noscriptTags,i=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:R(s.TAG_NAMES.BASE,t,r),bodyAttributes:R(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(s.ATTRIBUTE_NAMES.HTML,o,r),link:R(s.TAG_NAMES.LINK,a,r),meta:R(s.TAG_NAMES.META,u,r),noscript:R(s.TAG_NAMES.NOSCRIPT,c,r),script:R(s.TAG_NAMES.SCRIPT,i,r),style:R(s.TAG_NAMES.STYLE,l,r),title:R(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=S,t.mapStateOnServer=x,t.reducePropsToState=A,t.requestIdleCallback=M,t.warn=b},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("./node_modules/react/react.js"),i=r(c),l=n("./node_modules/exenv/index.js"),s=r(l),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return i.default.createElement(l,this.props)},t}(c.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=s.default.canUseDOM,E}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),u=Object.keys(t);if(a.length!==u.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),i=0;i<a.length;i++){var l=a[i];if(!c(l))return!1;var s=e[l],d=t[l];if(o=n?n.call(r,s,d,l):void 0,o===!1||void 0===o&&s!==d)return!1}return!0}},"./src/assets/images/github-icon.svg":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTIgMEM1LjM3NCAwIDAgNS4zNzMgMCAxMmMwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNi4xMS43OTMtLjI2Ljc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wOS0uNzQ1LjA4My0uNzMuMDgzLS43MyAxLjIwNS4wODUgMS44NCAxLjIzOCAxLjg0IDEuMjM4IDEuMDcgMS44MzQgMi44MDYgMS4zMDQgMy40OS45OTcuMTA4LS43NzYuNDItMS4zMDYuNzYzLTEuNjA1LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MyAwLTEuMzEyLjQ3LTIuMzgyIDEuMjM2LTMuMjIyLS4xMjUtLjMwMy0uNTM2LTEuNTI0LjExNi0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMgMS4yM0ExMS41MSAxMS41MSAwIDAgMSAxMiA1LjgwM2MxLjAyLjAwNSAyLjA0Ny4xMzggMy4wMDYuNDA0IDIuMjktMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM2IDEuOTEgMS4yMzYgMy4yMiAwIDQuNjEtMi44MDcgNS42MjUtNS40OCA1LjkyMi40My4zNzIuODI0IDEuMTAyLjgyNCAyLjIyMnYzLjI5M2MwIC4zMi4xOTIuNjk0LjguNTc2QzIwLjU2NyAyMS43OTYgMjQgMTcuMyAyNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg0K"},"./src/assets/styles/reset.scss":function(e,t){},"./src/assets/styles/style.scss":function(e,t){},"./src/components/Hamburger.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),a=r(o),u=function(){return a.default.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 40 36.2",enableBackground:"new 0 0 40 36.2"},a.default.createElement("path",{fill:"#FFFFFF",d:"M20,11.2c-6,0-12.1,0-18.1,0c-0.2,0-0.4,0-0.6,0c-0.8-0.1-1.2-0.8-1-1.5c0.5-2,1.7-3.5,3.3-4.7\r c2.6-2.1,5.5-3.3,8.7-4c6.3-1.4,12.5-1.2,18.7,0.9c2.4,0.9,4.7,2.1,6.5,3.9c1,1,1.9,2.2,2.3,3.6c0.3,1.1-0.2,1.8-1.4,1.8\r C32.3,11.2,26.1,11.2,20,11.2z M7.7,6.3c-0.6,0-1.2,0.4-1.2,0.9C6.5,7.6,7,8,7.6,8.1c0.6,0,1.1-0.4,1.2-0.9\r C8.8,6.7,8.3,6.3,7.7,6.3z M32.6,6.3c-0.6,0-1.1,0.4-1.1,0.9c0,0.5,0.5,0.9,1.1,0.9c0.6,0,1.1-0.4,1.1-0.9\r C33.8,6.7,33.3,6.3,32.6,6.3z M20,8.1c0.6,0,1.1-0.4,1.1-0.9c0-0.5-0.5-0.9-1.1-0.9c-0.6,0-1.1,0.4-1.1,0.9\r C18.9,7.7,19.4,8.1,20,8.1z M13.9,4.5c0.7,0,1.3-0.5,1.1-1.1c-0.1-0.5-0.7-0.8-1.4-0.6c-0.5,0.1-0.9,0.5-0.9,0.9\r C12.8,4.1,13.3,4.5,13.9,4.5z M26.4,2.8c-0.6,0-1.1,0.4-1.1,0.9c0,0.5,0.5,0.9,1.1,0.9c0.6,0,1.1-0.4,1.1-0.9\r C27.5,3.1,27,2.8,26.4,2.8z"}),a.default.createElement("path",{fill:"#FFFFFF",d:"M20,28.8c6.2,0,12.3,0,18.5,0c1.1,0,1.5,0.4,1.5,1.5c0,0.7,0,1.4-0.1,2.1c-0.5,2.1-2.3,3.7-4.5,3.8\r c-2.2,0.1-4.5,0-6.7,0c-7.8,0-15.6,0-23.3,0c-2.7,0-4.7-1.6-5.2-4.1c-0.1-0.8-0.1-1.6-0.1-2.4c0-0.6,0.6-1,1.3-1\r c1.9,0,3.7,0,5.6,0C11.3,28.8,15.7,28.8,20,28.8z"}),a.default.createElement("path",{fill:"#FFFFFF",d:"M0,16.9c0.1-0.5,0.1-1,0.2-1.5c0.3-0.9,0.9-1.5,1.8-1.6c1-0.1,1.9-0.4,2.7-0.8c0.8-0.3,1.6-0.6,2.5-0.4\r c0.5,0.1,1.1,0.3,1.6,0.5c1.5,0.8,3,0.8,4.6,0c0.8-0.4,1.7-0.8,2.7-0.5c0.6,0.1,1.2,0.3,1.8,0.6c1.5,0.7,2.9,0.7,4.3,0\r c0.9-0.4,1.8-0.8,2.8-0.6c0.6,0.1,1.2,0.3,1.8,0.6c1.4,0.7,2.8,0.7,4.2,0c0.9-0.4,1.8-0.8,2.8-0.6c0.6,0.1,1.1,0.3,1.7,0.5\r c0.8,0.3,1.6,0.6,2.5,0.7c0.9,0,1.8,0.8,1.9,1.7c0.1,0.9,0.2,1.8,0,2.6c-0.2,1.4-1.4,2.1-2.8,1.8c-0.7-0.2-1.3-0.4-2-0.7\r c-1.2-0.5-2.4-0.6-3.5,0c-1.8,1-3.6,1-5.4,0c-1.1-0.6-2.3-0.5-3.4,0c-0.4,0.2-0.8,0.3-1.2,0.5c-1,0.4-2,0.4-3,0\r c-0.5-0.2-1-0.4-1.4-0.6c-1-0.4-2-0.4-3,0c-0.5,0.2-1,0.4-1.4,0.6c-1,0.4-2,0.4-3,0c-0.4-0.2-0.8-0.3-1.2-0.5\r c-1.1-0.5-2.3-0.5-3.4,0c-0.7,0.3-1.4,0.6-2.1,0.7c-1.5,0.4-2.8-0.6-2.9-2.1C0.1,17.4,0.1,17.2,0,16.9C0,16.9,0,16.9,0,16.9z"}),a.default.createElement("path",{fill:"#FFFFFF",d:"M20,27.4c-5.8,0-11.5,0-17.3,0c-1.7,0-2.7-1-2.7-2.7c0-0.4,0-0.7,0-1.1c0.1-1.3,1.1-2.3,2.4-2.3\r c0.2,0,0.5,0.1,0.7,0.2c1.3,1,2.7,2,4,3.1c0.7,0.5,1.1,0.5,1.8,0c1.3-1,2.5-1.9,3.7-2.9c0.8-0.6,2-0.6,2.7,0\r c1.3,1,2.5,1.9,3.7,2.9c0.7,0.6,1.2,0.6,1.9,0c1.3-1,2.5-1.9,3.7-2.9c0.7-0.6,2-0.6,2.7,0c1.2,1,2.5,1.9,3.7,2.9\r c0.8,0.6,1.2,0.6,2,0c1.3-1,2.6-2,3.9-3c0.3-0.2,0.6-0.3,0.9-0.2c1.2,0.3,2,1.2,2,2.4c0,0.3,0,0.7,0,1c0,1.6-1,2.6-2.6,2.6\r c-4,0-8,0-12,0C23.6,27.4,21.8,27.4,20,27.4z"}))};t.default=u,e.exports=t.default},"./src/components/Header.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n("./node_modules/react/react.js"),i=r(c),l=n("./node_modules/gatsby-link/index.js"),s=r(l),d=n("./src/components/Logo.js"),f=r(d),p=n("./src/components/Hamburger.js"),T=r(p),E=n("./src/assets/images/github-icon.svg"),y=r(E),m=function(e){function t(){o(this,t);var n=a(this,e.call(this));return n.WidthChange=function(e){e.matches&&n.setState({toggleMenu:!1})},n.state={menuToggled:!1},n.toggleMenu=n.toggleMenu.bind(n),n}return u(t,e),t.prototype.componentWillMount=function(){if("undefined"!=typeof window&&window.matchMedia){var e=window.matchMedia("(min-width: 50em)");e.addListener(this.WidthChange),this.WidthChange(e)}},t.prototype.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},t.prototype.render=function(){var e=this.state.menuToggled;return i.default.createElement("nav",{className:"main-navigation"},i.default.createElement("h1",{style:{margin:0}},i.default.createElement(s.default,{to:"/"},i.default.createElement(f.default,null))),i.default.createElement("div",{className:"mobile-collapse "+(e?"open":"")},i.default.createElement(s.default,{to:"/about/",onClick:this.toggleMenu},"About"),i.default.createElement(s.default,{to:"/projects/",onClick:this.toggleMenu},"Projects"),i.default.createElement(s.default,{to:"/contact/",onClick:this.toggleMenu},"Contact"),i.default.createElement("a",{href:"https://github.com/8ctopotamus",target:"_blank",title:"Zylo Github"},i.default.createElement("img",{className:"github-icon",src:y.default,alt:"Github icon"}))),i.default.createElement("div",{className:"hamburger",onClick:this.toggleMenu},i.default.createElement(T.default,null)))},t}(i.default.Component);t.default=m,e.exports=t.default},"./src/components/Logo.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),a=r(o);t.default=function(){return a.default.createElement("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 199.9 165.2",style:{enableBackground:"new 0 0 199.9 165.2"},xmlSpace:"preserve"},a.default.createElement("g",null,a.default.createElement("path",{fill:"#BEC5CC",d:"M88.3,132.2v-6.4h28.6v6.9l-19.2,14.9h19.2v6.4H88.3v-6.9l19.2-14.9H88.3z"}),a.default.createElement("path",{fill:"#BEC5CC",d:"M150.3,158.5c0,1.8-0.6,3.4-1.9,4.7c-1.3,1.3-2.9,2-4.7,2h-17.2v-6.4h17.2c0.2,0,0.3-0.1,0.3-0.3V154h-15.5\r c-1.8,0-3.4-0.7-4.7-2c-1.3-1.3-2-2.9-2-4.7v-21.4h6.4v21.4c0,0.2,0.1,0.3,0.3,0.3h15.3c0.2,0,0.3-0.1,0.3-0.3v-21.4h6.4V158.5z"}),a.default.createElement("path",{fill:"#BEC5CC",d:"M154.7,116.6h6.4v30.7c0,0.2,0.1,0.3,0.3,0.3h5.7v6.4h-5.7c-1.8,0-3.4-0.7-4.7-2s-2-2.9-2-4.7V116.6z"}),a.default.createElement("path",{fill:"#BEC5CC",d:"M178,125.8h15.2c1.8,0,3.4,0.7,4.7,2s2,2.9,2,4.7v14.8c0,1.8-0.7,3.4-2,4.7s-2.9,2-4.7,2H178\r c-1.8,0-3.4-0.7-4.7-2s-2-2.9-2-4.7v-14.8c0-1.8,0.7-3.4,2-4.7S176.2,125.8,178,125.8z M193.2,132.2H178c-0.2,0-0.3,0.1-0.3,0.3\r v14.8c0,0.2,0.1,0.3,0.3,0.3h15.2c0.2,0,0.3-0.1,0.3-0.3v-14.8C193.6,132.3,193.5,132.2,193.2,132.2z"})),a.default.createElement("polygon",{fill:"#DAE1EA",points:"88.1,0 88.1,28.1 136.5,56.1 166.4,45.1 "}),a.default.createElement("polygon",{fill:"#DAE1EA",points:"78.1,41.3 0,86.4 29.5,97.4 78.1,69.5 "}),a.default.createElement("polygon",{fill:"#F5F6F7",points:"78.2,41.4 0,86.5 0,92.9 "}),a.default.createElement("polygon",{fill:"#F5F6F7",points:"88.1,0.1 166.3,45.2 166,51.5 "}),a.default.createElement("polygon",{fill:"#DAE1EA",points:"0,86.4 0,108.4 78.1,153.9 78.1,125.5 29.5,97.4 29.5,97.4 0,86.4 "}),a.default.createElement("polygon",{fill:"#DAE1EA",points:"136.5,56.1 136.5,56.1 88.1,84.2 88.1,112.5 166.4,67.1 166.4,45.1 166.4,45.1 "}),a.default.createElement("polygon",{fill:"#BEC5CC",points:"78.1,125.5 5.3,83.4 0,86.4 "}),a.default.createElement("polygon",{fill:"#BEC5CC",points:"88.2,84.3 161,42.1 166.3,45.1 "}),a.default.createElement("text",{style:{display:"none"}},"Zylo"))},e.exports=t.default},"./src/layouts/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),a=r(o),u=n("./node_modules/prop-types/index.js"),c=r(u),i=n("./node_modules/gatsby-link/index.js"),l=(r(i),n("./node_modules/react-helmet/lib/Helmet.js")),s=r(l),d=n("./src/components/Header.js"),f=r(d);n("./src/assets/styles/reset.scss"),n("./src/assets/styles/style.scss");var p=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement(s.default,{title:"Zylo | Web Development",meta:[{name:"description",content:"Web Development"},{name:"keywords",content:"web, web development, graphic design, app development, programming"}]}),a.default.createElement(f.default,null),a.default.createElement("div",{className:"content"},t()))};p.propTypes={children:c.default.func},t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-f36ffa95aee670a9ecb1.js.map