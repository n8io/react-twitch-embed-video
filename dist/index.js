!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-twitch-embed-video"]=t():e["react-twitch-embed-video"]=t()}("undefined"!=typeof self?self:this,function(){return webpackJsonpreact_twitch_embed_video([1],[,,function(e,t,n){"use strict";function c(e){var t=e.width,n=e.height,c=e.targetId,o=e.targetClass,v=Object(i.useRef)(),h=Object(f.a)(e),j=Object(a.a)(h,2),m=j[0],p=j[1],O=Object(d.a)(m),y=Object(s.a)(m,e),E=Object(b.a)(m,e);return Object(i.useEffect)(function(){if(r.a.Twitch){var e=O(r.a.Twitch.Embed.VIDEO_PLAY,E),t=O(r.a.Twitch.Embed.VIDEO_READY,y);return function(){t(),e()}}},[y,O,E]),Object(i.useEffect)(function(){r.a.Twitch&&r.a.Twitch.Embed?p():Object(l.a)(p)},[p]),u.a.createElement("div",{ref:v,style:{width:t,height:n},className:o,id:c})}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"EMBED_URL",function(){return v});var a=n(1),i=n(0),u=n.n(i),o=n(3),r=n.n(o),f=n(10),d=n(13),s=n(14),b=n(15),l=n(16),v="https://embed.twitch.tv/embed/v1.js";c.defaultProps={targetId:"twitch-embed",width:"940",height:"480",autoplay:!0,muted:!1,onVideoPlay:function(){},onPlayerReady:function(){},onUserLogin:function(){}},t.default=c},,,,,,,,function(e,t,n){"use strict";function c(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),c=n[0],u=n[1];return[c,Object(r.useCallback)(function(){var t=new o.a.Twitch.Embed(e.targetId,Object(a.a)({},e));u(t)},[e])]}t.a=c;var a=n(11),i=n(1),u=n(3),o=n.n(u),r=n(0);n.n(r)},,,function(e,t,n){"use strict";function c(e){return Object(a.useCallback)(function(t,n){return e?(e.addEventListener(t,n),function(){e.removeEventListener(t,n)}):function(){}},[e])}t.a=c;var a=n(0);n.n(a)},function(e,t,n){"use strict";function c(e,t){var n=t.onPlayerReady,c=t.autoplay,i=t.muted;return Object(a.useCallback)(function(){if(e){var t=e.getPlayer();i?t.setVolume(0):t.setVolume(1),!1===c&&t.pause(),n&&n(t)}},[e,i,c,n])}t.a=c;var a=n(0);n.n(a)},function(e,t,n){"use strict";function c(e,t){var n=t.autoplay,c=t.onVideoPlay,u=Object(i.useState)(n),o=Object(a.a)(u,2),r=o[0],f=o[1];return Object(i.useCallback)(function(){if(r)f(!0),c();else{f(!0);e.getPlayer().pause()}},[r,f,c,e])}t.a=c;var a=n(1),i=n(0);n.n(i)},function(e,t,n){"use strict";function c(e){var t=document.createElement("script");t.setAttribute("src",a.EMBED_URL),t.addEventListener("load",e),document.body.appendChild(t)}t.a=c;var a=n(2)}],[2])});