function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r=document.querySelectorAll("span.population"),e=document.querySelector("span.average-population"),n=document.querySelector("span.total-population"),o=((function(r){if(Array.isArray(r))return t(r)})(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce(function(t,r){return t+ +r.textContent.split(",").join("")},0),a=(o/r.length).toLocaleString("en-US");e.textContent=a,n.textContent=o.toLocaleString("en-US");
//# sourceMappingURL=index.a1e92a18.js.map
