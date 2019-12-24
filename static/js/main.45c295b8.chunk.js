(this["webpackJsonpchuck-norris-facts"]=this["webpackJsonpchuck-norris-facts"]||[]).push([[1],{16:function(n,t,e){"use strict";var r=e(29),a=e(2),o=e(0),i=e.n(o),c=e(3);function u(){var n=Object(a.a)(["\n        margin-bottom: ","px;\n      "]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n        font-weight: ",";\n      "]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\n  &.typography-h1 {\n    font-size: 2rem;\n    font-weight: 700;\n  }\n  &.typography-h2 {\n    font-size: 1.75rem;\n    font-weight: 700;\n  }\n  &.typography-h3 {\n    font-size: 1.5rem;\n    font-weight: 700;\n  }\n  &.typography-h4 {\n    font-size: 1.25rem;\n    font-weight: 700;\n  }\n  &.typography-h5 {\n    font-size: 1.125rem;\n    font-weight: 700;\n  }\n  &.typography-h6 {\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  &.typography-body1 {\n    font-size: 1rem;\n    font-weight: 300;\n  }\n  &.typography-body2 {\n    font-size: 0.75rem;\n    font-weight: 300;\n  }\n\n  margin-bottom: 0;\n  margin-top: 0;\n\n  && {\n    color: ",";\n    ",";\n    ",";\n    text-align: ",";\n  }\n"]);return s=function(){return n},n}var h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",caption:"span"},f=c.b.div(s(),(function(n){return n.color}),(function(n){return n.weight&&Object(c.a)(l(),n.weight)}),(function(n){return n.bottomSpacing&&Object(c.a)(u(),n.bottomSpacing)}),(function(n){return n.align})),m=function(n){var t=n.variant,e=n.children,a=n.className,o=Object(r.a)(n,["variant","children","className"]);return i.a.createElement(f,Object.assign({},o,{as:h[t],className:"typography-".concat(t," ").concat(a)}),e)};m.defaultProps={variant:"body1",color:"black",align:"left",className:""},t.a=m},17:function(n,t,e){"use strict";var r=e(19),a=e(2),o=e(0),i=e.n(o);function c(){var n=Object(a.a)(["\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n  text-align: center;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return c=function(){return n},n}var u=e(3).b.div(c());t.a=function(n){var t=n.text,e=Object(o.useState)(t),a=Object(r.a)(e,2),c=a[0],l=a[1],s=Object(o.useRef)(0);return Object(o.useEffect)((function(){var n=setInterval((function(){l(function(n,t){var e;return e=0===n?".":1===n?"..":"...","".concat(t).concat(e)}(s.current,t)),s.current=(s.current+1)%3}),200);return function(){return clearInterval(n)}}),[c,t]),i.a.createElement(u,null,c)}},20:function(n,t,e){"use strict";var r=e(24),a=e(25),o=e(30),i=e(21),c=e(27),u=e(2),l=e(0),s=e.n(l);function h(){var n=Object(u.a)(["\n  color: red;\n  text-align: center;\n"]);return h=function(){return n},n}var f=e(3).b.p(h()),m=function(n){function t(n){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this,n))).state={hasError:!1},e}return Object(c.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return this.state.hasError?s.a.createElement(f,null,"Loading failed! Please reload."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0}}}]),t}(s.a.Component);t.a=m},35:function(n,t,e){n.exports=e.p+"static/media/chuck_norris_PNG1.edea891d.png"},39:function(n,t,e){n.exports=e(50)},44:function(n,t,e){},50:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(31),i=e.n(o);e(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=e(18),u=e(7),l=e(20),s=e(17),h=Object(r.lazy)((function(){return e.e(4).then(e.bind(null,82))})),f=function(){return a.a.createElement(c.a,null,a.a.createElement(l.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(s.a,{text:"Suspense loading"})},a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",render:function(n){return a.a.createElement(h,n)}})))))},m=e(2),g=e(3),p=e(35),d=e.n(p),b=e(16);function v(){var n=Object(m.a)(["\n    && {\n      font-size: 2rem;\n      @media only screen and (min-width: 960px) {\n        font-size: 4rem;\n      }\n    }\n    font-style: italic;\n  "]);return v=function(){return n},n}function y(){var n=Object(m.a)(["\n    height: 100px;\n    width: 100px;\n    padding: 4px;\n    margin: 0 auto;\n    background: radial-gradient(yellow, transparent);\n    border-radius: 50%;\n    @media only screen and (min-width: 960px) {\n      height: 200px;\n      width: 200px;\n      padding: 20px;\n    }\n    img {\n      height: 100%;\n      width: auto;\n    }\n  "]);return y=function(){return n},n}function w(){var n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-bottom: 32px;\n  "]);return w=function(){return n},n}var x={Root:g.b.div(w()),Image:g.b.div(y()),Text:Object(g.b)(b.a)(v())};var j=function(){return a.a.createElement(x.Root,null,a.a.createElement(x.Image,null,a.a.createElement("img",{src:d.a,alt:"Image with Chuck Norris head"})),a.a.createElement(x.Text,{variant:"h1",color:"white",align:"center"},"Chuck Norris Facts"))};function E(){var n=Object(m.a)(["\n  padding: 16px;\n  background-color: sandybrown;\n  font-family: Roboto;\n  * {\n    box-sizing: border-box;\n  }\n"]);return E=function(){return n},n}var O=g.b.main(E());var k=function(n){var t=n.children;return a.a.createElement(O,null,a.a.createElement(j,null),t)},z=function(){return a.a.createElement(k,null,a.a.createElement(f,null))};i.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[39,2,3]]]);
//# sourceMappingURL=main.45c295b8.chunk.js.map