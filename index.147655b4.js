// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kAaS7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "e80cae8e147655b4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i87aF":[function(require,module,exports) {
var _structsJs = require("./structs.js");
var _explorerJs = require("./explorer.js");
var PNGReader = require('./pngjs/PNGReader.js');
var JSZip = require('jszip');
var reader = new FileReader();
reader.onload = function(event) {
    var bytes = event.target.result;
    var pngReader = new PNGReader(bytes);
    pngReader.parse(function(err, png, state) {
        if (err) throw err;
        console.log('image is <' + png.width + ',' + png.height + '>');
        console.log(png);
        console.log(state);
        parseState(state);
        drawOnCanvas(png);
    });
};
var xhr, e, pngReader, err, png, state;
var file = document.getElementById('file');
file.onchange = function(event) {
    if (file.files.length > 0) {
        if (file.files[0].name.endsWith('.State')) {
            // BizHawk zip file
            var zip = new JSZip();
            zip.loadAsync(file.files[0]).then(function(zip1) {
                if (false in zip1.files) console.error('No Core.bin in save state. Not a BizHawk save?');
                else zip1.file('Core.bin').async('uint8array').then(function(state1) {
                    // Remove the int describing how long the state is
                    parseState(state1.slice(4));
                });
                if (false in zip1.files) console.error('Missing screenshot in save state');
                else zip1.file('Framebuffer.bmp').async('blob').then(function(bmp) {
                    drawBmp(bmp);
                });
            });
        } else // mGBA png file
        reader.readAsArrayBuffer(file.files[0]);
    }
};
var drawOnCanvas = function(png1) {
    var canvas = document.getElementById('screenshot');
    var ctx = canvas.getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    var i = 0;
    var width = Math.min(png1.width, canvasWidth);
    var height = Math.min(png1.height, canvasHeight);
    for(var y = 0; y < height; y++){
        for(var x = 0; x < width; x++){
            var colors = png1.getPixel(x, y);
            canvasData.data[i++] = colors[0];
            canvasData.data[i++] = colors[1];
            canvasData.data[i++] = colors[2];
            canvasData.data[i++] = colors[3];
        }
        // move index to the next line
        var d = canvasWidth - width;
        if (d > 0) i += d * 4;
    }
    ctx.putImageData(canvasData, 0, 0);
};
var drawBmp = function(bmp) {
    var canvas = document.getElementById('screenshot');
    var ctx = canvas.getContext('2d');
    createImageBitmap(bmp).then((img)=>{
        ctx.drawImage(img, 0, 0);
    });
};
var globals = {
};
var parseState = function(state1) {
    //    0x19000 - 0x20FFF: IWRAM (0x03XXXXXX address space)
    //    0x21000 - 0x60FFF: WRAM (0x02XXXXXX address space)
    let dv = new DataView(state1.buffer);
    var getAddr = function(type, addr) {
        if (type == 3) addr += 102400;
        else if (type == 2) addr += 135168;
        return addr;
    };
    var convAddr = function(addr) {
        if (addr >= 50331648 && addr < 67108864) addr += -50229248;
        else if (addr >= 33554432 && addr < 50331648) addr += -33419264;
        else console.error('Not mapped: ' + addr);
        return addr;
    };
    class Reader {
        constructor(addr){
            this.cursor = convAddr(addr);
            this.bitfield = 0;
            this.bitfieldRemaining = 0;
        }
    }
    var readU8 = function(type, addr1, name) {
        console.log(name + ': ' + state1[getAddr(type, addr1)]);
    };
    var readU16 = function(type, addr1, name) {
        console.log(name + ': ' + dv.getUint16(getAddr(type, addr1), true));
    };
    var readStruct = function(reader1, struct) {
        let res = {
        };
        //console.log(struct);
        for(let key in struct)//console.log(key);
        res[key] = readVar(reader1, struct[key]);
        return res;
    };
    var readArray = function(reader1, type, length) {
        let arr = [];
        for(let i = 0; i < length; i++)arr.push(readVar(reader1, type));
        return arr;
    };
    var readUnion = function(reader1, union) {
        let res = {
        };
        let cursor = reader1.cursor;
        for(let key in union){
            reader1.cursor = cursor;
            res[key] = readVar(reader1, union[key]);
        }
        return res;
    };
    var readPointer = function(reader1, type) {
        let addr1 = readVar(reader1, 'u32');
        return {
            'addr': addr1,
            'text': '(' + type + ') 0x' + addr1.toString(16)
        };
    };
    var readBitfield = function(reader1, length) {
        //console.log('> u' + length)
        if (reader1.bitfieldRemaining == 0) {
            // Read the next byte
            //console.log('Read byte');
            reader1.bitfield = readVar(reader1, 'u8');
            reader1.bitfieldRemaining = 8;
        }
        if (reader1.bitfieldRemaining < length) {
            console.error(`Not enough bytes in bitfield remaining. Need ${length}, got ${reader1.bitfieldRemaining}`);
            return;
        }
        reader1.bitfieldRemaining -= length;
        let val = reader1.bitfield & 2 ** length - 1;
        //console.log(reader.bitfield);
        reader1.bitfield >>= length;
        //console.log(reader.bitfield);
        return val;
    // TODO somehow handle that all bits of the bytes need to be taken up by the bitfield?
    };
    var readVar = function(reader1, type) {
        if (typeof type === 'object') switch(type['type']){
            case 'union':
                return readUnion(reader1, type['members']);
            case 'struct':
                return readStruct(reader1, type['members']);
            default:
                console.error(`Unknown type ${type['type']}`);
        }
        if (type.includes('*')) return readPointer(reader1, type);
        if (type.includes('[')) {
            // Array
            let arr = type.split('[');
            type = arr[0];
            length = parseInt(arr[1].substring(0, arr[1].length - 1));
            return readArray(reader1, type, length);
        }
        switch(type){
            case 'u8':
                {
                    let val = dv.getUint8(reader1.cursor, true);
                    reader1.cursor += 1;
                    return val;
                }
            case 's8':
                {
                    let val = dv.getInt8(reader1.cursor, true);
                    reader1.cursor += 1;
                    return val;
                }
            case 'u16':
                {
                    let val = dv.getUint16(reader1.cursor, true);
                    reader1.cursor += 2;
                    return val;
                }
            case 's16':
                {
                    let val = dv.getInt16(reader1.cursor, true);
                    reader1.cursor += 2;
                    return val;
                }
            case 'u32':
                {
                    let val = dv.getUint32(reader1.cursor, true);
                    reader1.cursor += 4;
                    return val;
                }
            case 's32':
                {
                    let val = dv.getInt32(reader1.cursor, true);
                    reader1.cursor += 4;
                    return val;
                }
            // Bitfield types
            case 'u1':
            case 'u2':
            case 'u3':
            case 'u4':
            case 'u5':
            case 'u6':
            case 'u7':
                return readBitfield(reader1, parseInt(type.substring(1)));
            default:
                if (type in _structsJs.structs) return readStruct(reader1, _structsJs.structs[type]);
                else if (type in _structsJs.unions) return readUnion(reader1, _structsJs.unions[type]);
                else console.error(`Unknown type ${type}`);
        }
    };
    var printVar = function(addr1, name, type) {
        let value = readVar(new Reader(addr1), type);
        globals[name] = value;
        console.log(name + ' >>> ', value);
    };
    readU8(3, 15804, 'gEntCount');
    readU8(2, 10984, 'gStats.walletType');
    readU8(2, 10985, 'gStats.heartPieces');
    readU8(2, 10986, 'gStats.health');
    readU8(2, 10987, 'gStats.maxHealth');
    readU16(2, 11008, 'gStats.rupees');
    printVar(50347452, 'gEntCount', 'u8');
    printVar(33565416, 'gStats', 'Stats');
    printVar(50334704, 'gRoomControls', 'RoomControls');
    printVar(50347376, 'gEntityLists', 'LinkedList[9]');
    let listAddr = 50347376;
    let entityLists = globals['gEntityLists'];
    let lists = [];
    for(let i = 0; i < entityLists.length; i++){
        lists.push([]);
        let first = entityLists[i].first.addr;
        if (first != 0 && first != listAddr + 8 * i) {
            // There are elements in this list
            let next = first;
            do {
                let entity;
                let kind = dv.getUint8(convAddr(next + 8));
                if (kind == 9) entity = readVar(new Reader(next), 'Manager');
                else entity = readVar(new Reader(next), 'Entity');
                lists[i].push(entity);
                next = entity.next.addr;
            }while (next != listAddr + 8 * i)
        }
    }
    console.log(lists);
    _explorerJs.showLists(globals['gRoomControls'], lists);
};
// Set up tabs
let activeTab = 'explorer';
function switchTab(target) {
    console.log(target);
    let buttons = document.getElementsByClassName('tabbutton');
    for(let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        if (button.id != 'tabb-' + target) button.classList.remove('active');
        else button.classList.add('active');
    }
    document.getElementById(activeTab).classList.remove('active');
    document.getElementById(target).classList.add('active');
    activeTab = target;
}
function setUpTabs() {
    let buttons = document.getElementsByClassName('tabbutton');
    for(let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        console.log(button);
        if (!button.id.startsWith('tabb-')) console.error(`Invalid tab button id: ${button.id}`);
        let target = button.id.substring(5);
        button.onclick = ()=>{
            switchTab(target);
        };
    }
}
setUpTabs();

},{"./pngjs/PNGReader.js":"9Q0Cr","./structs.js":"chnWa","./explorer.js":"847CC","jszip":"mnHCj"}],"9Q0Cr":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/*global Uint8Array:true ArrayBuffer:true */ "use strict";
var zlib = require('zlib');
var PNG = require('./PNG');
var inflate = function(data, callback) {
    return zlib.inflate(new Buffer(data), callback);
};
var slice = Array.prototype.slice;
var toString = Object.prototype.toString;
function equalBytes(a, b) {
    if (a.length != b.length) return false;
    for(var l = a.length; l--;)if (a[l] != b[l]) return false;
    return true;
}
function readUInt32(buffer, offset) {
    return (buffer[offset] << 24) + (buffer[offset + 1] << 16) + (buffer[offset + 2] << 8) + (buffer[offset + 3] << 0);
}
function readUInt16(buffer, offset) {
    return (buffer[offset + 1] << 8) + (buffer[offset] << 0);
}
function readUInt8(buffer, offset) {
    return buffer[offset] << 0;
}
function bufferToString(buffer) {
    var str = '';
    for(var i = 0; i < buffer.length; i++)str += String.fromCharCode(buffer[i]);
    return str;
}
var PNGReader = function(bytes) {
    if (typeof bytes == 'string') {
        var bts = bytes;
        bytes = new Array(bts.length);
        for(var i = 0, l = bts.length; i < l; i++)bytes[i] = bts[i].charCodeAt(0);
    } else {
        var type = toString.call(bytes).slice(8, -1);
        if (type == 'ArrayBuffer') bytes = new Uint8Array(bytes);
    }
    // current pointer
    this.i = 0;
    // bytes buffer
    this.bytes = bytes;
    // Output object
    this.png = new PNG();
    this.dataChunks = [];
    this.stateChunk = null;
    this.state = null;
};
PNGReader.prototype.readBytes = function(length) {
    var end = this.i + length;
    if (end > this.bytes.length) throw new Error('Unexpectedly reached end of file');
    var bytes = slice.call(this.bytes, this.i, end);
    this.i = end;
    return bytes;
};
/**
 * http://www.w3.org/TR/2003/REC-PNG-20031110/#5PNG-file-signature
 */ PNGReader.prototype.decodeHeader = function() {
    if (this.i !== 0) throw new Error('file pointer should be at 0 to read the header');
    var header = this.readBytes(8);
    if (!equalBytes(header, [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ])) throw new Error('invalid PNGReader file (bad signature)');
    this.header = header;
};
/**
 * http://www.w3.org/TR/2003/REC-PNG-20031110/#5Chunk-layout
 *
 * length =  4      bytes
 * type   =  4      bytes (IHDR, PLTE, IDAT, IEND or others)
 * chunk  =  length bytes
 * crc    =  4      bytes
 */ PNGReader.prototype.decodeChunk = function() {
    var length = readUInt32(this.readBytes(4), 0);
    if (length < 0) throw new Error('Bad chunk length ' + (4294967295 & length));
    var type = bufferToString(this.readBytes(4));
    var chunk = this.readBytes(length);
    var crc = this.readBytes(4);
    switch(type){
        case 'IHDR':
            this.decodeIHDR(chunk);
            break;
        case 'PLTE':
            this.decodePLTE(chunk);
            break;
        case 'IDAT':
            this.decodeIDAT(chunk);
            break;
        case 'tRNS':
            this.decodeTRNS(chunk);
            break;
        case 'IEND':
            this.decodeIEND(chunk);
            break;
        // Custom handlers for mGBA data
        case 'gbAs':
            this.decodegbAs(chunk);
            break;
        case 'gbAx':
            this.decodegbAx(chunk);
            break;
    }
    return type;
};
/**
 * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IHDR
 * http://www.libpng.org/pub/png/spec/1.2/png-1.2-pdg.html#C.IHDR
 *
 * Width               4 bytes
 * Height              4 bytes
 * Bit depth           1 byte
 * Colour type         1 byte
 * Compression method  1 byte
 * Filter method       1 byte
 * Interlace method    1 byte
 */ PNGReader.prototype.decodeIHDR = function(chunk) {
    var png = this.png;
    png.setWidth(readUInt32(chunk, 0));
    png.setHeight(readUInt32(chunk, 4));
    png.setBitDepth(readUInt8(chunk, 8));
    png.setColorType(readUInt8(chunk, 9));
    png.setCompressionMethod(readUInt8(chunk, 10));
    png.setFilterMethod(readUInt8(chunk, 11));
    png.setInterlaceMethod(readUInt8(chunk, 12));
};
/**
 *
 * http://www.w3.org/TR/PNG/#11PLTE
 */ PNGReader.prototype.decodePLTE = function(chunk) {
    this.png.setPalette(chunk);
};
/**
 * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IDAT
 */ PNGReader.prototype.decodeIDAT = function(chunk) {
    // multiple IDAT chunks will concatenated
    this.dataChunks.push(chunk);
};
/**
 * https://www.w3.org/TR/PNG/#11tRNS
 */ PNGReader.prototype.decodeTRNS = function(chunk) {
    this.png.setTRNS(chunk);
};
/**
 * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IEND
 */ PNGReader.prototype.decodeIEND = function() {
};
PNGReader.prototype.decodegbAs = function(chunk) {
    this.stateChunk = chunk;
};
PNGReader.prototype.decodegbAx = function(chunk) {
// Ignore extra data for now.
};
/**
 * Uncompress IDAT chunks
 */ PNGReader.prototype.decodePixels = function(callback) {
    var png = this.png;
    var reader = this;
    var length = 0;
    var i, j, k, l;
    for(l = this.dataChunks.length; l--;)length += this.dataChunks[l].length;
    var data = new Buffer(length);
    for(i = 0, k = 0, l = this.dataChunks.length; i < l; i++){
        var chunk = this.dataChunks[i];
        for(j = 0; j < chunk.length; j++)data[k++] = chunk[j];
    }
    inflate(data, function(err, data1) {
        if (err) return callback(err);
        try {
            if (png.getInterlaceMethod() === 0) reader.interlaceNone(data1);
            else reader.interlaceAdam7(data1);
        } catch (e) {
            return callback(e);
        }
        callback();
    });
};
PNGReader.prototype.decodeState = function(callback) {
    if (this.stateChunk == null) {
        callback('Could not find state chunk in PNG. Is this a save state exported from mGBA?');
        return;
    }
    var reader = this;
    inflate(this.stateChunk, function(err, data) {
        if (err) return callback(err);
        reader.state = data;
        callback();
    });
};
// Different interlace methods
PNGReader.prototype.interlaceNone = function(data) {
    var png = this.png;
    // bytes per pixel
    var bpp = Math.max(1, png.colors * png.bitDepth / 8);
    // color bytes per row
    var cpr = bpp * png.width;
    var pixels = new Buffer(bpp * png.width * png.height);
    var scanline;
    var offset = 0;
    for(var i = 0; i < data.length; i += cpr + 1){
        scanline = slice.call(data, i + 1, i + cpr + 1);
        switch(readUInt8(data, i)){
            case 0:
                this.unFilterNone(scanline, pixels, bpp, offset, cpr);
                break;
            case 1:
                this.unFilterSub(scanline, pixels, bpp, offset, cpr);
                break;
            case 2:
                this.unFilterUp(scanline, pixels, bpp, offset, cpr);
                break;
            case 3:
                this.unFilterAverage(scanline, pixels, bpp, offset, cpr);
                break;
            case 4:
                this.unFilterPaeth(scanline, pixels, bpp, offset, cpr);
                break;
            default:
                throw new Error("unkown filtered scanline");
        }
        offset += cpr;
    }
    png.pixels = pixels;
};
PNGReader.prototype.interlaceAdam7 = function(data) {
    throw new Error("Adam7 interlacing is not implemented yet");
};
// Unfiltering
/**
 * No filtering, direct copy
 */ PNGReader.prototype.unFilterNone = function(scanline, pixels, bpp, of, length) {
    for(var i = 0, to = length; i < to; i++)pixels[of + i] = scanline[i];
};
/**
 * The Sub() filter transmits the difference between each byte and the value
 * of the corresponding byte of the prior pixel.
 * Sub(x) = Raw(x) + Raw(x - bpp)
 */ PNGReader.prototype.unFilterSub = function(scanline, pixels, bpp, of, length) {
    var i = 0;
    for(; i < bpp; i++)pixels[of + i] = scanline[i];
    for(; i < length; i++)// Raw(x) + Raw(x - bpp)
    pixels[of + i] = scanline[i] + pixels[of + i - bpp] & 255;
};
/**
 * The Up() filter is just like the Sub() filter except that the pixel
 * immediately above the current pixel, rather than just to its left, is used
 * as the predictor.
 * Up(x) = Raw(x) + Prior(x)
 */ PNGReader.prototype.unFilterUp = function(scanline, pixels, bpp, of, length) {
    var i = 0, byte, prev;
    // Prior(x) is 0 for all x on the first scanline
    if (of - length < 0) for(; i < length; i++)pixels[of + i] = scanline[i];
    else for(; i < length; i++){
        // Raw(x)
        byte = scanline[i];
        // Prior(x)
        prev = pixels[of + i - length];
        pixels[of + i] = byte + prev & 255;
    }
};
/**
 * The Average() filter uses the average of the two neighboring pixels (left
 * and above) to predict the value of a pixel.
 * Average(x) = Raw(x) + floor((Raw(x-bpp)+Prior(x))/2)
 */ PNGReader.prototype.unFilterAverage = function(scanline, pixels, bpp, of, length) {
    var i = 0, byte, prev, prior;
    if (of - length < 0) {
        // Prior(x) == 0 && Raw(x - bpp) == 0
        for(; i < bpp; i++)pixels[of + i] = scanline[i];
        // Prior(x) == 0 && Raw(x - bpp) != 0 (right shift, prevent doubles)
        for(; i < length; i++)pixels[of + i] = scanline[i] + (pixels[of + i - bpp] >> 1) & 255;
    } else {
        // Prior(x) != 0 && Raw(x - bpp) == 0
        for(; i < bpp; i++)pixels[of + i] = scanline[i] + (pixels[of - length + i] >> 1) & 255;
        // Prior(x) != 0 && Raw(x - bpp) != 0
        for(; i < length; i++){
            byte = scanline[i];
            prev = pixels[of + i - bpp];
            prior = pixels[of + i - length];
            pixels[of + i] = byte + (prev + prior >> 1) & 255;
        }
    }
};
/**
 * The Paeth() filter computes a simple linear function of the three
 * neighboring pixels (left, above, upper left), then chooses as predictor
 * the neighboring pixel closest to the computed value. This technique is due
 * to Alan W. Paeth.
 * Paeth(x) = Raw(x) +
 *            PaethPredictor(Raw(x-bpp), Prior(x), Prior(x-bpp))
 *  function PaethPredictor (a, b, c)
 *  begin
 *       ; a = left, b = above, c = upper left
 *       p := a + b - c        ; initial estimate
 *       pa := abs(p - a)      ; distances to a, b, c
 *       pb := abs(p - b)
 *       pc := abs(p - c)
 *       ; return nearest of a,b,c,
 *       ; breaking ties in order a,b,c.
 *       if pa <= pb AND pa <= pc then return a
 *       else if pb <= pc then return b
 *       else return c
 *  end
 */ PNGReader.prototype.unFilterPaeth = function(scanline, pixels, bpp, of, length) {
    var i = 0, raw, a, b, c, p, pa, pb, pc, pr;
    if (of - length < 0) {
        // Prior(x) == 0 && Raw(x - bpp) == 0
        for(; i < bpp; i++)pixels[of + i] = scanline[i];
        // Prior(x) == 0 && Raw(x - bpp) != 0
        // paethPredictor(x, 0, 0) is always x
        for(; i < length; i++)pixels[of + i] = scanline[i] + pixels[of + i - bpp] & 255;
    } else {
        // Prior(x) != 0 && Raw(x - bpp) == 0
        // paethPredictor(x, 0, 0) is always x
        for(; i < bpp; i++)pixels[of + i] = scanline[i] + pixels[of + i - length] & 255;
        // Prior(x) != 0 && Raw(x - bpp) != 0
        for(; i < length; i++){
            raw = scanline[i];
            a = pixels[of + i - bpp];
            b = pixels[of + i - length];
            c = pixels[of + i - length - bpp];
            p = a + b - c;
            pa = Math.abs(p - a);
            pb = Math.abs(p - b);
            pc = Math.abs(p - c);
            if (pa <= pb && pa <= pc) pr = a;
            else if (pb <= pc) pr = b;
            else pr = c;
            pixels[of + i] = raw + pr & 255;
        }
    }
};
/**
 * Parse the PNG file
 *
 * reader.parse(options, callback)
 * OR
 * reader.parse(callback)
 *
 * OPTIONS:
 *    option  | type     | default
 *    ----------------------------
 *    data      boolean    true    should it read the pixel data
 */ PNGReader.prototype.parse = function(options, callback) {
    if (typeof options == 'function') callback = options;
    if (typeof options != 'object') options = {
    };
    try {
        this.decodeHeader();
        while(this.i < this.bytes.length){
            var type = this.decodeChunk();
            // stop after IHDR chunk, or after IEND
            if (type == 'IHDR' && options.data === false || type == 'IEND') break;
        }
        var reader = this;
        this.decodePixels((err)=>{
            if (err) return callback(err);
            this.decodeState(function(err1) {
                callback(err1, reader.png, reader.state);
            });
        });
    } catch (e) {
        callback(e);
    }
};
module.exports = PNGReader;

},{"buffer":"bpNHw","zlib":"b8Vot","./PNG":"1II4u"}],"bpNHw":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare1(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset + --byteLength1];
    var mul = 1;
    while(byteLength1 > 0 && (mul *= 256))val += this[offset + --byteLength1] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var i = byteLength1;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"2vMBM","ieee754":"lz1we"}],"2vMBM":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len1; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i1 = start; i1 < end; i1 += 3){
        tmp = (uint8[i1] << 16 & 16711680) + (uint8[i1 + 1] << 8 & 65280) + (uint8[i1 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len1 = uint8.length;
    var extraBytes = len1 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i1 = 0, len2 = len1 - extraBytes; i1 < len2; i1 += maxChunkLength)parts.push(encodeChunk(uint8, i1, i1 + maxChunkLength > len2 ? len2 : i1 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len1 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len1 - 2] << 8) + uint8[len1 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"lz1we":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"b8Vot":[function(require,module,exports) {
var process = require("process");
'use strict';
var Buffer = require('buffer').Buffer;
var Transform = require('stream').Transform;
var binding = require('./binding');
var util = require('util');
var assert = require('assert').ok;
var kMaxLength = require('buffer').kMaxLength;
var kRangeErrorMessage = "Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + ' bytes';
// zlib doesn't provide these, so kludge them in following the same
// const naming scheme zlib uses.
binding.Z_MIN_WINDOWBITS = 8;
binding.Z_MAX_WINDOWBITS = 15;
binding.Z_DEFAULT_WINDOWBITS = 15;
// fewer than 64 bytes per chunk is stupid.
// technically it could work with as few as 8, but even 64 bytes
// is absurdly low.  Usually a MB or more is best.
binding.Z_MIN_CHUNK = 64;
binding.Z_MAX_CHUNK = Infinity;
binding.Z_DEFAULT_CHUNK = 16384;
binding.Z_MIN_MEMLEVEL = 1;
binding.Z_MAX_MEMLEVEL = 9;
binding.Z_DEFAULT_MEMLEVEL = 8;
binding.Z_MIN_LEVEL = -1;
binding.Z_MAX_LEVEL = 9;
binding.Z_DEFAULT_LEVEL = binding.Z_DEFAULT_COMPRESSION;
// expose all the zlib constants
var bkeys = Object.keys(binding);
for(var bk = 0; bk < bkeys.length; bk++){
    var bkey = bkeys[bk];
    if (bkey.match(/^Z/)) Object.defineProperty(exports, bkey, {
        enumerable: true,
        value: binding[bkey],
        writable: false
    });
}
// translation table for return codes.
var codes = {
    Z_OK: binding.Z_OK,
    Z_STREAM_END: binding.Z_STREAM_END,
    Z_NEED_DICT: binding.Z_NEED_DICT,
    Z_ERRNO: binding.Z_ERRNO,
    Z_STREAM_ERROR: binding.Z_STREAM_ERROR,
    Z_DATA_ERROR: binding.Z_DATA_ERROR,
    Z_MEM_ERROR: binding.Z_MEM_ERROR,
    Z_BUF_ERROR: binding.Z_BUF_ERROR,
    Z_VERSION_ERROR: binding.Z_VERSION_ERROR
};
var ckeys = Object.keys(codes);
for(var ck = 0; ck < ckeys.length; ck++){
    var ckey = ckeys[ck];
    codes[codes[ckey]] = ckey;
}
Object.defineProperty(exports, 'codes', {
    enumerable: true,
    value: Object.freeze(codes),
    writable: false
});
exports.Deflate = Deflate;
exports.Inflate = Inflate;
exports.Gzip = Gzip;
exports.Gunzip = Gunzip;
exports.DeflateRaw = DeflateRaw;
exports.InflateRaw = InflateRaw;
exports.Unzip = Unzip;
exports.createDeflate = function(o) {
    return new Deflate(o);
};
exports.createInflate = function(o) {
    return new Inflate(o);
};
exports.createDeflateRaw = function(o) {
    return new DeflateRaw(o);
};
exports.createInflateRaw = function(o) {
    return new InflateRaw(o);
};
exports.createGzip = function(o) {
    return new Gzip(o);
};
exports.createGunzip = function(o) {
    return new Gunzip(o);
};
exports.createUnzip = function(o) {
    return new Unzip(o);
};
// Convenience methods.
// compress/decompress a string or buffer in one step.
exports.deflate = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new Deflate(opts), buffer, callback);
};
exports.deflateSync = function(buffer, opts) {
    return zlibBufferSync(new Deflate(opts), buffer);
};
exports.gzip = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new Gzip(opts), buffer, callback);
};
exports.gzipSync = function(buffer, opts) {
    return zlibBufferSync(new Gzip(opts), buffer);
};
exports.deflateRaw = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new DeflateRaw(opts), buffer, callback);
};
exports.deflateRawSync = function(buffer, opts) {
    return zlibBufferSync(new DeflateRaw(opts), buffer);
};
exports.unzip = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new Unzip(opts), buffer, callback);
};
exports.unzipSync = function(buffer, opts) {
    return zlibBufferSync(new Unzip(opts), buffer);
};
exports.inflate = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new Inflate(opts), buffer, callback);
};
exports.inflateSync = function(buffer, opts) {
    return zlibBufferSync(new Inflate(opts), buffer);
};
exports.gunzip = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new Gunzip(opts), buffer, callback);
};
exports.gunzipSync = function(buffer, opts) {
    return zlibBufferSync(new Gunzip(opts), buffer);
};
exports.inflateRaw = function(buffer, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {
        };
    }
    return zlibBuffer(new InflateRaw(opts), buffer, callback);
};
exports.inflateRawSync = function(buffer, opts) {
    return zlibBufferSync(new InflateRaw(opts), buffer);
};
function zlibBuffer(engine, buffer, callback) {
    var buffers = [];
    var nread = 0;
    engine.on('error', onError);
    engine.on('end', onEnd);
    engine.end(buffer);
    flow();
    function flow() {
        var chunk;
        while(null !== (chunk = engine.read())){
            buffers.push(chunk);
            nread += chunk.length;
        }
        engine.once('readable', flow);
    }
    function onError(err) {
        engine.removeListener('end', onEnd);
        engine.removeListener('readable', flow);
        callback(err);
    }
    function onEnd() {
        var buf;
        var err = null;
        if (nread >= kMaxLength) err = new RangeError(kRangeErrorMessage);
        else buf = Buffer.concat(buffers, nread);
        buffers = [];
        engine.close();
        callback(err, buf);
    }
}
function zlibBufferSync(engine, buffer) {
    if (typeof buffer === 'string') buffer = Buffer.from(buffer);
    if (!Buffer.isBuffer(buffer)) throw new TypeError('Not a string or buffer');
    var flushFlag = engine._finishFlushFlag;
    return engine._processChunk(buffer, flushFlag);
}
// generic zlib
// minimal 2-byte header
function Deflate(opts) {
    if (!(this instanceof Deflate)) return new Deflate(opts);
    Zlib.call(this, opts, binding.DEFLATE);
}
function Inflate(opts) {
    if (!(this instanceof Inflate)) return new Inflate(opts);
    Zlib.call(this, opts, binding.INFLATE);
}
// gzip - bigger header, same deflate compression
function Gzip(opts) {
    if (!(this instanceof Gzip)) return new Gzip(opts);
    Zlib.call(this, opts, binding.GZIP);
}
function Gunzip(opts) {
    if (!(this instanceof Gunzip)) return new Gunzip(opts);
    Zlib.call(this, opts, binding.GUNZIP);
}
// raw - no header
function DeflateRaw(opts) {
    if (!(this instanceof DeflateRaw)) return new DeflateRaw(opts);
    Zlib.call(this, opts, binding.DEFLATERAW);
}
function InflateRaw(opts) {
    if (!(this instanceof InflateRaw)) return new InflateRaw(opts);
    Zlib.call(this, opts, binding.INFLATERAW);
}
// auto-detect header.
function Unzip(opts) {
    if (!(this instanceof Unzip)) return new Unzip(opts);
    Zlib.call(this, opts, binding.UNZIP);
}
function isValidFlushFlag(flag) {
    return flag === binding.Z_NO_FLUSH || flag === binding.Z_PARTIAL_FLUSH || flag === binding.Z_SYNC_FLUSH || flag === binding.Z_FULL_FLUSH || flag === binding.Z_FINISH || flag === binding.Z_BLOCK;
}
// the Zlib class they all inherit from
// This thing manages the queue of requests, and returns
// true or false if there is anything in the queue when
// you call the .write() method.
function Zlib(opts, mode) {
    var _this = this;
    this._opts = opts = opts || {
    };
    this._chunkSize = opts.chunkSize || exports.Z_DEFAULT_CHUNK;
    Transform.call(this, opts);
    if (opts.flush && !isValidFlushFlag(opts.flush)) throw new Error('Invalid flush flag: ' + opts.flush);
    if (opts.finishFlush && !isValidFlushFlag(opts.finishFlush)) throw new Error('Invalid flush flag: ' + opts.finishFlush);
    this._flushFlag = opts.flush || binding.Z_NO_FLUSH;
    this._finishFlushFlag = typeof opts.finishFlush !== 'undefined' ? opts.finishFlush : binding.Z_FINISH;
    if (opts.chunkSize) {
        if (opts.chunkSize < exports.Z_MIN_CHUNK || opts.chunkSize > exports.Z_MAX_CHUNK) throw new Error('Invalid chunk size: ' + opts.chunkSize);
    }
    if (opts.windowBits) {
        if (opts.windowBits < exports.Z_MIN_WINDOWBITS || opts.windowBits > exports.Z_MAX_WINDOWBITS) throw new Error('Invalid windowBits: ' + opts.windowBits);
    }
    if (opts.level) {
        if (opts.level < exports.Z_MIN_LEVEL || opts.level > exports.Z_MAX_LEVEL) throw new Error('Invalid compression level: ' + opts.level);
    }
    if (opts.memLevel) {
        if (opts.memLevel < exports.Z_MIN_MEMLEVEL || opts.memLevel > exports.Z_MAX_MEMLEVEL) throw new Error('Invalid memLevel: ' + opts.memLevel);
    }
    if (opts.strategy) {
        if (opts.strategy != exports.Z_FILTERED && opts.strategy != exports.Z_HUFFMAN_ONLY && opts.strategy != exports.Z_RLE && opts.strategy != exports.Z_FIXED && opts.strategy != exports.Z_DEFAULT_STRATEGY) throw new Error('Invalid strategy: ' + opts.strategy);
    }
    if (opts.dictionary) {
        if (!Buffer.isBuffer(opts.dictionary)) throw new Error('Invalid dictionary: it should be a Buffer instance');
    }
    this._handle = new binding.Zlib(mode);
    var self = this;
    this._hadError = false;
    this._handle.onerror = function(message, errno) {
        // there is no way to cleanly recover.
        // continuing only obscures problems.
        _close(self);
        self._hadError = true;
        var error = new Error(message);
        error.errno = errno;
        error.code = exports.codes[errno];
        self.emit('error', error);
    };
    var level = exports.Z_DEFAULT_COMPRESSION;
    if (typeof opts.level === 'number') level = opts.level;
    var strategy = exports.Z_DEFAULT_STRATEGY;
    if (typeof opts.strategy === 'number') strategy = opts.strategy;
    this._handle.init(opts.windowBits || exports.Z_DEFAULT_WINDOWBITS, level, opts.memLevel || exports.Z_DEFAULT_MEMLEVEL, strategy, opts.dictionary);
    this._buffer = Buffer.allocUnsafe(this._chunkSize);
    this._offset = 0;
    this._level = level;
    this._strategy = strategy;
    this.once('end', this.close);
    Object.defineProperty(this, '_closed', {
        get: function() {
            return !_this._handle;
        },
        configurable: true,
        enumerable: true
    });
}
util.inherits(Zlib, Transform);
Zlib.prototype.params = function(level, strategy, callback) {
    if (level < exports.Z_MIN_LEVEL || level > exports.Z_MAX_LEVEL) throw new RangeError('Invalid compression level: ' + level);
    if (strategy != exports.Z_FILTERED && strategy != exports.Z_HUFFMAN_ONLY && strategy != exports.Z_RLE && strategy != exports.Z_FIXED && strategy != exports.Z_DEFAULT_STRATEGY) throw new TypeError('Invalid strategy: ' + strategy);
    if (this._level !== level || this._strategy !== strategy) {
        var self = this;
        this.flush(binding.Z_SYNC_FLUSH, function() {
            assert(self._handle, 'zlib binding closed');
            self._handle.params(level, strategy);
            if (!self._hadError) {
                self._level = level;
                self._strategy = strategy;
                if (callback) callback();
            }
        });
    } else process.nextTick(callback);
};
Zlib.prototype.reset = function() {
    assert(this._handle, 'zlib binding closed');
    return this._handle.reset();
};
// This is the _flush function called by the transform class,
// internally, when the last chunk has been written.
Zlib.prototype._flush = function(callback) {
    this._transform(Buffer.alloc(0), '', callback);
};
Zlib.prototype.flush = function(kind, callback) {
    var _this2 = this;
    var ws = this._writableState;
    if (typeof kind === 'function' || kind === undefined && !callback) {
        callback = kind;
        kind = binding.Z_FULL_FLUSH;
    }
    if (ws.ended) {
        if (callback) process.nextTick(callback);
    } else if (ws.ending) {
        if (callback) this.once('end', callback);
    } else if (ws.needDrain) {
        if (callback) this.once('drain', function() {
            return _this2.flush(kind, callback);
        });
    } else {
        this._flushFlag = kind;
        this.write(Buffer.alloc(0), '', callback);
    }
};
Zlib.prototype.close = function(callback) {
    _close(this, callback);
    process.nextTick(emitCloseNT, this);
};
function _close(engine, callback) {
    if (callback) process.nextTick(callback);
    // Caller may invoke .close after a zlib error (which will null _handle).
    if (!engine._handle) return;
    engine._handle.close();
    engine._handle = null;
}
function emitCloseNT(self) {
    self.emit('close');
}
Zlib.prototype._transform = function(chunk, encoding, cb) {
    var flushFlag;
    var ws = this._writableState;
    var ending = ws.ending || ws.ended;
    var last = ending && (!chunk || ws.length === chunk.length);
    if (chunk !== null && !Buffer.isBuffer(chunk)) return cb(new Error('invalid input'));
    if (!this._handle) return cb(new Error('zlib binding closed'));
    // If it's the last chunk, or a final flush, we use the Z_FINISH flush flag
    // (or whatever flag was provided using opts.finishFlush).
    // If it's explicitly flushing at some other time, then we use
    // Z_FULL_FLUSH. Otherwise, use Z_NO_FLUSH for maximum compression
    // goodness.
    if (last) flushFlag = this._finishFlushFlag;
    else {
        flushFlag = this._flushFlag;
        // once we've flushed the last of the queue, stop flushing and
        // go back to the normal behavior.
        if (chunk.length >= ws.length) this._flushFlag = this._opts.flush || binding.Z_NO_FLUSH;
    }
    this._processChunk(chunk, flushFlag, cb);
};
Zlib.prototype._processChunk = function(chunk, flushFlag, cb) {
    var availInBefore = chunk && chunk.length;
    var availOutBefore = this._chunkSize - this._offset;
    var inOff = 0;
    var self = this;
    var async = typeof cb === 'function';
    if (!async) {
        var buffers = [];
        var nread = 0;
        var error;
        this.on('error', function(er) {
            error = er;
        });
        assert(this._handle, 'zlib binding closed');
        do var res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore); // out_len
        while (!this._hadError && callback(res[0], res[1]))
        if (this._hadError) throw error;
        if (nread >= kMaxLength) {
            _close(this);
            throw new RangeError(kRangeErrorMessage);
        }
        var buf = Buffer.concat(buffers, nread);
        _close(this);
        return buf;
    }
    assert(this._handle, 'zlib binding closed');
    var req = this._handle.write(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore); // out_len
    req.buffer = chunk;
    req.callback = callback;
    function callback(availInAfter, availOutAfter) {
        // When the callback is used in an async write, the callback's
        // context is the `req` object that was created. The req object
        // is === this._handle, and that's why it's important to null
        // out the values after they are done being used. `this._handle`
        // can stay in memory longer than the callback and buffer are needed.
        if (this) {
            this.buffer = null;
            this.callback = null;
        }
        if (self._hadError) return;
        var have = availOutBefore - availOutAfter;
        assert(have >= 0, 'have should not go down');
        if (have > 0) {
            var out = self._buffer.slice(self._offset, self._offset + have);
            self._offset += have;
            // serve some output to the consumer.
            if (async) self.push(out);
            else {
                buffers.push(out);
                nread += out.length;
            }
        }
        // exhausted the output buffer, or used all the input create a new one.
        if (availOutAfter === 0 || self._offset >= self._chunkSize) {
            availOutBefore = self._chunkSize;
            self._offset = 0;
            self._buffer = Buffer.allocUnsafe(self._chunkSize);
        }
        if (availOutAfter === 0) {
            // Not actually done.  Need to reprocess.
            // Also, update the availInBefore to the availInAfter value,
            // so that if we have to hit it a third (fourth, etc.) time,
            // it'll have the correct byte counts.
            inOff += availInBefore - availInAfter;
            availInBefore = availInAfter;
            if (!async) return true;
            var newReq = self._handle.write(flushFlag, chunk, inOff, availInBefore, self._buffer, self._offset, self._chunkSize);
            newReq.callback = callback; // this same function
            newReq.buffer = chunk;
            return;
        }
        if (!async) return false;
        // finished with the chunk.
        cb();
    }
};
util.inherits(Deflate, Zlib);
util.inherits(Inflate, Zlib);
util.inherits(Gzip, Zlib);
util.inherits(Gunzip, Zlib);
util.inherits(DeflateRaw, Zlib);
util.inherits(InflateRaw, Zlib);
util.inherits(Unzip, Zlib);

},{"process":"6Upk8","buffer":"bpNHw","stream":"4q8lv","./binding":"kG3rf","util":"jtUga","assert":"9ywFE"}],"6Upk8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"4q8lv":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

},{"./lib/_stream_readable.js":"bBSnt","./lib/_stream_writable.js":"3GFqe","./lib/_stream_duplex.js":"TRL31","./lib/_stream_transform.js":"aiFov","./lib/_stream_passthrough.js":"45RN3","./lib/internal/streams/end-of-stream.js":"5sVef","./lib/internal/streams/pipeline.js":"fePuh"}],"bBSnt":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require('events').EventEmitter;
var EElistenerCount = function EElistenerCount1(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require('util');
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog('stream');
else debug = function debug1() {
};
/*</replacement>*/ var BufferList = require('./internal/streams/buffer_list');
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require('inherits')(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    'error',
    'close',
    'destroy',
    'pause',
    'resume'
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require('./_stream_duplex');
    if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === 'string') {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = '';
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug('readableAddChunk', chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer',
        'Uint8Array'
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = '';
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var MAX_HWM = 1073741824;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
    } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit('data', ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug('onEofChunk');
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug('emitReadable_', state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once('end', endFn);
    dest.on('unpipe', onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug('onend');
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug('cleanup'); // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on('data', ondata);
    function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug('false write response, pause', state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
    }
    dest.once('finish', onfinish);
    function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit('pipe', src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug('pipe resume');
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit('unpipe', this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === 'data') {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug('on readable', state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === 'readable') // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === 'readable' || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount('data') > 0) self.resume();
}
function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug('resume'); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug('resume', state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === 'function') this[i] = (function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    })(i);
     // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n1) {
        debug('wrapped _read', n1);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === 'function') Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug('endReadable', state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === 'function') Readable.from = function(iterable, opts) {
    if (from === undefined) from = require('./internal/streams/from');
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"process":"6Upk8","events":"jVtdj","./internal/streams/stream":"jmRid","buffer":"bpNHw","util":"8VSUO","./internal/streams/buffer_list":"lPfx9","./internal/streams/destroy":"4vlqa","./internal/streams/state":"jgQHr","../errors":"ftsUt","inherits":"bYMAq","./_stream_duplex":"TRL31","string_decoder/":"kKuVQ","./internal/streams/async_iterator":"2jma3","./internal/streams/from":"ehQJK"}],"jVtdj":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply1(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys1(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN1(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once1;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if ((--this._eventsCount) === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if ((--this._eventsCount) === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once1(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"jmRid":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"jVtdj"}],"8VSUO":[function(require,module,exports) {
"use strict";

},{}],"lPfx9":[function(require,module,exports) {
'use strict';
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var _require = require('buffer'), Buffer = _require.Buffer;
var _require2 = require('util'), inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ (function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return '';
                var p = this.head;
                var ret = '' + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread({
                }, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
})();

},{"buffer":"bpNHw","util":"8VSUO"}],"4vlqa":[function(require,module,exports) {
var process = require("process");
'use strict'; // undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err1) {
        if (!cb && err1) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err1);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err1);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err1);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit('error', err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit('error', err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"process":"6Upk8"}],"jgQHr":[function(require,module,exports) {
'use strict';
var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : 'highWaterMark';
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"../../../errors":"ftsUt"}],"ftsUt":[function(require,module,exports) {
'use strict';
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {
};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
    }(Base);
    NodeError1.prototype.name = Base.name;
    NodeError1.prototype.code = code;
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_INVALID_OPT_VALUE', function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
    return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function(name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function(arg) {
    return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],"bYMAq":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits1(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"TRL31":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');
require('inherits')(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys = objectKeys(Writable.prototype);
for(var v = 0; v < keys.length; v++){
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once('end', onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"process":"6Upk8","./_stream_readable":"bBSnt","./_stream_writable":"3GFqe","inherits":"bYMAq"}],"3GFqe":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require('util-deprecate')
};
/*</replacement>*/ /*<replacement>*/ var Stream = require('./internal/streams/stream');
/*</replacement>*/ var Buffer = require('buffer').Buffer;
var OurUint8Array = global.Uint8Array || function() {
};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require('./internal/streams/destroy');
var _require = require('./internal/streams/state'), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require('../errors').codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require('inherits')(Writable, Stream);
function nop() {
}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require('./_stream_duplex');
    options = options || {
    }; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", 'DEP0003')
        });
    } catch (_) {
    }
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance1(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
    }
    Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== 'string' && !state.objectMode) er = new ERR_INVALID_ARG_TYPE('chunk', [
        'string',
        'Buffer'
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = 'buffer';
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!([
        'hex',
        'utf8',
        'utf-8',
        'ascii',
        'binary',
        'base64',
        'ucs2',
        'ucs-2',
        'utf16le',
        'utf-16le',
        'raw'
    ].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = 'buffer';
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
    }
} // if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit('finish');
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"process":"6Upk8","util-deprecate":"i99jb","./internal/streams/stream":"jmRid","buffer":"bpNHw","./internal/streams/destroy":"4vlqa","./internal/streams/state":"jgQHr","../errors":"ftsUt","inherits":"bYMAq","./_stream_duplex":"TRL31"}],"i99jb":[function(require,module,exports) {
var global = arguments[3];
/**
 * Module exports.
 */ module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config('noDeprecation')) return fn;
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config('throwDeprecation')) throw new Error(msg);
            else if (config('traceDeprecation')) console.trace(msg);
            else console.warn(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!global.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === 'true';
}

},{}],"kKuVQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
/*<replacement>*/ var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = '' + encoding;
    switch(encoding && encoding.toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return 'utf8';
    var retried;
    while(true)switch(enc){
        case 'utf8':
        case 'utf-8':
            return 'utf8';
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return 'utf16le';
        case 'latin1':
        case 'binary':
            return 'latin1';
        case 'base64':
        case 'ascii':
        case 'hex':
            return enc;
        default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return '';
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || '';
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 127) return 0;
    else if (byte >> 5 === 6) return 2;
    else if (byte >> 4 === 14) return 3;
    else if (byte >> 3 === 30) return 4;
    return byte >> 6 === 2 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if ((--j) < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if ((--j) < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return '\ufffd';
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
                self.lastNeed = 2;
                return '\ufffd';
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString('utf8', i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString('utf8', i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + '\ufffd';
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString('utf16le', i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString('base64', i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString('base64', i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : '';
    if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : '';
}

},{"safe-buffer":"8BeU0"}],"8BeU0":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require('buffer');
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') throw new TypeError('Argument must not be a number');
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') throw new TypeError('Argument must be a number');
    return buffer.SlowBuffer(size);
};

},{"buffer":"bpNHw"}],"2jma3":[function(require,module,exports) {
var process = require("process");
'use strict';
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var finished = require('./end-of-stream');
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator1(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {
    }, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"process":"6Upk8","./end-of-stream":"5sVef"}],"5sVef":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function eos(stream, opts, callback) {
    if (typeof opts === 'function') return eos(stream, null, opts);
    if (!opts) opts = {
    };
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish1() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish1() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend1() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror1(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose1() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest1() {
        stream.req.on('finish', onfinish);
    };
    if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
    }
    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
    };
}
module.exports = eos;

},{"../../../errors":"ftsUt"}],"ehQJK":[function(require,module,exports) {
module.exports = function() {
    throw new Error('Readable.from is not available in the browser');
};

},{}],"aiFov":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';
module.exports = Transform;
var _require$codes = require('../errors').codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require('./_stream_duplex');
require('inherits')(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on('prefinish', prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === 'function' && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"../errors":"ftsUt","./_stream_duplex":"TRL31","inherits":"bYMAq"}],"45RN3":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';
module.exports = PassThrough;
var Transform = require('./_stream_transform');
require('inherits')(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"./_stream_transform":"aiFov","inherits":"bYMAq"}],"fePuh":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require('../../../errors').codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function() {
        closed = true;
    });
    if (eos === undefined) eos = require('./end-of-stream');
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS('streams');
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"../../../errors":"ftsUt","./end-of-stream":"5sVef"}],"kG3rf":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var process = require("process");
'use strict';
/* eslint camelcase: "off" */ var assert = require('assert');
var Zstream = require('pako/lib/zlib/zstream');
var zlib_deflate = require('pako/lib/zlib/deflate.js');
var zlib_inflate = require('pako/lib/zlib/inflate.js');
var constants = require('pako/lib/zlib/constants');
for(var key in constants)exports[key] = constants[key];
// zlib modes
exports.NONE = 0;
exports.DEFLATE = 1;
exports.INFLATE = 2;
exports.GZIP = 3;
exports.GUNZIP = 4;
exports.DEFLATERAW = 5;
exports.INFLATERAW = 6;
exports.UNZIP = 7;
var GZIP_HEADER_ID1 = 31;
var GZIP_HEADER_ID2 = 139;
/**
 * Emulate Node's zlib C++ layer for use by the JS layer in index.js
 */ function Zlib(mode) {
    if (typeof mode !== 'number' || mode < exports.DEFLATE || mode > exports.UNZIP) throw new TypeError('Bad argument');
    this.dictionary = null;
    this.err = 0;
    this.flush = 0;
    this.init_done = false;
    this.level = 0;
    this.memLevel = 0;
    this.mode = mode;
    this.strategy = 0;
    this.windowBits = 0;
    this.write_in_progress = false;
    this.pending_close = false;
    this.gzip_id_bytes_read = 0;
}
Zlib.prototype.close = function() {
    if (this.write_in_progress) {
        this.pending_close = true;
        return;
    }
    this.pending_close = false;
    assert(this.init_done, 'close before init');
    assert(this.mode <= exports.UNZIP);
    if (this.mode === exports.DEFLATE || this.mode === exports.GZIP || this.mode === exports.DEFLATERAW) zlib_deflate.deflateEnd(this.strm);
    else if (this.mode === exports.INFLATE || this.mode === exports.GUNZIP || this.mode === exports.INFLATERAW || this.mode === exports.UNZIP) zlib_inflate.inflateEnd(this.strm);
    this.mode = exports.NONE;
    this.dictionary = null;
};
Zlib.prototype.write = function(flush, input, in_off, in_len, out, out_off, out_len) {
    return this._write(true, flush, input, in_off, in_len, out, out_off, out_len);
};
Zlib.prototype.writeSync = function(flush, input, in_off, in_len, out, out_off, out_len) {
    return this._write(false, flush, input, in_off, in_len, out, out_off, out_len);
};
Zlib.prototype._write = function(async, flush, input, in_off, in_len, out, out_off, out_len) {
    assert.equal(arguments.length, 8);
    assert(this.init_done, 'write before init');
    assert(this.mode !== exports.NONE, 'already finalized');
    assert.equal(false, this.write_in_progress, 'write already in progress');
    assert.equal(false, this.pending_close, 'close is pending');
    this.write_in_progress = true;
    assert.equal(false, flush === undefined, 'must provide flush value');
    this.write_in_progress = true;
    if (flush !== exports.Z_NO_FLUSH && flush !== exports.Z_PARTIAL_FLUSH && flush !== exports.Z_SYNC_FLUSH && flush !== exports.Z_FULL_FLUSH && flush !== exports.Z_FINISH && flush !== exports.Z_BLOCK) throw new Error('Invalid flush value');
    if (input == null) {
        input = Buffer.alloc(0);
        in_len = 0;
        in_off = 0;
    }
    this.strm.avail_in = in_len;
    this.strm.input = input;
    this.strm.next_in = in_off;
    this.strm.avail_out = out_len;
    this.strm.output = out;
    this.strm.next_out = out_off;
    this.flush = flush;
    if (!async) {
        // sync version
        this._process();
        if (this._checkError()) return this._afterSync();
        return;
    }
    // async version
    var self = this;
    process.nextTick(function() {
        self._process();
        self._after();
    });
    return this;
};
Zlib.prototype._afterSync = function() {
    var avail_out = this.strm.avail_out;
    var avail_in = this.strm.avail_in;
    this.write_in_progress = false;
    return [
        avail_in,
        avail_out
    ];
};
Zlib.prototype._process = function() {
    var next_expected_header_byte = null;
    // If the avail_out is left at 0, then it means that it ran out
    // of room.  If there was avail_out left over, then it means
    // that all of the input was consumed.
    switch(this.mode){
        case exports.DEFLATE:
        case exports.GZIP:
        case exports.DEFLATERAW:
            this.err = zlib_deflate.deflate(this.strm, this.flush);
            break;
        case exports.UNZIP:
            if (this.strm.avail_in > 0) next_expected_header_byte = this.strm.next_in;
            switch(this.gzip_id_bytes_read){
                case 0:
                    if (next_expected_header_byte === null) break;
                    if (this.strm.input[next_expected_header_byte] === GZIP_HEADER_ID1) {
                        this.gzip_id_bytes_read = 1;
                        next_expected_header_byte++;
                        if (this.strm.avail_in === 1) break;
                    } else {
                        this.mode = exports.INFLATE;
                        break;
                    }
                // fallthrough
                case 1:
                    if (next_expected_header_byte === null) break;
                    if (this.strm.input[next_expected_header_byte] === GZIP_HEADER_ID2) {
                        this.gzip_id_bytes_read = 2;
                        this.mode = exports.GUNZIP;
                    } else // There is no actual difference between INFLATE and INFLATERAW
                    // (after initialization).
                    this.mode = exports.INFLATE;
                    break;
                default:
                    throw new Error('invalid number of gzip magic number bytes read');
            }
        // fallthrough
        case exports.INFLATE:
        case exports.GUNZIP:
        case exports.INFLATERAW:
            this.err = zlib_inflate.inflate(this.strm, this.flush);
            if (this.err === exports.Z_NEED_DICT && this.dictionary) {
                // Load it
                this.err = zlib_inflate.inflateSetDictionary(this.strm, this.dictionary);
                if (this.err === exports.Z_OK) // And try to decode again
                this.err = zlib_inflate.inflate(this.strm, this.flush);
                else if (this.err === exports.Z_DATA_ERROR) // Both inflateSetDictionary() and inflate() return Z_DATA_ERROR.
                // Make it possible for After() to tell a bad dictionary from bad
                // input.
                this.err = exports.Z_NEED_DICT;
            }
            while(this.strm.avail_in > 0 && this.mode === exports.GUNZIP && this.err === exports.Z_STREAM_END && this.strm.next_in[0] !== 0){
                // Bytes remain in input buffer. Perhaps this is another compressed
                // member in the same archive, or just trailing garbage.
                // Trailing zero bytes are okay, though, since they are frequently
                // used for padding.
                this.reset();
                this.err = zlib_inflate.inflate(this.strm, this.flush);
            }
            break;
        default:
            throw new Error('Unknown mode ' + this.mode);
    }
};
Zlib.prototype._checkError = function() {
    // Acceptable error states depend on the type of zlib stream.
    switch(this.err){
        case exports.Z_OK:
        case exports.Z_BUF_ERROR:
            if (this.strm.avail_out !== 0 && this.flush === exports.Z_FINISH) {
                this._error('unexpected end of file');
                return false;
            }
            break;
        case exports.Z_STREAM_END:
            break;
        case exports.Z_NEED_DICT:
            if (this.dictionary == null) this._error('Missing dictionary');
            else this._error('Bad dictionary');
            return false;
        default:
            // something else.
            this._error('Zlib error');
            return false;
    }
    return true;
};
Zlib.prototype._after = function() {
    if (!this._checkError()) return;
    var avail_out = this.strm.avail_out;
    var avail_in = this.strm.avail_in;
    this.write_in_progress = false;
    // call the write() cb
    this.callback(avail_in, avail_out);
    if (this.pending_close) this.close();
};
Zlib.prototype._error = function(message) {
    if (this.strm.msg) message = this.strm.msg;
    this.onerror(message, this.err);
    this.write_in_progress = false;
    if (this.pending_close) this.close();
};
Zlib.prototype.init = function(windowBits, level, memLevel, strategy, dictionary) {
    assert(arguments.length === 4 || arguments.length === 5, 'init(windowBits, level, memLevel, strategy, [dictionary])');
    assert(windowBits >= 8 && windowBits <= 15, 'invalid windowBits');
    assert(level >= -1 && level <= 9, 'invalid compression level');
    assert(memLevel >= 1 && memLevel <= 9, 'invalid memlevel');
    assert(strategy === exports.Z_FILTERED || strategy === exports.Z_HUFFMAN_ONLY || strategy === exports.Z_RLE || strategy === exports.Z_FIXED || strategy === exports.Z_DEFAULT_STRATEGY, 'invalid strategy');
    this._init(level, windowBits, memLevel, strategy, dictionary);
    this._setDictionary();
};
Zlib.prototype.params = function() {
    throw new Error('deflateParams Not supported');
};
Zlib.prototype.reset = function() {
    this._reset();
    this._setDictionary();
};
Zlib.prototype._init = function(level, windowBits, memLevel, strategy, dictionary) {
    this.level = level;
    this.windowBits = windowBits;
    this.memLevel = memLevel;
    this.strategy = strategy;
    this.flush = exports.Z_NO_FLUSH;
    this.err = exports.Z_OK;
    if (this.mode === exports.GZIP || this.mode === exports.GUNZIP) this.windowBits += 16;
    if (this.mode === exports.UNZIP) this.windowBits += 32;
    if (this.mode === exports.DEFLATERAW || this.mode === exports.INFLATERAW) this.windowBits = -1 * this.windowBits;
    this.strm = new Zstream();
    switch(this.mode){
        case exports.DEFLATE:
        case exports.GZIP:
        case exports.DEFLATERAW:
            this.err = zlib_deflate.deflateInit2(this.strm, this.level, exports.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
            break;
        case exports.INFLATE:
        case exports.GUNZIP:
        case exports.INFLATERAW:
        case exports.UNZIP:
            this.err = zlib_inflate.inflateInit2(this.strm, this.windowBits);
            break;
        default:
            throw new Error('Unknown mode ' + this.mode);
    }
    if (this.err !== exports.Z_OK) this._error('Init error');
    this.dictionary = dictionary;
    this.write_in_progress = false;
    this.init_done = true;
};
Zlib.prototype._setDictionary = function() {
    if (this.dictionary == null) return;
    this.err = exports.Z_OK;
    switch(this.mode){
        case exports.DEFLATE:
        case exports.DEFLATERAW:
            this.err = zlib_deflate.deflateSetDictionary(this.strm, this.dictionary);
            break;
        default:
            break;
    }
    if (this.err !== exports.Z_OK) this._error('Failed to set dictionary');
};
Zlib.prototype._reset = function() {
    this.err = exports.Z_OK;
    switch(this.mode){
        case exports.DEFLATE:
        case exports.DEFLATERAW:
        case exports.GZIP:
            this.err = zlib_deflate.deflateReset(this.strm);
            break;
        case exports.INFLATE:
        case exports.INFLATERAW:
        case exports.GUNZIP:
            this.err = zlib_inflate.inflateReset(this.strm);
            break;
        default:
            break;
    }
    if (this.err !== exports.Z_OK) this._error('Failed to reset stream');
};
exports.Zlib = Zlib;

},{"buffer":"bpNHw","process":"6Upk8","assert":"9ywFE","pako/lib/zlib/zstream":"7FZh5","pako/lib/zlib/deflate.js":"gJAla","pako/lib/zlib/inflate.js":"coobI","pako/lib/zlib/constants":"4gqjL"}],"9ywFE":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require('./internal/errors'), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require('./internal/assert/assertion_error');
var _require2 = require('util/'), inspect = _require2.inspect;
var _require$types = require('util/').types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = Object.assign ? Object.assign : require('es6-object-assign').assign;
var objectIs = Object.is ? Object.is : require('object-is');
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require('./internal/util/comparisons');
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    '\\b',
    '',
    '',
    "\\u000b",
    '\\f',
    '',
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn1(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {
}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = 'Failed';
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", 'DeprecationWarning', 'DEP0094');
        }
        if (argsLen === 2) operator = '!=';
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? 'fail' : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail; // The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = 'No value argument passed to `assert.ok()`';
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: '==',
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '==',
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '!=',
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepEqual',
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepEqual',
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepStrictEqual',
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepStrictEqual',
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'strictEqual',
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notStrictEqual',
        stackStartFn: notStrictEqual
    });
};
var Comparison = function Comparison1(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison1);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison(actual, keys);
            var b = new Comparison(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== 'function') {
        if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE('expected', [
            'Function',
            'RegExp'
        ], expected);
         // Handle primitives properly.
        if (_typeof(actual) !== 'object' || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push('name', 'message');
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({
    }, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== 'function') throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === 'function') {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE('promiseFn', [
            'Function',
            'Promise'
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === 'string') {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE('error', [
            'Object',
            'Error',
            'Function',
            'RegExp'
        ], error);
        if (_typeof(actual) === 'object' && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') throw new ERR_INVALID_ARG_TYPE('error', [
        'Object',
        'Error',
        'Function',
        'RegExp'
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = '';
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === 'string') {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = 'ifError got unwanted exception: ';
        if (_typeof(err) === 'object' && typeof err.message === 'string') {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: 'ifError',
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === 'string') {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split('\n');
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split('\n');
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"process":"6Upk8","./internal/errors":"czs1c","./internal/assert/assertion_error":"3K3pd","util/":"jtUga","es6-object-assign":"DWf1w","object-is":"6L6tv","./internal/util/comparisons":"fyBM3"}],"czs1c":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ 'use strict'; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
var codes = {
}; // Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError2);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError2).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError2;
    }(Base);
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    if (assert === undefined) assert = require('../assert');
    assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
    if (util === undefined) util = require('util/');
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require('../assert');
    assert(args.length > 0, 'At least one arg needs to be specified');
    var msg = 'The ';
    var len = args.length;
    args = args.map(function(a) {
        return "\"".concat(a, "\"");
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(', ');
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"../assert":"9ywFE","util/":"jtUga"}],"jtUga":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors1(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if (isNull(x) || !isObject(x)) str += ' ' + x;
    else str += ' ' + inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== 'undefined' && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === 'undefined') return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {
};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else debugs[set] = function() {
        };
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if (isError(value)) return formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = ' ' + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require('inherits');
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"process":"6Upk8","./support/types":"gUmka","./support/isBuffer":"gwQDs","inherits":"bYMAq"}],"gUmka":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === 'undefined') return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === 'undefined') return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === 'undefined') return false;
    if (typeof isSharedArrayBufferToString.working === 'undefined') isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

},{"is-arguments":"euLry","is-generator-function":"5IU6N","which-typed-array":"6jnMr","is-typed-array":"9fLxg"}],"euLry":[function(require,module,exports) {
'use strict';
var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments1(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"0rynY","call-bind/callBound":"b3tPn"}],"0rynY":[function(require,module,exports) {
'use strict';
var hasSymbols = require('has-symbols/shams');
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"cyjEK"}],"cyjEK":[function(require,module,exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {
    };
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"b3tPn":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var callBind = require('./');
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"get-intrinsic":"lKFh5","./":"5uKNL"}],"lKFh5":[function(require,module,exports) {
'use strict';
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({
    }, '');
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require('has-symbols')();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {
};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
var doEval = function doEval1(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval1('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval1('%AsyncGenerator%');
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath1(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic1(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"has-symbols":"5opm2","function-bind":"a1J00","has":"kSgez"}],"5opm2":[function(require,module,exports) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"./shams":"cyjEK"}],"a1J00":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = Function.prototype.bind || implementation;

},{"./implementation":"k5PZZ"}],"k5PZZ":[function(require,module,exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty1() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"kSgez":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"a1J00"}],"5uKNL":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) try {
    $defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind1() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, 'apply', {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"function-bind":"a1J00","get-intrinsic":"lKFh5"}],"5IU6N":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === 'undefined') {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"0rynY"}],"6jnMr":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === 'function') {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"foreach":"ln4LW","available-typed-arrays":"42Uwq","call-bind/callBound":"b3tPn","has-tostringtag/shams":"0rynY","es-abstract/helpers/getOwnPropertyDescriptor":"9BvVW","is-typed-array":"9fLxg"}],"ln4LW":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"42Uwq":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === 'function') out[out.length] = possibleNames[i];
    return out;
};

},{}],"9BvVW":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"get-intrinsic":"lKFh5"}],"9fLxg":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"foreach":"ln4LW","available-typed-arrays":"42Uwq","call-bind/callBound":"b3tPn","has-tostringtag/shams":"0rynY","es-abstract/helpers/getOwnPropertyDescriptor":"9BvVW"}],"gwQDs":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],"3K3pd":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
'use strict';
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper1(Class1) {
        if (Class1 === null || !_isNativeFunction(Class1)) return Class1;
        if (typeof Class1 !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class1)) return _cache.get(Class1);
            _cache.set(Class1, Wrapper);
        }
        function Wrapper() {
            return _construct(Class1, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class1.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class1);
    };
    return _wrapNativeSuper(Class);
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct1(Parent1, args1, Class1) {
        var a = [
            null
        ];
        a.push.apply(a, args1);
        var Constructor = Function.bind.apply(Parent1, a);
        var instance = new Constructor();
        if (Class1) _setPrototypeOf(instance, Class1.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
var _require = require('util/'), inspect = _require.inspect;
var _require2 = require('../errors'), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return '';
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
    deepStrictEqual: 'Expected values to be strictly deep-equal:',
    strictEqual: 'Expected values to be strictly equal:',
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: 'Expected values to be loosely deep-equal:',
    equal: 'Expected values to be loosely equal:',
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: 'Values identical but not reference-equal:'
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, 'message', {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = '';
    var res = '';
    var lastPos = 0;
    var end = '';
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split('\n');
    var expectedLines = inspectValue(expected).split('\n');
    var i = 0;
    var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) operator = 'strictEqualObject';
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== 'strictEqualObject') {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(' ', i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if ((i++) < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== '') {
        end = "\n  ".concat(other).concat(end);
        other = '';
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ',';
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ''; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError1 = /*#__PURE__*/ function(_Error) {
    _inherits(AssertionError2, _Error);
    function AssertionError2(options) {
        var _this;
        _classCallCheck(this, AssertionError2);
        if (_typeof(options) !== 'object' || options === null) throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, String(message)));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1B[34m";
                    green = "\x1B[32m";
                    white = "\x1B[39m";
                    red = "\x1B[31m";
                } else {
                    blue = '';
                    green = '';
                    white = '';
                    red = '';
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === 'deepStrictEqual' || operator === 'strictEqual') _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, createErrDiff(actual, expected, operator)));
            else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.
                if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) base = kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, " ").concat(res[0])));
                else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
            } else {
                var _res = inspectValue(actual);
                var other = '';
                var knownOperators = kReadableOperator[operator];
                if (operator === 'notDeepEqual' || operator === 'notEqual') {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === 'deepEqual' || operator === 'equal') _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), 'name', {
            value: 'AssertionError [ERR_ASSERTION]',
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = 'ERR_ASSERTION';
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = 'AssertionError';
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError2, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread({
                }, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError2;
}(_wrapNativeSuper(Error));
module.exports = AssertionError1;

},{"process":"6Upk8","util/":"jtUga","../errors":"czs1c"}],"DWf1w":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ 'use strict';
function assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError('Cannot convert first argument to object');
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function polyfill() {
    if (!Object.assign) Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
    });
}
module.exports = {
    assign: assign,
    polyfill: polyfill
};

},{}],"6L6tv":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var callBind = require('call-bind');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"define-properties":"dPF3T","call-bind":"5uKNL","./implementation":"lziSD","./polyfill":"kBh2v","./shim":"4w4bd"}],"dPF3T":[function(require,module,exports) {
'use strict';
var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function() {
    var obj = {
    };
    try {
        origDefineProperty(obj, 'x', {
            enumerable: false,
            value: obj
        });
        // eslint-disable-next-line no-unused-vars, no-restricted-syntax
        for(var _ in obj)return false;
        return obj.x === obj;
    } catch (e) {
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) return;
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value;
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {
    };
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"object-keys":"d5Ves"}],"d5Ves":[function(require,module,exports) {
'use strict';
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require('./implementation');
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys1(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"9R84m","./implementation":"40Ptn"}],"9R84m":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    return isArgs;
};

},{}],"40Ptn":[function(require,module,exports) {
'use strict';
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require('./isArguments'); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError('Object.keys called on a non-object');
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === 'prototype') && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"9R84m"}],"lziSD":[function(require,module,exports) {
'use strict';
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"kBh2v":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};

},{"./implementation":"lziSD"}],"4w4bd":[function(require,module,exports) {
'use strict';
var getPolyfill = require('./polyfill');
var define = require('define-properties');
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"./polyfill":"kBh2v","define-properties":"dPF3T"}],"fyBM3":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet1(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap1(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require('object-is');
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require('is-nan');
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require('util/').types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== 'object') return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== 'object' || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== 'object') {
            if (val2 === null || _typeof(val2) !== 'object') // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== 'object') return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === '[object Object]') {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case 'undefined':
            return null;
        case 'object':
            // Only pass in null as object!
            return undefined;
        case 'symbol':
            return false;
        case 'string':
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case 'number':
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === 'object' && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === 'object' && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === 'object' && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(key) === 'object' && key !== null) {
                if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"object-is":"6L6tv","is-nan":"bw69g","util/":"jtUga"}],"bw69g":[function(require,module,exports) {
'use strict';
var callBind = require('call-bind');
var define = require('define-properties');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"call-bind":"5uKNL","define-properties":"dPF3T","./implementation":"H5VZz","./polyfill":"i6Zob","./shim":"eepAT"}],"H5VZz":[function(require,module,exports) {
'use strict';
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"i6Zob":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) return Number.isNaN;
    return implementation;
};

},{"./implementation":"H5VZz"}],"eepAT":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var getPolyfill = require('./polyfill');
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"define-properties":"dPF3T","./polyfill":"i6Zob"}],"7FZh5":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = '' /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
module.exports = ZStream;

},{}],"gJAla":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require('../utils/common');
var trees = require('./trees');
var adler32 = require('./adler32');
var crc32 = require('./crc32');
var msg = require('./messages');
/* Public constants ==========================================================*/ /* ===========================================================================*/ /* Allowed flush values; see deflate() and inflate() below for details */ var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
//var Z_TREES         = 6;
/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */ var Z_OK = 0;
var Z_STREAM_END = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR = -5;
//var Z_VERSION_ERROR = -6;
/* compression levels */ //var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY = 0;
/* Possible values of the data_type field (though see inflate()) */ //var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN = 2;
/* The deflate compression method */ var Z_DEFLATED = 8;
/*============================================================================*/ var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ var MAX_WBITS = 15;
/* 32K LZ77 window */ var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ var LITERALS = 256;
/* number of literal bytes 0..255 */ var L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ var D_CODES = 30;
/* number of distance codes */ var BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ var HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ var MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
var BS_BLOCK_DONE = 2; /* block flush performed */ 
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
var BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
var OS_CODE = 3; // Unix :) . Don't detect, use this default.
function err(strm, errorCode) {
    strm.msg = msg[errorCode];
    return errorCode;
}
function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
}
function zero(buf) {
    var len = buf.length;
    while((--len) >= 0)buf[len] = 0;
}
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */ function flush_pending(strm) {
    var s = strm.state;
    //_tr_flush_bits(s);
    var len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
}
function flush_block_only(s, last) {
    trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
}
function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
}
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ function putShortMSB(s, b) {
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 255;
    s.pending_buf[s.pending++] = b & 255;
}
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    utils.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) strm.adler = adler32(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = crc32(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
}
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length; /* max hash chain length */ 
    var scan = s.strstart; /* current string */ 
    var match; /* matched string */ 
    var len; /* length of current match */ 
    var best_len = s.prev_length; /* best match length so far */ 
    var nice_match = s.nice_match; /* stop if match long enough */ 
    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    var _win = s.window; // shortcut
    var wmask = s.w_mask;
    var prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ var strend = s.strstart + MAX_MATCH;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend)
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && (--chain_length) !== 0)
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
}
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */ n = s.hash_size;
            p = n;
            do {
                m = s.head[--p];
                s.head[p] = m >= _w_size ? m - _w_size : 0;
            }while (--n)
            n = _w_size;
            p = n;
            do {
                m = s.prev[--p];
                s.prev[p] = m >= _w_size ? m - _w_size : 0;
            /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */ }while (--n)
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0)
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */ function deflate_stored(s, flush) {
    /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */ var max_block_size = 65535;
    if (max_block_size > s.pending_buf_size - 5) max_block_size = s.pending_buf_size - 5;
    /* Copy as much as possible from input to output: */ for(;;){
        /* Fill the window as much as possible: */ if (s.lookahead <= 1) {
            //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
            //  s->block_start >= (long)s->w_size, "slide too late");
            //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
            //        s.block_start >= s.w_size)) {
            //        throw  new Error("slide too late");
            //      }
            fill_window(s);
            if (s.lookahead === 0 && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
        /* flush the current block */ }
        //Assert(s->block_start >= 0L, "block gone");
        //    if (s.block_start < 0) throw new Error("block gone");
        s.strstart += s.lookahead;
        s.lookahead = 0;
        /* Emit a stored block if pending_buf will be full: */ var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
            /* strstart == 0 is possible when wraparound on 16-bit machine */ s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
        /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */ if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.strstart > s.block_start) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_NEED_MORE;
}
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ function deflate_fast(s, flush) {
    var hash_head; /* head of the hash chain */ 
    var bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
        if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while ((--s.match_length) !== 0)
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ function deflate_slow(s, flush) {
    var hash_head; /* head of hash chain */ 
    var bflush; /* set if current block must be flushed */ 
    var max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if ((++s.strstart) <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while ((--s.prev_length) !== 0)
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
                if (s.strm.avail_out === 0) return BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ function deflate_rle(s, flush) {
    var bflush; /* set if current block must be flushed */ 
    var prev; /* byte at distance one to match */ 
    var scan, strend; /* scan goes up to strend for length of run */ 
    var _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend)
                s.match_length = MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ function deflate_huff(s, flush) {
    var bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
                if (flush === Z_NO_FLUSH) return BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
var configuration_table;
configuration_table = [
    /*      good lazy nice chain */ new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */ new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */ new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */ new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */ new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */ new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */ new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */ new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */ new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */ new Config(32, 258, 258, 4096, deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ function lm_init(s) {
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
}
function DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = Z_DEFLATED; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new utils.Buf16(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new utils.Buf16(2 * L_CODES + 1); /* heap used to build the Huffman trees */ 
    zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.l_buf = 0; /* buffer index for literals or lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.last_lit = 0; /* running index in l_buf */ 
    this.d_buf = 0;
    /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */ this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
function deflateResetKeep(strm) {
    var s;
    if (!strm || !strm.state) return err(strm, Z_STREAM_ERROR);
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = Z_NO_FLUSH;
    trees._tr_init(s);
    return Z_OK;
}
function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) lm_init(strm.state);
    return ret;
}
function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    if (strm.state.wrap !== 2) return Z_STREAM_ERROR;
    strm.state.gzhead = head;
    return Z_OK;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) return Z_STREAM_ERROR;
    var wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) return err(strm, Z_STREAM_ERROR);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ var s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new utils.Buf8(s.w_size * 2);
    s.head = new utils.Buf16(s.hash_size);
    s.prev = new utils.Buf16(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    s.pending_buf_size = s.lit_bufsize * 4;
    //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
    //s->pending_buf = (uchf *) overlay;
    s.pending_buf = new utils.Buf8(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
    s.d_buf = 1 * s.lit_bufsize;
    //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
    s.l_buf = 3 * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
}
function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}
function deflate(strm, flush) {
    var old_flush, s;
    var beg, val; // for gzip header write only
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    s = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    s.strm = strm; /* just in case */ 
    old_flush = s.last_flush;
    s.last_flush = flush;
    /* Write the header */ if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);
            if (!s.gzhead) {
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                put_byte(s, OS_CODE);
                s.status = BUSY_STATE;
            } else {
                put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
                put_byte(s, s.gzhead.time & 255);
                put_byte(s, s.gzhead.time >> 8 & 255);
                put_byte(s, s.gzhead.time >> 16 & 255);
                put_byte(s, s.gzhead.time >> 24 & 255);
                put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                put_byte(s, s.gzhead.os & 255);
                if (s.gzhead.extra && s.gzhead.extra.length) {
                    put_byte(s, s.gzhead.extra.length & 255);
                    put_byte(s, s.gzhead.extra.length >> 8 & 255);
                }
                if (s.gzhead.hcrc) strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
                s.gzindex = 0;
                s.status = EXTRA_STATE;
            }
        } else {
            var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
            var level_flags = -1;
            if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
            else if (s.level < 6) level_flags = 1;
            else if (s.level === 6) level_flags = 2;
            else level_flags = 3;
            header |= level_flags << 6;
            if (s.strstart !== 0) header |= PRESET_DICT;
            header += 31 - header % 31;
            s.status = BUSY_STATE;
            putShortMSB(s, header);
            /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
                putShortMSB(s, strm.adler >>> 16);
                putShortMSB(s, strm.adler & 65535);
            }
            strm.adler = 1; // adler32(0L, Z_NULL, 0);
        }
    }
    //#ifdef GZIP
    if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            while(s.gzindex < (s.gzhead.extra.length & 65535)){
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) break;
                }
                put_byte(s, s.gzhead.extra[s.gzindex] & 255);
                s.gzindex++;
            }
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (s.gzindex === s.gzhead.extra.length) {
                s.gzindex = 0;
                s.status = NAME_STATE;
            }
        } else s.status = NAME_STATE;
    }
    if (s.status === NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            //int val;
            do {
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0)
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (val === 0) {
                s.gzindex = 0;
                s.status = COMMENT_STATE;
            }
        } else s.status = COMMENT_STATE;
    }
    if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            //int val;
            do {
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0)
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (val === 0) s.status = HCRC_STATE;
        } else s.status = HCRC_STATE;
    }
    if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) flush_pending(strm);
            if (s.pending + 2 <= s.pending_buf_size) {
                put_byte(s, strm.adler & 255);
                put_byte(s, strm.adler >> 8 & 255);
                strm.adler = 0; //crc32(0L, Z_NULL, 0);
                s.status = BUSY_STATE;
            }
        } else s.status = BUSY_STATE;
    }
    //#endif
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return Z_OK;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) return err(strm, Z_BUF_ERROR);
    /* User must not provide more input after the first FINISH: */ if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR);
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return Z_OK;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) trees._tr_align(s);
            else if (flush !== Z_BLOCK) {
                trees._tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === Z_FULL_FLUSH) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return Z_OK;
            }
        }
    }
    //Assert(strm->avail_out > 0, "bug2");
    //if (strm.avail_out <= 0) { throw new Error("bug2");}
    if (flush !== Z_FINISH) return Z_OK;
    if (s.wrap <= 0) return Z_STREAM_END;
    /* Write the trailer */ if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
    } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
    }
    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
    var status;
    if (!strm /*== Z_NULL*/  || !strm.state /*== Z_NULL*/ ) return Z_STREAM_ERROR;
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) return err(strm, Z_STREAM_ERROR);
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm /*== Z_NULL*/  || !strm.state /*== Z_NULL*/ ) return Z_STREAM_ERROR;
    s = strm.state;
    wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while(s.lookahead >= MIN_MATCH){
        str = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n)
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
}
exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)'; /* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/ 

},{"../utils/common":"e7f30","./trees":"48u5o","./adler32":"cb93S","./crc32":"h0c4r","./messages":"2kImb"}],"e7f30":[function(require,module,exports) {
'use strict';
var TYPED_OK = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';
function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.assign = function(obj /*from1, from2, from3, ...*/ ) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        var source = sources.shift();
        if (!source) continue;
        if (typeof source !== 'object') throw new TypeError(source + 'must be non-object');
        for(var p in source)if (_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function(buf, size) {
    if (buf.length === size) return buf;
    if (buf.subarray) return buf.subarray(0, size);
    buf.length = size;
    return buf;
};
var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
        }
        // Fallback to ordinary array
        for(var i = 0; i < len; i++)dest[dest_offs + i] = src[src_offs + i];
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        // calculate data length
        len = 0;
        for(i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
        // join chunks
        result = new Uint8Array(len);
        pos = 0;
        for(i = 0, l = chunks.length; i < l; i++){
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
        }
        return result;
    }
};
var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        for(var i = 0; i < len; i++)dest[dest_offs + i] = src[src_offs + i];
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
    }
};
// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function(on) {
    if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
    } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
    }
};
exports.setTyped(TYPED_OK);

},{}],"48u5o":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ var utils = require('../utils/common');
/* Public constants ==========================================================*/ /* ===========================================================================*/ //var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED = 4;
//var Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ var Z_BINARY = 0;
var Z_TEXT = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN = 2;
/*============================================================================*/ function zero(buf) {
    var len = buf.length;
    while((--len) >= 0)buf[len] = 0;
}
// From zutil.h
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
/* The three kinds of block type */ var MIN_MATCH = 3;
var MAX_MATCH = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ var LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ var LITERALS = 256;
/* number of literal bytes 0..255 */ var L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ var D_CODES = 30;
/* number of distance codes */ var BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ var HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ var MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ var Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ var END_BLOCK = 256;
/* end of block literal code */ var REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ var REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ var extra_lbits = /* extra bits for each length code */ [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
];
var extra_dbits = /* extra bits for each distance code */ [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
var extra_blbits = /* extra bits for each bit length code */ [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
];
var bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
var DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ var static_dtree = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ var _dist_code = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ var base_length = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ var base_dist = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ function put_short(s, w) {
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 255;
    s.pending_buf[s.pending++] = w >>> 8 & 255;
}
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
    }
}
function send_code(s, c, tree) {
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
}
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ function bi_reverse(code, len) {
    var res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while ((--len) > 0)
    return res >>> 1;
}
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ function bi_flush(s) {
    if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
}
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ function gen_bitlen(s, desc) //    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h; /* heap index */ 
    var n, m; /* iterate over the tree elements */ 
    var bits; /* bit length */ 
    var xbits; /* extra bits */ 
    var f; /* frequency */ 
    var overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= MAX_BITS; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < HEAP_SIZE; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Trace((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0)
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
}
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
    var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */ 
    var code = 0; /* running code value */ 
    var bits; /* bit index */ 
    var n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= MAX_BITS; bits++)next_code[bits] = code = code + bl_count[bits - 1] << 1;
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        var len = tree[n * 2 + 1];
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
}
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ function tr_static_init() {
    var n; /* iterates over tree elements */ 
    var bits; /* bit counter */ 
    var length; /* length value */ 
    var code; /* code value */ 
    var dist; /* distance index */ 
    var bl_count = new Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < LENGTH_CODES - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++)_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++)_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < D_CODES; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++)_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= MAX_BITS; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ gen_codes(static_ltree, L_CODES + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < D_CODES; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
//static_init_done = true;
}
/* ===========================================================================
 * Initialize a new block.
 */ function init_block(s) {
    var n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < L_CODES; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < D_CODES; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < BL_CODES; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
}
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ function bi_windup(s) {
    if (s.bi_valid > 8) put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
}
/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */ function copy_block(s, buf, len, header) //DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
    bi_windup(s); /* align on byte boundary */ 
    if (header) {
        put_short(s, len);
        put_short(s, ~len);
    }
    //  while (len--) {
    //    put_byte(s, *buf++);
    //  }
    utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
}
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ function smaller(tree, n, m, depth) {
    var _n2 = n * 2;
    var _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ function pqdownheap(s, tree, k) //    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
    var v = s.heap[k];
    var j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if (smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
}
// inlined manually
// var SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ function compress_block(s, ltree, dtree) //    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
    var dist; /* distance of matched string */ 
    var lc; /* match length or unmatched char (if dist == 0) */ 
    var lx = 0; /* running index in l_buf */ 
    var code; /* the code to send */ 
    var extra; /* number of extra bits to send */ 
    if (s.last_lit !== 0) do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;
        if (dist === 0) send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree); /* send the length code */ 
            extra = extra_lbits[code];
            if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            send_code(s, code, dtree); /* send the distance code */ 
            extra = extra_dbits[code];
            if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */ //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
    //       "pendingBuf overflow");
    }while (lx < s.last_lit)
    send_code(s, END_BLOCK, ltree);
}
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ function build_tree(s, desc) //    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m; /* iterate over heap elements */ 
    var max_code = -1; /* largest code with non zero frequency */ 
    var node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1];
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2)
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ gen_codes(tree, max_code, s.bl_count);
}
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ function scan_tree(s, tree, max_code) //    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
    var n; /* iterates over all tree elements */ 
    var prevlen = -1; /* last emitted length */ 
    var curlen; /* length of current code */ 
    var nextlen = tree[1]; /* length of next code */ 
    var count = 0; /* repeat count of the current code */ 
    var max_count = 7; /* max repeat count */ 
    var min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if ((++count) < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
        else s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ function send_tree(s, tree, max_code) //    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
    var n; /* iterates over all tree elements */ 
    var prevlen = -1; /* last emitted length */ 
    var curlen; /* length of current code */ 
    var nextlen = tree[1]; /* length of next code */ 
    var count = 0; /* repeat count of the current code */ 
    var max_count = 7; /* max repeat count */ 
    var min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if ((++count) < max_count && curlen === nextlen) continue;
        else if (count < min_count) do send_code(s, curlen, s.bl_tree);
        while ((--count) !== 0)
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
        } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ function build_bl_tree(s) {
    var max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
}
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
    var rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ function detect_data_type(s) {
    /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ var black_mask = 4093624447;
    var n;
    /* Check for non-textual ("black-listed") bytes. */ for(n = 0; n <= 31; n++, black_mask >>>= 1){
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
    }
    /* Check for textual ("white-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
    for(n = 32; n < LITERALS; n++){
        if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
    }
    /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return Z_BINARY;
}
var static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ function _tr_init(s) {
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ init_block(s);
}
/* ===========================================================================
 * Send a stored block
 */ function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    copy_block(s, buf, stored_len, true); /* with header */ 
}
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
}
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */ function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
    var opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    var max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === Z_UNKNOWN) s.strm.data_type = detect_data_type(s);
        /* Construct the literal and distance trees */ build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->last_lit));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ _tr_stored_block(s, buf, stored_len, last);
    else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ init_block(s);
    if (last) bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
}
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ function _tr_tally(s, dist, lc) //    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
    //var out_length, in_length, dcode;
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
    s.last_lit++;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
    }
    // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef TRUNCATE_BLOCK
    //  /* Try to guess if it is profitable to stop the current block here */
    //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
    //    /* Compute an upper bound for the compressed length */
    //    out_length = s.last_lit*8;
    //    in_length = s.strstart - s.block_start;
    //
    //    for (dcode = 0; dcode < D_CODES; dcode++) {
    //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
    //    }
    //    out_length >>>= 3;
    //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
    //    //       s->last_lit, in_length, out_length,
    //    //       100L - out_length*100L/in_length));
    //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
    //      return true;
    //    }
    //  }
    //#endif
    return s.last_lit === s.lit_bufsize - 1;
/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ }
exports._tr_init = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":"e7f30"}],"cb93S":[function(require,module,exports) {
'use strict';
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function adler32(adler, buf, len, pos) {
    var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n)
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
}
module.exports = adler32;

},{}],"h0c4r":[function(require,module,exports) {
'use strict';
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
}
// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();
function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc ^= -1;
    for(var i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
    return crc ^ -1; // >>> 0;
}
module.exports = crc32;

},{}],"2kImb":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
module.exports = {
    2: 'need dictionary',
    /* Z_NEED_DICT       2  */ 1: 'stream end',
    /* Z_STREAM_END      1  */ 0: '',
    /* Z_OK              0  */ '-1': 'file error',
    /* Z_ERRNO         (-1) */ '-2': 'stream error',
    /* Z_STREAM_ERROR  (-2) */ '-3': 'data error',
    /* Z_DATA_ERROR    (-3) */ '-4': 'insufficient memory',
    /* Z_MEM_ERROR     (-4) */ '-5': 'buffer error',
    /* Z_BUF_ERROR     (-5) */ '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */ 
};

},{}],"coobI":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require('../utils/common');
var adler32 = require('./adler32');
var crc32 = require('./crc32');
var inflate_fast = require('./inffast');
var inflate_table = require('./inftrees');
var CODES = 0;
var LENS = 1;
var DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ /* Allowed flush values; see deflate() and inflate() below for details */ //var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_TREES = 6;
/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */ var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR = -5;
//var Z_VERSION_ERROR = -6;
/* The deflate compression method */ var Z_DEFLATED = 8;
/* STATES ====================================================================*/ /* ===========================================================================*/ var HEAD = 1; /* i: waiting for magic header */ 
var FLAGS = 2; /* i: waiting for method and flags (gzip) */ 
var TIME = 3; /* i: waiting for modification time (gzip) */ 
var OS = 4; /* i: waiting for extra flags and operating system (gzip) */ 
var EXLEN = 5; /* i: waiting for extra length (gzip) */ 
var EXTRA = 6; /* i: waiting for extra bytes (gzip) */ 
var NAME = 7; /* i: waiting for end of file name (gzip) */ 
var COMMENT = 8; /* i: waiting for end of comment (gzip) */ 
var HCRC = 9; /* i: waiting for header crc (gzip) */ 
var DICTID = 10; /* i: waiting for dictionary check value */ 
var DICT = 11; /* waiting for inflateSetDictionary() call */ 
var TYPE = 12; /* i: waiting for type bits, including last-flag bit */ 
var TYPEDO = 13; /* i: same, but skip check to exit inflate on new block */ 
var STORED = 14; /* i: waiting for stored size (length and complement) */ 
var COPY_ = 15; /* i/o: same as COPY below, but only first time in */ 
var COPY = 16; /* i/o: waiting for input or output to copy stored block */ 
var TABLE = 17; /* i: waiting for dynamic block table lengths */ 
var LENLENS = 18; /* i: waiting for code length code lengths */ 
var CODELENS = 19; /* i: waiting for length/lit and distance code lengths */ 
var LEN_ = 20; /* i: same as LEN below, but only first time in */ 
var LEN = 21; /* i: waiting for length/lit/eob code */ 
var LENEXT = 22; /* i: waiting for length extra bits */ 
var DIST = 23; /* i: waiting for distance code */ 
var DISTEXT = 24; /* i: waiting for distance extra bits */ 
var MATCH = 25; /* o: waiting for output space to copy string */ 
var LIT = 26; /* o: waiting for output space to write literal */ 
var CHECK = 27; /* i: waiting for 32-bit check value */ 
var LENGTH = 28; /* i: waiting for 32-bit length (gzip) */ 
var DONE = 29; /* finished check, done -- remain here until reset */ 
var BAD = 30; /* got a data error -- remain here until reset */ 
var MEM = 31; /* got an inflate() memory error -- remain here until reset */ 
var SYNC = 32; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
var MAX_WBITS = 15;
/* 32K LZ77 window */ var DEF_WBITS = MAX_WBITS;
function zswap32(q) {
    return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
}
function InflateState() {
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib) */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new utils.Buf16(320); /* temporary storage for code lengths */ 
    this.work = new utils.Buf16(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
function inflateResetKeep(strm) {
    var state;
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ''; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
    state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK;
}
function inflateReset(strm) {
    var state;
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    /* get the state */ if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
    var ret;
    var state;
    if (!strm) return Z_STREAM_ERROR;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    state = new InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.window = null;
    ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK) strm.state = null;
    return ret;
}
function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
}
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ var virgin = true;
var lenfix, distfix; // We have no pointers in JS, so keep tables separate
function fixedtables(state) {
    /* build fixed huffman tables if first call (may not be thread safe) */ if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        /* literal/length table */ sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
}
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
}
function inflate(strm, flush) {
    var state;
    var input, output; // input/output buffers
    var next; /* next input INDEX */ 
    var put; /* next output INDEX */ 
    var have, left; /* available input and output */ 
    var hold; /* bit buffer */ 
    var bits; /* bits in bit buffer */ 
    var _in, _out; /* save starting available input and output */ 
    var copy; /* number of stored or match bytes to copy */ 
    var from; /* where to copy match bytes from */ 
    var from_source;
    var here = 0; /* current decoding table entry */ 
    var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //var last;                   /* parent table entry */
    var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    var len; /* length to copy for repeats, bits to drop */ 
    var ret; /* return code */ 
    var hbuf = new utils.Buf8(4); /* buffer for gzip header crc calculation */ 
    var opts;
    var n; // temporary var for NEED_BITS
    var order = /* permutation of code lengths */ [
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ];
    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR;
    state = strm.state;
    if (state.mode === TYPE) state.mode = TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = Z_OK;
    inf_leave: for(;;)switch(state.mode){
        case HEAD:
            if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 35615) {
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
            }
            state.flags = 0; /* expect zlib header */ 
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
            }
            if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 15) + 8;
            if (state.wbits === 0) state.wbits = len;
            else if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
            }
            state.dmax = 1 << len;
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 512 ? DICTID : TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
            }
            if (state.flags & 57344) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 512) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
        /* falls through */ case TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 512) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc32(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
        /* falls through */ case OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
            }
            if (state.flags & 512) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
        /* falls through */ case EXLEN:
            if (state.flags & 1024) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 512) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 255;
                    hbuf[1] = hold >>> 8 & 255;
                    state.check = crc32(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null;
            state.mode = EXTRA;
        /* falls through */ case EXTRA:
            if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Array(state.head.extra_len);
                        utils.arraySet(state.head.extra, input, next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        copy, /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 512) state.check = crc32(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        /* falls through */ case NAME:
            if (state.flags & 2048) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have)
                if (state.flags & 512) state.check = crc32(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        /* falls through */ case COMMENT:
            if (state.flags & 4096) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have)
                if (state.flags & 512) state.check = crc32(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = HCRC;
        /* falls through */ case HCRC:
            if (state.flags & 512) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (hold !== (state.check & 65535)) {
                    strm.msg = 'header crc mismatch';
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
        case DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
        /* falls through */ case DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = TYPE;
        /* falls through */ case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
        /* falls through */ case TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 1;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 3){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = STORED;
                    break;
                case 1:
                    /* fixed block */ fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = LEN_; /* decode codes */ 
                    if (flush === Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = TABLE;
                    break;
                case 3:
                    strm.msg = 'invalid block type';
                    state.mode = BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
            }
            state.length = hold & 65535;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case COPY_:
            state.mode = COPY;
        /* falls through */ case COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                utils.arraySet(output, input, next, copy, put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 31) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 31) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 15) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        /* falls through */ case LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 7; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        /* falls through */ case CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = 'invalid bit length repeat';
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 3); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 7); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 127); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = 'invalid bit length repeat';
                        state.mode = BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case LEN_:
            state.mode = LEN;
        /* falls through */ case LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inflate_fast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
        /* falls through */ case LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
        /* falls through */ case DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 255;
                    here_val = here & 65535;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
        /* falls through */ case DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
        /* falls through */ case MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy)
            if (state.length === 0) state.mode = LEN;
            break;
        case LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) strm.adler = state.check = state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = 'incorrect data check';
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
        /* falls through */ case LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (hold !== (state.total & 4294967295)) {
                    strm.msg = 'incorrect length check';
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
        /* falls through */ case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
        case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
        case MEM:
            return Z_MEM_ERROR;
        case SYNC:
        /* falls through */ default:
            return Z_STREAM_ERROR;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
        }
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) strm.adler = state.check = state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) ret = Z_BUF_ERROR;
    return ret;
}
function inflateEnd(strm) {
    if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/ ) return Z_STREAM_ERROR;
    var state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return Z_OK;
}
function inflateGetHeader(strm, head) {
    var state;
    /* check state */ if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    if ((state.wrap & 2) === 0) return Z_STREAM_ERROR;
    /* save header structure */ state.head = head;
    head.done = false;
    return Z_OK;
}
function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    /* check state */ if (!strm /* == Z_NULL */  || !strm.state /* == Z_NULL */ ) return Z_STREAM_ERROR;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR;
    /* check for correct dictionary identifier */ if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return Z_DATA_ERROR;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK;
}
exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)'; /* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/ 

},{"../utils/common":"e7f30","./adler32":"cb93S","./crc32":"h0c4r","./inffast":"bBVnU","./inftrees":"5fW5v"}],"bBVnU":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
var BAD = 30; /* got a data error -- remain here until reset */ 
var TYPE = 12; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ module.exports = function inflate_fast(strm, start) {
    var state;
    var _in; /* local strm.input */ 
    var last; /* have enough input while in < last */ 
    var _out; /* local strm.output */ 
    var beg; /* inflate()'s initial strm.output */ 
    var end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    var dmax; /* maximum distance from zlib header */ 
    //#endif
    var wsize; /* window size or zero if not using window */ 
    var whave; /* valid bytes in the window */ 
    var wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    var s_window; /* allocated sliding window, if wsize != 0 */ 
    var hold; /* local strm.hold */ 
    var bits; /* local strm.bits */ 
    var lcode; /* local strm.lencode */ 
    var dcode; /* local strm.distcode */ 
    var lmask; /* mask for first level of length codes */ 
    var dmask; /* mask for first level of distance codes */ 
    var here; /* retrieved table entry */ 
    var op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ var len; /* match length, unused bytes */ 
    var dist; /* match distance */ 
    var from; /* where to copy match from */ 
    var from_source;
    var input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 255 /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 65535 /*here.val*/ ;
            else if (op & 16) {
                len = here & 65535 /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255 /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 65535 /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = 'invalid distance too far back';
                            state.mode = BAD;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = 'invalid distance too far back';
                                    state.mode = BAD;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op)
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op)
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op)
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op)
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2)
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = 'invalid distance code';
                        state.mode = BAD;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE;
                break top;
            } else {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end)
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};

},{}],"5fW5v":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require('../utils/common');
var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var lbase = [
    /* Length codes 257..285 base */ 3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
];
var lext = [
    /* Length codes 257..285 extra */ 16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
];
var dbase = [
    /* Distance codes 0..29 base */ 1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
];
var dext = [
    /* Distance codes 0..29 extra */ 16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
];
module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    var len = 0; /* a code's length in bits */ 
    var sym = 0; /* index of code symbols */ 
    var min = 0, max = 0; /* minimum and maximum code lengths */ 
    var root = 0; /* number of index bits for root table */ 
    var curr = 0; /* number of index bits for current table */ 
    var drop = 0; /* code bits to drop for sub-table */ 
    var left = 0; /* number of prefix codes available */ 
    var used = 0; /* code entries in table used */ 
    var huff = 0; /* Huffman code */ 
    var incr; /* for incrementing code, index */ 
    var fill; /* index for replicating entries */ 
    var low; /* low bits for current root entry */ 
    var mask; /* mask for low root bits */ 
    var next; /* next available space in table */ 
    var base = null; /* base value table to use */ 
    var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
    var end; /* use base and extra for symbol > end */ 
    var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === CODES || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES) {
        base = extra = work; /* dummy value--not used */ 
        end = 19;
    } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
    } else {
        base = dbase;
        extra = dext;
        end = -1;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0)
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if ((--count[len]) === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};

},{"../utils/common":"e7f30"}],"4gqjL":[function(require,module,exports) {
'use strict';
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
module.exports = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};

},{}],"1II4u":[function(require,module,exports) {
"use strict";
var PNG = function() {
    // initialize all members to keep the same hidden class
    this.width = 0;
    this.height = 0;
    this.bitDepth = 0;
    this.colorType = 0;
    this.compressionMethod = 0;
    this.filterMethod = 0;
    this.interlaceMethod = 0;
    this.colors = 0;
    this.alpha = false;
    this.pixelBits = 0;
    this.palette = null;
    this.pixels = null;
    this.trns = null;
};
PNG.prototype.getWidth = function() {
    return this.width;
};
PNG.prototype.setWidth = function(width) {
    this.width = width;
};
PNG.prototype.getHeight = function() {
    return this.height;
};
PNG.prototype.setHeight = function(height) {
    this.height = height;
};
PNG.prototype.getBitDepth = function() {
    return this.bitDepth;
};
PNG.prototype.setBitDepth = function(bitDepth) {
    if ([
        2,
        4,
        8,
        16
    ].indexOf(bitDepth) === -1) throw new Error("invalid bith depth " + bitDepth);
    this.bitDepth = bitDepth;
};
PNG.prototype.getColorType = function() {
    return this.colorType;
};
PNG.prototype.setColorType = function(colorType) {
    //   Color    Allowed    Interpretation
    //   Type    Bit Depths
    //
    //   0       1,2,4,8,16  Each pixel is a grayscale sample.
    //
    //   2       8,16        Each pixel is an R,G,B triple.
    //
    //   3       1,2,4,8     Each pixel is a palette index;
    //                       a PLTE chunk must appear.
    //
    //   4       8,16        Each pixel is a grayscale sample,
    //                       followed by an alpha sample.
    //
    //   6       8,16        Each pixel is an R,G,B triple,
    //                       followed by an alpha sample.
    var colors = 0, alpha = false;
    switch(colorType){
        case 0:
            colors = 1;
            break;
        case 2:
            colors = 3;
            break;
        case 3:
            colors = 1;
            break;
        case 4:
            colors = 2;
            alpha = true;
            break;
        case 6:
            colors = 4;
            alpha = true;
            break;
        default:
            throw new Error("invalid color type");
    }
    this.colors = colors;
    this.alpha = alpha;
    this.colorType = colorType;
};
PNG.prototype.getCompressionMethod = function() {
    return this.compressionMethod;
};
PNG.prototype.setCompressionMethod = function(compressionMethod) {
    if (compressionMethod !== 0) throw new Error("invalid compression method " + compressionMethod);
    this.compressionMethod = compressionMethod;
};
PNG.prototype.getFilterMethod = function() {
    return this.filterMethod;
};
PNG.prototype.setFilterMethod = function(filterMethod) {
    if (filterMethod !== 0) throw new Error("invalid filter method " + filterMethod);
    this.filterMethod = filterMethod;
};
PNG.prototype.getInterlaceMethod = function() {
    return this.interlaceMethod;
};
PNG.prototype.setInterlaceMethod = function(interlaceMethod) {
    if (interlaceMethod !== 0 && interlaceMethod !== 1) throw new Error("invalid interlace method " + interlaceMethod);
    this.interlaceMethod = interlaceMethod;
};
PNG.prototype.setTRNS = function(trns) {
    this.trns = trns;
};
PNG.prototype.setPalette = function(palette) {
    if (palette.length % 3 !== 0) throw new Error("incorrect PLTE chunk length");
    if (palette.length > Math.pow(2, this.bitDepth) * 3) throw new Error("palette has more colors than 2^bitdepth");
    this.palette = palette;
};
PNG.prototype.getPalette = function() {
    return this.palette;
};
/**
 * get the pixel color on a certain location in a normalized way
 * result is an array: [red, green, blue, alpha]
 */ PNG.prototype.getPixel = function(x, y) {
    if (!this.pixels) throw new Error("pixel data is empty");
    if (x >= this.width || y >= this.height) throw new Error("x,y position out of bound");
    var i = this.colors * this.bitDepth / 8 * (y * this.width + x);
    var pixels = this.pixels;
    switch(this.colorType){
        case 0:
            return [
                pixels[i],
                pixels[i],
                pixels[i],
                255
            ];
        case 2:
            return [
                pixels[i],
                pixels[i + 1],
                pixels[i + 2],
                255
            ];
        case 3:
            var alpha = 255;
            if (this.trns != null && this.trns[pixels[i]] != null) alpha = this.trns[pixels[i]];
            return [
                this.palette[pixels[i] * 3 + 0],
                this.palette[pixels[i] * 3 + 1],
                this.palette[pixels[i] * 3 + 2],
                alpha
            ];
        case 4:
            return [
                pixels[i],
                pixels[i],
                pixels[i],
                pixels[i + 1]
            ];
        case 6:
            return [
                pixels[i],
                pixels[i + 1],
                pixels[i + 2],
                pixels[i + 3]
            ];
    }
};
/**
 * get the pixels of the image as a RGBA array of the form [r1, g1, b1, a1, r2, b2, g2, a2, ...]
 * Matches the api of canvas.getImageData
 */ PNG.prototype.getRGBA8Array = function() {
    var data = new Array(this.width * this.height * 4);
    for(var y = 0; y < this.height; y++)for(var x = 0; x < this.width; x++){
        var pixelData = this.getPixel(x, y);
        data[(y * this.width + x) * 4 + 0] = pixelData[0];
        data[(y * this.width + x) * 4 + 1] = pixelData[1];
        data[(y * this.width + x) * 4 + 2] = pixelData[2];
        data[(y * this.width + x) * 4 + 3] = pixelData[3];
    }
    return data;
};
module.exports = PNG;

},{}],"chnWa":[function(require,module,exports) {
let Stats = {
    'walletType': 'u8',
    'heartPieces': 'u8',
    'health': 'u8',
    'maxHealth': 'u8',
    'bombCount': 'u8',
    'arrowCount': 'u8',
    'bombBagType': 'u8',
    'quiverType': 'u8',
    'filler': 'u8[2]',
    'charm': 'u8',
    'unkB': 'u8',
    'itemOnA': 'u8',
    'itemOnB': 'u8',
    'bottles': 'u8[4]',
    'effect': 'u8',
    'filler3': 'u8[5]',
    'rupees': 'u16',
    'field_0x1a': 'u16',
    'charmTimer': 'u16',
    'unkTimer': 'u16',
    'effectTimer': 'u16',
    'filler4': 'u8[4]'
};
let RoomControls = {
    'unk2': 'u16',
    'unk3': 'u8',
    'unk4': 'u8',
    'areaID': 'u8',
    'roomID': 'u8',
    'roomOriginX': 'u16',
    'roomOriginY': 'u16',
    'roomScrollX': 's16',
    'roomScrollY': 's16',
    'unk5': 'u8',
    'unk6': 'u8',
    'unk_10': 'u8',
    'filler': 'u8[3]',
    'screenShakeMagnitude': 'u8',
    'unk7': 'u8',
    'screenShakeTime': 'u16',
    'filler2': 'u16[3]',
    'width': 'u16',
    'height': 'u16',
    'filler3': 'u8[6]',
    'bg3OffsetX': 'SplitWord',
    'bg3OffsetY': 'SplitWord',
    'cameraTarget': 'Entity*'
};
let SplitWord = {
    'WORD': 's32',
    'HALF': {
        'type': 'struct',
        'members': {
            'LO': 's16',
            'HI': 's16'
        }
    },
    'HALF_U': {
        'type': 'struct',
        'members': {
            'LO': 'u16',
            'HI': 'u16'
        }
    },
    'BYTES': {
        'type': 'struct',
        'members': {
            'byte0': 'u8',
            'byte1': 'u8',
            'byte2': 'u8',
            'byte3': 'u8'
        }
    }
};
let Entity = {
    'prev': 'Entity*',
    'next': 'Entity*',
    'kind': 'u8',
    'id': 'u8',
    'type': 'u8',
    'type2': 'u8',
    'action': 'u8',
    'subAction': 'u8',
    'actionDelay': 'u8',
    'field_0xf': 'u8',
    'flags': 'u8',
    'scriptedScene': 'u4',
    'scriptedScene2': 'u4',
    'spriteIndex': 's16',
    'animationState': 'u8',
    'direction': 'u8',
    'field_0x16': 'u8',
    'field_0x17': 'u8',
    'spriteSettings': {
        'type': 'union',
        'members': {
            'raw': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'draw': 'u2',
                    'ss2': 'u1',
                    'ss3': 'u1',
                    'shadow': 'u2',
                    'flipX': 'u1',
                    'flipY': 'u1'
                }
            }
        }
    },
    'spriteRendering': {
        'type': 'struct',
        'members': {
            'b0': 'u2',
            'alphaBlend': 'u2',
            'b2': 'u2',
            'b3': 'u2'
        }
    },
    'palette': {
        'type': 'union',
        'members': {
            'raw': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'b0': 'u4',
                    'b4': 'u4'
                }
            }
        }
    },
    'spriteOrientation': {
        'type': 'struct',
        'members': {
            'b0': 'u1',
            'b1': 'u5',
            'flipY': 'u2'
        }
    },
    'field_0x1c': 'u8',
    'field_0x1d': 'u8',
    'frameIndex': 'u8',
    'lastFrameIndex': 'u8',
    'field_0x20': 's32',
    'speed': 's16',
    'spriteAnimation': 'u8[3]',
    'spritePriority': {
        'type': 'struct',
        'members': {
            'b0': 'u3',
            'b1': 'u3',
            'b2': 'u2'
        }
    },
    'collisions': 'u16',
    'x': 'SplitWord',
    'y': 'SplitWord',
    'height': 'SplitWord',
    'collisionLayer': 'u8',
    'interactType': 's8',
    'field_0x3a': 'u8',
    'flags2': 'u8',
    'field_0x3c': 'u8',
    'iframes': 's8',
    'field_0x3e': 'u8',
    'damageType': 'u8',
    'field_0x40': 'u8',
    'bitfield': 'u8',
    'field_0x42': 'u8',
    'field_0x43': 'u8',
    'field_0x44': 'u8',
    'currentHealth': 'u8',
    'field_0x46': 'u16',
    'hitbox': 'Hitbox*',
    'field_0x4c': 'Entity*',
    'parent': 'Entity*',
    'attachedEntity': 'Entity*',
    'animIndex': 'u8',
    'frameDuration': 'u8',
    'frames': {
        'type': 'union',
        'members': {
            'all': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'f0': 'u1',
                    'f1': 'u5',
                    'f2': 'u1',
                    'f3': 'u1'
                }
            }
        }
    },
    'frameSpriteSettings': 'u8',
    'animPtr': 'Frame*',
    'spriteVramOffset': 'u16',
    'spriteOffsetX': 'u8',
    'spriteOffsetY': 's8',
    'myHeap': 'u32*',
    'field_0x68': 'SplitHWord',
    'field_0x6a': 'SplitHWord',
    'field_0x6c': 'SplitHWord',
    'field_0x6e': 'SplitHWord',
    'field_0x70': 'SplitWord',
    'field_0x74': 'SplitHWord',
    'field_0x76': 'SplitHWord',
    'field_0x78': 'SplitHWord',
    'field_0x7a': 'SplitHWord',
    'field_0x7c': 'SplitWord',
    'field_0x80': 'SplitHWord',
    'field_0x82': 'SplitHWord',
    'cutsceneBeh': 'SplitHWord',
    'field_0x86': 'SplitHWord'
};
let LinkedList = {
    'last': 'Entity*',
    'first': 'Entity*'
};
let SplitHWord = {
    'HWORD': 'u16',
    'HALF': {
        'type': 'struct',
        'members': {
            'LO': 'u8',
            'HI': 'u8'
        }
    }
};
let Manager = {
    'prev': 'Manager*',
    'next': 'Manager*',
    'kind': 'u8',
    'id': 'u8',
    'unk_0a': 'u8',
    'unk_0b': 'u8',
    'action': 'u8',
    'unk_0d': 'u8',
    'unk_0e': 'u8',
    'unk_0f': 'u8',
    'unk_10': 'u8',
    'unk_11': 'u8[3]',
    'parent': 'Manager*',
    'unk_18': 'u8[8]',
    'independentData': 'u8[32]'
};
let structs = {
    Stats,
    RoomControls,
    LinkedList,
    Entity,
    Manager
};
let unions = {
    SplitWord,
    SplitHWord
};
module.exports = {
    structs,
    unions
};

},{}],"847CC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showLists", ()=>showLists
);
var _enumsJs = require("./enums.js");
let nameByKind = {
    '1': 'PLAYER',
    '3': 'ENEMY',
    '4': 'PROJECTILE',
    '6': 'OBJECT',
    '7': 'NPC',
    '8': 'PLAYER_ITEM',
    '9': 'MANAGER'
};
let colorByKind = [
    '0',
    '#00ff00',
    '2',
    '#ff0000',
    '#0000ff',
    '5',
    '#cccccc',
    '#006600',
    '#000066',
    '#333333', 
];
function createManager(entity) {
}
function createEntity(parent, entity, listIndex, entityIndex) {
    let kind = parseInt(entity.kind);
    if (kind == 9) {
        createManager(entity);
        return;
    }
    let div = document.createElement('div');
    div.className = 'entity';
    div.id = 'entity_' + listIndex + '_' + entityIndex;
    div.style.left = entity.x.HALF.HI + 'px';
    div.style.top = entity.y.HALF.HI + 'px';
    div.onclick = (event)=>{
        selectEntity(listIndex, entityIndex);
        event.stopPropagation();
        return false;
    };
    //console.log(entity.kind +','+colorByKind[entity.kind]);
    div.style.backgroundColor = colorByKind[entity.kind];
    /*let pre = document.createElement('pre');

    pre.innerHTML = description;
    div.appendChild(pre);*/ parent.appendChild(div);
}
let selectedListIndex = -1;
let selectedEntityIndex = -1;
function getHumanName(entity) {
    let arr = [];
    arr.push(nameByKind[entity.kind]);
    let id = parseInt(entity.id);
    switch(entity.kind){
        case 3:
            arr.push(_enumsJs.enemies[id]);
            break;
        case 6:
            arr.push(_enumsJs.objects[id]);
            break;
        case 7:
            arr.push(_enumsJs.npcs[id]);
            break;
        default:
            arr.push(id.toString(16));
            break;
    }
    return arr;
}
function selectEntity(listIndex, entityIndex) {
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_' + selectedListIndex + '_' + selectedEntityIndex);
        if (div) div.classList.remove('selected');
    }
    selectedListIndex = listIndex;
    selectedEntityIndex = entityIndex;
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_' + selectedListIndex + '_' + selectedEntityIndex);
        if (div) div.classList.add('selected');
    }
    // build description
    let description = '';
    if (listIndex != -1) {
        let entity = currentLists[listIndex][entityIndex];
        let name = getHumanName(entity);
        description += name[0] + '\n' + name[1] + '\n';
        description += JSON.stringify(entity, null, 2);
    }
    document.getElementById('details').innerHTML = description;
}
function createRoom(parent, roomControls) {
    let div = document.createElement('div');
    div.className = 'room';
    div.style.left = roomControls.roomOriginX + 'px';
    div.style.top = roomControls.roomOriginY + 'px';
    div.style.width = roomControls.width + 'px';
    div.style.height = roomControls.height + 'px';
    parent.appendChild(div);
}
function createScroll(parent, roomControls) {
    let div = document.createElement('div');
    div.className = 'screen';
    div.style.left = roomControls.roomScrollX - 1 + 'px';
    div.style.top = roomControls.roomScrollY - 1 + 'px';
    div.style.width = '240px';
    div.style.height = '160px';
    parent.appendChild(div);
    let img = document.getElementById('screenshot');
    img.style.left = roomControls.roomScrollX + 'px';
    img.style.top = roomControls.roomScrollY + 'px';
    // Scroll here at the beginning
    parent.scrollLeft = roomControls.roomScrollX;
    parent.scrollTop = roomControls.roomScrollY;
}
function createEntityLists(lists) {
    var parent = document.getElementById('entity-lists');
    parent.innerHTML = '';
    lists.forEach((list, listIndex)=>{
        let p = document.createElement('p');
        p.innerHTML = 'List ' + listIndex;
        parent.appendChild(p);
        list.forEach((entity, entityIndex)=>{
            let a = document.createElement('a');
            a.onclick = ()=>{
                selectEntity(listIndex, entityIndex);
            };
            let name = getHumanName(entity);
            a.innerHTML = name[0] + ' ' + name[1];
            parent.appendChild(a);
            parent.appendChild(document.createElement('br'));
        });
    });
}
let currentLists = [];
function showLists(roomControls, lists) {
    var parent = document.getElementById('explorer');
    // Clean up previous
    selectEntity(-1, -1);
    for(let i = parent.childNodes.length - 1; i >= 0; i--){
        let child = parent.childNodes[i];
        if (child.id != 'screenshot') parent.removeChild(child);
    }
    document.getElementById('details').innerHTML = 'Click on an entity to show details here.';
    currentLists = lists;
    parent.onclick = ()=>{
        selectEntity(-1, -1);
    };
    createEntityLists(lists);
    createRoom(parent, roomControls);
    createScroll(parent, roomControls);
    lists.forEach((list, listIndex)=>{
        list.forEach((entity, entityIndex)=>{
            createEntity(parent, entity, listIndex, entityIndex);
        });
    });
}

},{"./enums.js":"L7fF9","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"L7fF9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "npcs", ()=>npcs
);
parcelHelpers.export(exports, "enemies", ()=>enemies
);
parcelHelpers.export(exports, "objects", ()=>objects
);
let npcs = [
    'DeleteEntity',
    'Gentari',
    'Festari',
    'ForestMinish',
    'Postman',
    'NPC5',
    'Townsperson',
    'Kid',
    'Guard',
    'NPC9',
    'Stamp',
    'Maid',
    'Marcy',
    'Wheaton',
    'Pita',
    'MinishEzlo',
    'Mailbox',
    'Beedle',
    'Brocco',
    'SittingPerson',
    'Pina',
    'Guard',
    'Maid',
    'Din',
    'Nayru',
    'Farore',
    'Sturgeon',
    'TingleSiblings',
    'Stockwell',
    'Talon',
    'Malon',
    'Epona',
    'MilkCart',
    'GhostBrothers',
    'Smith',
    'NPC23',
    'KingDaltus',
    'MinisterPotho',
    'NPC26',
    'Vaati',
    'Zelda',
    'Mutoh',
    'Carpenter',
    'CastorWildsStatue',
    'Cat',
    'MountainMinish',
    'ZeldaFollower',
    'Melari',
    'BladeBrothers',
    'Cow',
    'Goron',
    'GoronMerchant',
    'Gorman',
    'Dog',
    'Syrup',
    'Rem',
    'TownMinish',
    'Librari',
    'Percy',
    'VaatiReborn',
    'MoblinLady',
    'Librarians',
    'Farmers',
    'Carlov',
    'Dampe',
    'DrLeft',
    'KingGustaf',
    'Gina',
    'Simon',
    'Anju',
    'Mama',
    'Emma',
    'Teachers',
    'WindTribespeople',
    'Gregal',
    'MayorHagen',
    'BigGoron',
    'EzloCap',
    'NPC4E',
    'NPC4F',
    'ClothesRack',
    'PicolyteBottle',
    'SmallTownMinish',
    'HurdyGurdyMan',
    'Cucco',
    'CuccoChick',
    'FusionMenuNPC',
    'Phonograph',
    'NPC58', 
];
let enemies = [
    'OCTOROK',
    'CHUCHU',
    'LEEVER',
    'PEAHAT',
    'ROLLOBITE',
    'DARK_NUT',
    'HANGING_SEED',
    'BEETLE',
    'KEESE',
    'DOOR_MIMIC',
    'ROCK_CHUCHU',
    'SPINY_CHUCHU',
    'CUCCO_CHICK_AGGR',
    'MOLDORM',
    'ENEMY_E',
    'MOLDWORM',
    'SLUGGULA',
    'PESTO',
    'PUFFSTOOL',
    'CHUCHU_BOSS',
    'LIKE_LIKE',
    'SPEAR_MOBLIN',
    'BUSINESS_SCRUB',
    'RUPEE_LIKE',
    'MADDERPILLAR',
    'WATER_DROP',
    'WALL_MASTER',
    'BOMB_PEAHAT',
    'SPARK',
    'CHASER',
    'SPIKED_BEETLE',
    'SENSOR_BLADE_TRAP',
    'HELMASAUR',
    'FALLING_BOULDER',
    'BOBOMB',
    'WALL_MASTER_2',
    'GLEEROCK',
    'VAATI_EYES_MACRO',
    'TEKTITE',
    'WIZZROBE_WIND',
    'WIZZROBE_FIRE',
    'WIZZROBE_ICE',
    'ARMOS',
    'EYEGORE',
    'ROPE',
    'SMALL_PESTO',
    'ACRO_BANDIT',
    'BLADE_TRAP',
    'KEATON',
    'CROW',
    'MULLDOZER',
    'BOMBAROSSA',
    'WISP',
    'SPINY_BEETLE',
    'MAZAAL_HEAD',
    'MAZAAL_MACRO',
    'MAZAAL_HAND',
    'OCTOROK_BOSS',
    'FLYING_POT',
    'GOBDO',
    'OCTOROK_GOLDEN',
    'TEKTITE_GOLDEN',
    'ROPE_GOLDEN',
    'CLOUD_PIRANHA',
    'SCISSORS_BEETLE',
    'CUCCO_AGGR',
    'STALFOS',
    'FLYING_SKULL',
    'MAZAAL_BRACELET',
    'TAKKURI',
    'BOW_MOBLIN',
    'LAKITU',
    'LAKITU_CLOUD',
    'ENEMY_49',
    'VAATI_REBORN_ENEMY',
    'VAATI_PROJECTILE',
    'BALL_CHAIN_SOLIDER',
    'ENEMY_4D',
    'GHINI',
    'VAATI_TRANSFIGURED',
    'ENEMY_50',
    'VAATI_WRATH',
    'VAATI_ARM',
    'DUST',
    'VAATI_BALL',
    'OCTOROK2',
    'SLIME',
    'MINI_SLIME',
    'FIREBALL_GUY',
    'MINI_FIREBALL_GUY',
    'ENEMY_5A',
    'BUSINESS_SCRUB_PROLOGUE',
    'GYORG_FEMALE',
    'GYORG_MALE',
    'CURTAIN',
    'ENEMY_5F',
    'GYORG_CHILD',
    'GYORG_FEMALE_EYE',
    'ENEMY_62',
    'GYORG_FEMALE_MOUTH',
    'ENEMY_64',
    'TREE_ITEM',
    'ENEMY_66'
];
let objects = [
    'GROUND_ITEM',
    'DEATH_FX',
    'SHOP_ITEM',
    'BUTTON',
    'OBJECT_4',
    'POT',
    'OBJECT_6',
    'PUSHED_BLOCK',
    'LOCKED_DOOR',
    'OBJECT_9',
    'OBJECT_A',
    'OBJECT_B',
    'CHEST_SPAWNER',
    'OBJECT_D',
    'OBJECT_E',
    'SPECIAL_FX',
    'OBJECT_10',
    'OBJECT_11',
    'OBJECT_12',
    'RAILTRACK',
    'LILYPAD_LARGE',
    'OBJECT_15',
    'FLOATING_PLATFORM',
    'OBJECT_17',
    'EVIL_SPIRIT',
    'HOUSE_DOOR_EXT',
    'OBJECT_1A',
    'GREAT_FAIRY',
    'OBJECT_1C',
    'OBJECT_1D',
    'OBJECT_1E',
    'OBJECT_1F',
    'OBJECT_20',
    'OBJECT_21',
    'FIGURINE_DEVICE',
    'EYE_SWITCH',
    'OBJECT_24',
    'BIG_BARREL',
    'OBJECT_26',
    'PUSHABLE_STATUE',
    'OBJECT_28',
    'OBJECT_29',
    'OBJECT_2A',
    'OBJECT_2B',
    'BEANSTALK',
    'SMOKE',
    'PUSHABLE_ROCK',
    'HITTABLE_LEVER',
    'OBJECT_30',
    'FROZEN_FLOWER',
    'PULLABLE_MUSHROOM',
    'BOLLARD',
    'WARP_POINT',
    'OBJECT_35',
    'OBJECT_36',
    'OBJECT_37',
    'JAR_PORTAL',
    'BOSS_DOOR',
    'OBJECT_3A',
    'PORTAL_MUSHROOM_STALKS',
    'PORTAL_FALLING_PLAYER',
    'OBJECT_3D',
    'OBJECT_3E',
    'GIANT_LEAF',
    'FAIRY',
    'LADDER_UP',
    'OBJECT_42',
    'OBJECT_43',
    'OBJECT_44',
    'OBJECT_45',
    'GIANT_BOOK_LADDER',
    'HEART_CONTAINER',
    'FILE_SCREEN_OBJECTS',
    'OBJECT_49',
    'BACKGROUND_CLOUD',
    'OBJECT_4B',
    'PUSHABLE_FURNITURE',
    'FURNITURE',
    'MINISH_SIZED_ENTRANCE',
    'ARCHWAY',
    'GIANT_ROCK',
    'OBJECT_51',
    'OBJECT_52',
    'OBJECT_53',
    'PULLABLE_LEVER',
    'MINECART',
    'THOUGHT_BUBBLE',
    'HIDDEN_LADDER_DOWN',
    'GENTARI_CURTAIN',
    'LAVA_PLATFORM',
    'OBJECT_5A',
    'OBJECT_5B',
    'MASK',
    'HOUSE_DOOR_INT',
    'WHIRLWIND',
    'OBJECT_BLOCKING_STAIRS',
    'SWORDSMAN_NEWSLETTER',
    'OBJECT_61',
    'GIANT_TWIG',
    'OBJECT_63',
    'OBJECT_64',
    'LADDER_HOLE',
    'OBJECT_66',
    'OBJECT_67',
    'OBJECT_68',
    'OBJECT_69',
    'OBJECT_6A',
    'CRENAL_BEAN_SPROUT',
    'MINECART_DOOR',
    'OBJECT_ON_PILLAR',
    'MINERAL_WATER_SOURCE',
    'MINISH_SIZED_ARCHWAY',
    'OBJECT_70',
    'PUSHABLE_GRAVE',
    'OBJECT_72',
    'LILYPAD_SMALL',
    'OBJECT_74',
    'OBJECT_75',
    'OBJECT_76',
    'BELL',
    'HUGE_DECORATION',
    'OBJECT_79',
    'STEAM',
    'PUSHABLE_LEVER',
    'HUGE_SHOES',
    'OBJECT_ON_BEETLE',
    'OBJECT_7E',
    'PICO_BLOOM',
    'OBJECT_80',
    'OBJECT_81',
    'BIG_VORTEX',
    'BIG_PUSHABLE_LEVER',
    'SMALL_ICE_BLOCK',
    'BIG_ICE_BLOCK',
    'OBJECT_86',
    'OBJECT_87',
    'HUGE_BOOK',
    'OBJECT_89',
    'OBJECT_8A',
    'OBJECT_8B',
    'BOOK',
    'FIREPLACE',
    'OBJECT_8E',
    'FROZEN_WATER_ELEMENT',
    'OBJECT_90',
    'OBJECT_91',
    'BAKER_OVEN',
    'OBJECT_93',
    'WIND_TRIBE_FLAG',
    'BIRD',
    'OBJECT_96',
    'OBJECT_97',
    'OBJECT_98',
    'OBJECT_99',
    'HUGE_ACORN',
    'OBJECT_9B',
    'TREE_HIDING_PORTAL',
    'LIGHTABLE_SWITCH',
    'OBJECT_9E',
    'FAN',
    'OBJECT_A0',
    'PALACE_ARCHWAY',
    'OBJECT_A2',
    'CLOUD',
    'MINISH_LIGHT',
    'OBJECT_A5',
    'OBJECT_A6',
    'OBJECT_A7',
    'OBJECT_A8',
    'OBJECT_A9',
    'WATERFALL_OPENING',
    'OBJECT_AB',
    'FOUR_ELEMENTS',
    'OBJECT_AD',
    'FLOATING_BLOCK',
    'OBJECT_AF',
    'METAL_DOOR',
    'JAIL_BARS',
    'OBJECT_B2',
    'OBJECT_B3',
    'OBJECT_B4',
    'OBJECT_B5',
    'OBJECT_B6',
    'WELL',
    'WIND_TRIBE_TELEPORTER',
    'OBJECT_B9',
    'OBJECT_BA',
    'WINDCREST',
    'LIT_AREA',
    'OBJECT_BD',
    'PINWHEEL',
    'OBJECT_BF',
    'ENEMY_ITEM',
    'OBJECT_C1', 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"mnHCj":[function(require,module,exports) {
var global = arguments[3];
var Buffer = require("buffer").Buffer;
/*!

JSZip v3.7.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/ !function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = t();
}(function() {
    return (function s(a, o, h) {
        function u(r, t) {
            if (!o[r]) {
                if (!a[r]) {
                    var e = "function" == typeof require && undefined;
                    if (!t && e) return e(r, !0);
                    if (l) return l(r, !0);
                    var i = new Error("Cannot find module '" + r + "'");
                    throw i.code = "MODULE_NOT_FOUND", i;
                }
                var n = o[r] = {
                    exports: {
                    }
                };
                a[r][0].call(n.exports, function(t1) {
                    var e = a[r][1][t1];
                    return u(e || t1);
                }, n, n.exports, s, a, o, h);
            }
            return o[r].exports;
        }
        for(var l = "function" == typeof require && undefined, t = 0; t < h.length; t++)u(h[t]);
        return u;
    })({
        1: [
            function(t, e, r) {
                "use strict";
                var c = t("./utils"), d = t("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                r.encode = function(t1) {
                    for(var e1, r1, i, n, s1, a, o, h = [], u = 0, l = t1.length, f = l, d1 = "string" !== c.getTypeOf(t1); u < t1.length;)f = l - u, i = d1 ? (e1 = t1[u++], r1 = u < l ? t1[u++] : 0, u < l ? t1[u++] : 0) : (e1 = t1.charCodeAt(u++), r1 = u < l ? t1.charCodeAt(u++) : 0, u < l ? t1.charCodeAt(u++) : 0), n = e1 >> 2, s1 = (3 & e1) << 4 | r1 >> 4, a = 1 < f ? (15 & r1) << 2 | i >> 6 : 64, o = 2 < f ? 63 & i : 64, h.push(p.charAt(n) + p.charAt(s1) + p.charAt(a) + p.charAt(o));
                    return h.join("");
                }, r.decode = function(t1) {
                    var e1, r1, i, n, s1, a, o = 0, h = 0, u = "data:";
                    if (t1.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
                    var l, f = 3 * (t1 = t1.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
                    if (t1.charAt(t1.length - 1) === p.charAt(64) && f--, t1.charAt(t1.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for(l = d.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < t1.length;)e1 = p.indexOf(t1.charAt(o++)) << 2 | (n = p.indexOf(t1.charAt(o++))) >> 4, r1 = (15 & n) << 4 | (s1 = p.indexOf(t1.charAt(o++))) >> 2, i = (3 & s1) << 6 | (a = p.indexOf(t1.charAt(o++))), l[h++] = e1, 64 !== s1 && (l[h++] = r1), 64 !== a && (l[h++] = i);
                    return l;
                };
            },
            {
                "./support": 30,
                "./utils": 32
            }
        ],
        2: [
            function(t, e, r) {
                "use strict";
                var i = t("./external"), n = t("./stream/DataWorker"), s1 = t("./stream/Crc32Probe"), a = t("./stream/DataLengthProbe");
                function o(t1, e1, r1, i1, n1) {
                    this.compressedSize = t1, this.uncompressedSize = e1, this.crc32 = r1, this.compression = i1, this.compressedContent = n1;
                }
                o.prototype = {
                    getContentWorker: function() {
                        var t1 = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), e1 = this;
                        return t1.on("end", function() {
                            if (this.streamInfo.data_length !== e1.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                        }), t1;
                    },
                    getCompressedWorker: function() {
                        return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                    }
                }, o.createWorkerFrom = function(t1, e1, r1) {
                    return t1.pipe(new s1).pipe(new a("uncompressedSize")).pipe(e1.compressWorker(r1)).pipe(new a("compressedSize")).withStreamInfo("compression", e1);
                }, e.exports = o;
            },
            {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }
        ],
        3: [
            function(t, e, r) {
                "use strict";
                var i = t("./stream/GenericWorker");
                r.STORE = {
                    magic: "\0\0",
                    compressWorker: function(t1) {
                        return new i("STORE compression");
                    },
                    uncompressWorker: function() {
                        return new i("STORE decompression");
                    }
                }, r.DEFLATE = t("./flate");
            },
            {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }
        ],
        4: [
            function(t, e, r) {
                "use strict";
                var i = t("./utils");
                var o = function() {
                    for(var t1, e1 = [], r1 = 0; r1 < 256; r1++){
                        t1 = r1;
                        for(var i1 = 0; i1 < 8; i1++)t1 = 1 & t1 ? 3988292384 ^ t1 >>> 1 : t1 >>> 1;
                        e1[r1] = t1;
                    }
                    return e1;
                }();
                e.exports = function(t1, e1) {
                    return (void 0) !== t1 && t1.length ? "string" !== i.getTypeOf(t1) ? (function(t2, e2, r1, i2) {
                        var n = o, s1 = i2 + r1;
                        t2 ^= -1;
                        for(var a = i2; a < s1; a++)t2 = t2 >>> 8 ^ n[255 & (t2 ^ e2[a])];
                        return -1 ^ t2;
                    })(0 | e1, t1, t1.length, 0) : (function(t2, e2, r1, i2) {
                        var n = o, s1 = i2 + r1;
                        t2 ^= -1;
                        for(var a = i2; a < s1; a++)t2 = t2 >>> 8 ^ n[255 & (t2 ^ e2.charCodeAt(a))];
                        return -1 ^ t2;
                    })(0 | e1, t1, t1.length, 0) : 0;
                };
            },
            {
                "./utils": 32
            }
        ],
        5: [
            function(t, e, r) {
                "use strict";
                r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
            },
            {
            }
        ],
        6: [
            function(t, e, r) {
                "use strict";
                var i2 = null;
                i2 = "undefined" != typeof Promise ? Promise : t("lie"), e.exports = {
                    Promise: i2
                };
            },
            {
                lie: 37
            }
        ],
        7: [
            function(t, e, r) {
                "use strict";
                var i2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, n = t("pako"), s1 = t("./utils"), a = t("./stream/GenericWorker"), o = i2 ? "uint8array" : "array";
                function h(t1, e1) {
                    a.call(this, "FlateWorker/" + t1), this._pako = null, this._pakoAction = t1, this._pakoOptions = e1, this.meta = {
                    };
                }
                r.magic = "\b\0", s1.inherits(h, a), h.prototype.processChunk = function(t1) {
                    this.meta = t1.meta, null === this._pako && this._createPako(), this._pako.push(s1.transformTo(o, t1.data), !1);
                }, h.prototype.flush = function() {
                    a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
                }, h.prototype.cleanUp = function() {
                    a.prototype.cleanUp.call(this), this._pako = null;
                }, h.prototype._createPako = function() {
                    this._pako = new n[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var e1 = this;
                    this._pako.onData = function(t1) {
                        e1.push({
                            data: t1,
                            meta: e1.meta
                        });
                    };
                }, r.compressWorker = function(t1) {
                    return new h("Deflate", t1);
                }, r.uncompressWorker = function() {
                    return new h("Inflate", {
                    });
                };
            },
            {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }
        ],
        8: [
            function(t, e, r) {
                "use strict";
                function A(t1, e1) {
                    var r1, i2 = "";
                    for(r1 = 0; r1 < e1; r1++)i2 += String.fromCharCode(255 & t1), t1 >>>= 8;
                    return i2;
                }
                function i2(t1, e1, r1, i3, n, s1) {
                    var a, o, h = t1.file, u = t1.compression, l = s1 !== O.utf8encode, f = I.transformTo("string", s1(h.name)), d = I.transformTo("string", O.utf8encode(h.name)), c = h.comment, p = I.transformTo("string", s1(c)), m = I.transformTo("string", O.utf8encode(c)), _ = d.length !== h.name.length, g = m.length !== c.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = {
                        crc32: 0,
                        compressedSize: 0,
                        uncompressedSize: 0
                    };
                    e1 && !r1 || (x.crc32 = t1.crc32, x.compressedSize = t1.compressedSize, x.uncompressedSize = t1.uncompressedSize);
                    var S = 0;
                    e1 && (S |= 8), l || !_ && !g || (S |= 2048);
                    var z = 0, C = 0;
                    w && (z |= 16), "UNIX" === n ? (C = 798, z |= (function(t2, e2) {
                        var r2 = t2;
                        return t2 || (r2 = e2 ? 16893 : 33204), (65535 & r2) << 16;
                    })(h.unixPermissions, w)) : (C = 20, z |= (function(t2) {
                        return 63 & (t2 || 0);
                    })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + d, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
                    var E = "";
                    return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
                        fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
                        dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(i3, 4) + f + b + p
                    };
                }
                var I = t("../utils"), n = t("../stream/GenericWorker"), O = t("../utf8"), B = t("../crc32"), R = t("../signature");
                function s1(t1, e1, r1, i3) {
                    n.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e1, this.zipPlatform = r1, this.encodeFileName = i3, this.streamFiles = t1, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
                }
                I.inherits(s1, n), s1.prototype.push = function(t1) {
                    var e1 = t1.meta.percent || 0, r1 = this.entriesCount, i3 = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(t1) : (this.bytesWritten += t1.data.length, n.prototype.push.call(this, {
                        data: t1.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: r1 ? (e1 + 100 * (r1 - i3 - 1)) / r1 : 100
                        }
                    }));
                }, s1.prototype.openedSource = function(t1) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = t1.file.name;
                    var e1 = this.streamFiles && !t1.file.dir;
                    if (e1) {
                        var r1 = i2(t1, e1, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: r1.fileRecord,
                            meta: {
                                percent: 0
                            }
                        });
                    } else this.accumulate = !0;
                }, s1.prototype.closedSource = function(t1) {
                    this.accumulate = !1;
                    var e1 = this.streamFiles && !t1.file.dir, r2 = i2(t1, e1, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if (this.dirRecords.push(r2.dirRecord), e1) this.push({
                        data: function(t2) {
                            return R.DATA_DESCRIPTOR + A(t2.crc32, 4) + A(t2.compressedSize, 4) + A(t2.uncompressedSize, 4);
                        }(t1),
                        meta: {
                            percent: 100
                        }
                    });
                    else for(this.push({
                        data: r2.fileRecord,
                        meta: {
                            percent: 0
                        }
                    }); this.contentBuffer.length;)this.push(this.contentBuffer.shift());
                    this.currentFile = null;
                }, s1.prototype.flush = function() {
                    for(var t1 = this.bytesWritten, e1 = 0; e1 < this.dirRecords.length; e1++)this.push({
                        data: this.dirRecords[e1],
                        meta: {
                            percent: 100
                        }
                    });
                    var r2 = this.bytesWritten - t1, i3 = function(t2, e2, r3, i4, n1) {
                        var s2 = I.transformTo("string", n1(i4));
                        return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(t2, 2) + A(t2, 2) + A(e2, 4) + A(r3, 4) + A(s2.length, 2) + s2;
                    }(this.dirRecords.length, r2, t1, this.zipComment, this.encodeFileName);
                    this.push({
                        data: i3,
                        meta: {
                            percent: 100
                        }
                    });
                }, s1.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
                }, s1.prototype.registerPrevious = function(t1) {
                    this._sources.push(t1);
                    var e1 = this;
                    return t1.on("data", function(t2) {
                        e1.processChunk(t2);
                    }), t1.on("end", function() {
                        e1.closedSource(e1.previous.streamInfo), e1._sources.length ? e1.prepareNextSource() : e1.end();
                    }), t1.on("error", function(t2) {
                        e1.error(t2);
                    }), this;
                }, s1.prototype.resume = function() {
                    return !!n.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
                }, s1.prototype.error = function(t1) {
                    var e1 = this._sources;
                    if (!n.prototype.error.call(this, t1)) return !1;
                    for(var r2 = 0; r2 < e1.length; r2++)try {
                        e1[r2].error(t1);
                    } catch (t2) {
                    }
                    return !0;
                }, s1.prototype.lock = function() {
                    n.prototype.lock.call(this);
                    for(var t1 = this._sources, e1 = 0; e1 < t1.length; e1++)t1[e1].lock();
                }, e.exports = s1;
            },
            {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }
        ],
        9: [
            function(t, e, r2) {
                "use strict";
                var u = t("../compressions"), i2 = t("./ZipFileWorker");
                r2.generateWorker = function(t1, a, e1) {
                    var o = new i2(a.streamFiles, e1, a.platform, a.encodeFileName), h = 0;
                    try {
                        t1.forEach(function(t2, e2) {
                            h++;
                            var r3 = function(t3, e3) {
                                var r4 = t3 || e3, i3 = u[r4];
                                if (!i3) throw new Error(r4 + " is not a valid compression method !");
                                return i3;
                            }(e2.options.compression, a.compression), i3 = e2.options.compressionOptions || a.compressionOptions || {
                            }, n = e2.dir, s1 = e2.date;
                            e2._compressWorker(r3, i3).withStreamInfo("file", {
                                name: t2,
                                dir: n,
                                date: s1,
                                comment: e2.comment || "",
                                unixPermissions: e2.unixPermissions,
                                dosPermissions: e2.dosPermissions
                            }).pipe(o);
                        }), o.entriesCount = h;
                    } catch (t2) {
                        o.error(t2);
                    }
                    return o;
                };
            },
            {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }
        ],
        10: [
            function(t, e, r2) {
                "use strict";
                function i2() {
                    if (!(this instanceof i2)) return new i2;
                    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var t1 = new i2;
                        for(var e1 in this)"function" != typeof this[e1] && (t1[e1] = this[e1]);
                        return t1;
                    };
                }
                (i2.prototype = t("./object")).loadAsync = t("./load"), i2.support = t("./support"), i2.defaults = t("./defaults"), i2.version = "3.7.1", i2.loadAsync = function(t1, e1) {
                    return (new i2).loadAsync(t1, e1);
                }, i2.external = t("./external"), e.exports = i2;
            },
            {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }
        ],
        11: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./utils"), n = t("./external"), o = t("./utf8"), h = t("./zipEntries"), s1 = t("./stream/Crc32Probe"), u = t("./nodejsUtils");
                function l(i3) {
                    return new n.Promise(function(t1, e1) {
                        var r3 = i3.decompressed.getContentWorker().pipe(new s1);
                        r3.on("error", function(t2) {
                            e1(t2);
                        }).on("end", function() {
                            r3.streamInfo.crc32 !== i3.decompressed.crc32 ? e1(new Error("Corrupted zip : CRC32 mismatch")) : t1();
                        }).resume();
                    });
                }
                e.exports = function(t1, s2) {
                    var a = this;
                    return s2 = i2.extend(s2 || {
                    }, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: o.utf8decode
                    }), u.isNode && u.isStream(t1) ? n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i2.prepareContent("the loaded zip file", t1, !0, s2.optimizedBinaryString, s2.base64).then(function(t2) {
                        var e1 = new h(s2);
                        return e1.load(t2), e1;
                    }).then(function(t2) {
                        var e1 = [
                            n.Promise.resolve(t2)
                        ], r3 = t2.files;
                        if (s2.checkCRC32) for(var i3 = 0; i3 < r3.length; i3++)e1.push(l(r3[i3]));
                        return n.Promise.all(e1);
                    }).then(function(t2) {
                        for(var e1 = t2.shift(), r3 = e1.files, i3 = 0; i3 < r3.length; i3++){
                            var n1 = r3[i3];
                            a.file(n1.fileNameStr, n1.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: n1.date,
                                dir: n1.dir,
                                comment: n1.fileCommentStr.length ? n1.fileCommentStr : null,
                                unixPermissions: n1.unixPermissions,
                                dosPermissions: n1.dosPermissions,
                                createFolders: s2.createFolders
                            });
                        }
                        return e1.zipComment.length && (a.comment = e1.zipComment), a;
                    });
                };
            },
            {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }
        ],
        12: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("../utils"), n2 = t("../stream/GenericWorker");
                function s1(t1, e1) {
                    n2.call(this, "Nodejs stream input adapter for " + t1), this._upstreamEnded = !1, this._bindStream(e1);
                }
                i2.inherits(s1, n2), s1.prototype._bindStream = function(t1) {
                    var e1 = this;
                    (this._stream = t1).pause(), t1.on("data", function(t2) {
                        e1.push({
                            data: t2,
                            meta: {
                                percent: 0
                            }
                        });
                    }).on("error", function(t2) {
                        e1.isPaused ? this.generatedError = t2 : e1.error(t2);
                    }).on("end", function() {
                        e1.isPaused ? e1._upstreamEnded = !0 : e1.end();
                    });
                }, s1.prototype.pause = function() {
                    return !!n2.prototype.pause.call(this) && (this._stream.pause(), !0);
                }, s1.prototype.resume = function() {
                    return !!n2.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
                }, e.exports = s1;
            },
            {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }
        ],
        13: [
            function(t, e, r2) {
                "use strict";
                var n2 = t("readable-stream").Readable;
                function i2(t1, e1, r3) {
                    n2.call(this, e1), this._helper = t1;
                    var i3 = this;
                    t1.on("data", function(t2, e2) {
                        i3.push(t2) || i3._helper.pause(), r3 && r3(e2);
                    }).on("error", function(t2) {
                        i3.emit("error", t2);
                    }).on("end", function() {
                        i3.push(null);
                    });
                }
                t("../utils").inherits(i2, n2), i2.prototype._read = function() {
                    this._helper.resume();
                }, e.exports = i2;
            },
            {
                "../utils": 32,
                "readable-stream": 16
            }
        ],
        14: [
            function(t, e, r2) {
                "use strict";
                e.exports = {
                    isNode: "undefined" != typeof Buffer,
                    newBufferFrom: function(t1, e1) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t1, e1);
                        if ("number" == typeof t1) throw new Error('The "data" argument must not be a number');
                        return new Buffer(t1, e1);
                    },
                    allocBuffer: function(t1) {
                        if (Buffer.alloc) return Buffer.alloc(t1);
                        var e1 = new Buffer(t1);
                        return e1.fill(0), e1;
                    },
                    isBuffer: function(t1) {
                        return Buffer.isBuffer(t1);
                    },
                    isStream: function(t1) {
                        return t1 && "function" == typeof t1.on && "function" == typeof t1.pause && "function" == typeof t1.resume;
                    }
                };
            },
            {
            }
        ],
        15: [
            function(t, e, r2) {
                "use strict";
                function s1(t1, e1, r3) {
                    var i2, n2 = u.getTypeOf(e1), s2 = u.extend(r3 || {
                    }, f);
                    s2.date = s2.date || new Date, null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = !0), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = !0), s2.dir && (t1 = g(t1)), s2.createFolders && (i2 = _(t1)) && b.call(this, i2, !0);
                    var a = "string" === n2 && !1 === s2.binary && !1 === s2.base64;
                    r3 && (void 0) !== r3.binary || (s2.binary = !a), (e1 instanceof d && 0 === e1.uncompressedSize || s2.dir || !e1 || 0 === e1.length) && (s2.base64 = !1, s2.binary = !0, e1 = "", s2.compression = "STORE", n2 = "string");
                    var o = null;
                    o = e1 instanceof d || e1 instanceof l ? e1 : p.isNode && p.isStream(e1) ? new m(t1, e1) : u.prepareContent(t1, e1, s2.binary, s2.optimizedBinaryString, s2.base64);
                    var h = new c(t1, o, s2);
                    this.files[t1] = h;
                }
                var n2 = t("./utf8"), u = t("./utils"), l = t("./stream/GenericWorker"), a = t("./stream/StreamHelper"), f = t("./defaults"), d = t("./compressedObject"), c = t("./zipObject"), o = t("./generate"), p = t("./nodejsUtils"), m = t("./nodejs/NodejsStreamInputAdapter"), _ = function(t1) {
                    "/" === t1.slice(-1) && (t1 = t1.substring(0, t1.length - 1));
                    var e1 = t1.lastIndexOf("/");
                    return 0 < e1 ? t1.substring(0, e1) : "";
                }, g = function(t1) {
                    return "/" !== t1.slice(-1) && (t1 += "/"), t1;
                }, b = function(t1, e1) {
                    return e1 = (void 0) !== e1 ? e1 : f.createFolders, t1 = g(t1), this.files[t1] || s1.call(this, t1, null, {
                        dir: !0,
                        createFolders: e1
                    }), this.files[t1];
                };
                function h(t1) {
                    return "[object RegExp]" === Object.prototype.toString.call(t1);
                }
                var i2 = {
                    load: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    forEach: function(t1) {
                        var e1, r3, i3;
                        for(e1 in this.files)i3 = this.files[e1], (r3 = e1.slice(this.root.length, e1.length)) && e1.slice(0, this.root.length) === this.root && t1(r3, i3);
                    },
                    filter: function(r3) {
                        var i3 = [];
                        return this.forEach(function(t1, e1) {
                            r3(t1, e1) && i3.push(e1);
                        }), i3;
                    },
                    file: function(t1, e1, r3) {
                        if (1 !== arguments.length) return t1 = this.root + t1, s1.call(this, t1, e1, r3), this;
                        if (h(t1)) {
                            var i3 = t1;
                            return this.filter(function(t2, e2) {
                                return !e2.dir && i3.test(t2);
                            });
                        }
                        var n3 = this.files[this.root + t1];
                        return n3 && !n3.dir ? n3 : null;
                    },
                    folder: function(r3) {
                        if (!r3) return this;
                        if (h(r3)) return this.filter(function(t1, e1) {
                            return e1.dir && r3.test(t1);
                        });
                        var t1 = this.root + r3, e1 = b.call(this, t1), i4 = this.clone();
                        return i4.root = e1.name, i4;
                    },
                    remove: function(r3) {
                        r3 = this.root + r3;
                        var t1 = this.files[r3];
                        if (t1 || ("/" !== r3.slice(-1) && (r3 += "/"), t1 = this.files[r3]), t1 && !t1.dir) delete this.files[r3];
                        else for(var e1 = this.filter(function(t2, e2) {
                            return e2.name.slice(0, r3.length) === r3;
                        }), i4 = 0; i4 < e1.length; i4++)delete this.files[e1[i4].name];
                        return this;
                    },
                    generate: function(t1) {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                    },
                    generateInternalStream: function(t1) {
                        var e1, r3 = {
                        };
                        try {
                            if ((r3 = u.extend(t1 || {
                            }, {
                                streamFiles: !1,
                                compression: "STORE",
                                compressionOptions: null,
                                type: "",
                                platform: "DOS",
                                comment: null,
                                mimeType: "application/zip",
                                encodeFileName: n2.utf8encode
                            })).type = r3.type.toLowerCase(), r3.compression = r3.compression.toUpperCase(), "binarystring" === r3.type && (r3.type = "string"), !r3.type) throw new Error("No output type specified.");
                            u.checkSupport(r3.type), "darwin" !== r3.platform && "freebsd" !== r3.platform && "linux" !== r3.platform && "sunos" !== r3.platform || (r3.platform = "UNIX"), "win32" === r3.platform && (r3.platform = "DOS");
                            var i4 = r3.comment || this.comment || "";
                            e1 = o.generateWorker(this, r3, i4);
                        } catch (t2) {
                            (e1 = new l("error")).error(t2);
                        }
                        return new a(e1, r3.type || "string", r3.mimeType);
                    },
                    generateAsync: function(t1, e1) {
                        return this.generateInternalStream(t1).accumulate(e1);
                    },
                    generateNodeStream: function(t1, e1) {
                        return (t1 = t1 || {
                        }).type || (t1.type = "nodebuffer"), this.generateInternalStream(t1).toNodejsStream(e1);
                    }
                };
                e.exports = i2;
            },
            {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }
        ],
        16: [
            function(t, e, r2) {
                e.exports = t("stream");
            },
            {
                stream: void 0
            }
        ],
        17: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./DataReader");
                function n2(t1) {
                    i2.call(this, t1);
                    for(var e1 = 0; e1 < this.data.length; e1++)t1[e1] = 255 & t1[e1];
                }
                t("../utils").inherits(n2, i2), n2.prototype.byteAt = function(t1) {
                    return this.data[this.zero + t1];
                }, n2.prototype.lastIndexOfSignature = function(t1) {
                    for(var e1 = t1.charCodeAt(0), r3 = t1.charCodeAt(1), i4 = t1.charCodeAt(2), n3 = t1.charCodeAt(3), s1 = this.length - 4; 0 <= s1; --s1)if (this.data[s1] === e1 && this.data[s1 + 1] === r3 && this.data[s1 + 2] === i4 && this.data[s1 + 3] === n3) return s1 - this.zero;
                    return -1;
                }, n2.prototype.readAndCheckSignature = function(t1) {
                    var e1 = t1.charCodeAt(0), r3 = t1.charCodeAt(1), i4 = t1.charCodeAt(2), n3 = t1.charCodeAt(3), s1 = this.readData(4);
                    return e1 === s1[0] && r3 === s1[1] && i4 === s1[2] && n3 === s1[3];
                }, n2.prototype.readData = function(t1) {
                    if (this.checkOffset(t1), 0 === t1) return [];
                    var e1 = this.data.slice(this.zero + this.index, this.zero + this.index + t1);
                    return this.index += t1, e1;
                }, e.exports = n2;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        18: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("../utils");
                function n2(t1) {
                    this.data = t1, this.length = t1.length, this.index = 0, this.zero = 0;
                }
                n2.prototype = {
                    checkOffset: function(t1) {
                        this.checkIndex(this.index + t1);
                    },
                    checkIndex: function(t1) {
                        if (this.length < this.zero + t1 || t1 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t1 + "). Corrupted zip ?");
                    },
                    setIndex: function(t1) {
                        this.checkIndex(t1), this.index = t1;
                    },
                    skip: function(t1) {
                        this.setIndex(this.index + t1);
                    },
                    byteAt: function(t1) {
                    },
                    readInt: function(t1) {
                        var e1, r3 = 0;
                        for(this.checkOffset(t1), e1 = this.index + t1 - 1; e1 >= this.index; e1--)r3 = (r3 << 8) + this.byteAt(e1);
                        return this.index += t1, r3;
                    },
                    readString: function(t1) {
                        return i2.transformTo("string", this.readData(t1));
                    },
                    readData: function(t1) {
                    },
                    lastIndexOfSignature: function(t1) {
                    },
                    readAndCheckSignature: function(t1) {
                    },
                    readDate: function() {
                        var t1 = this.readInt(4);
                        return new Date(Date.UTC(1980 + (t1 >> 25 & 127), (t1 >> 21 & 15) - 1, t1 >> 16 & 31, t1 >> 11 & 31, t1 >> 5 & 63, (31 & t1) << 1));
                    }
                }, e.exports = n2;
            },
            {
                "../utils": 32
            }
        ],
        19: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./Uint8ArrayReader");
                function n2(t1) {
                    i2.call(this, t1);
                }
                t("../utils").inherits(n2, i2), n2.prototype.readData = function(t1) {
                    this.checkOffset(t1);
                    var e1 = this.data.slice(this.zero + this.index, this.zero + this.index + t1);
                    return this.index += t1, e1;
                }, e.exports = n2;
            },
            {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }
        ],
        20: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./DataReader");
                function n2(t1) {
                    i2.call(this, t1);
                }
                t("../utils").inherits(n2, i2), n2.prototype.byteAt = function(t1) {
                    return this.data.charCodeAt(this.zero + t1);
                }, n2.prototype.lastIndexOfSignature = function(t1) {
                    return this.data.lastIndexOf(t1) - this.zero;
                }, n2.prototype.readAndCheckSignature = function(t1) {
                    return t1 === this.readData(4);
                }, n2.prototype.readData = function(t1) {
                    this.checkOffset(t1);
                    var e1 = this.data.slice(this.zero + this.index, this.zero + this.index + t1);
                    return this.index += t1, e1;
                }, e.exports = n2;
            },
            {
                "../utils": 32,
                "./DataReader": 18
            }
        ],
        21: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./ArrayReader");
                function n2(t1) {
                    i2.call(this, t1);
                }
                t("../utils").inherits(n2, i2), n2.prototype.readData = function(t1) {
                    if (this.checkOffset(t1), 0 === t1) return new Uint8Array(0);
                    var e1 = this.data.subarray(this.zero + this.index, this.zero + this.index + t1);
                    return this.index += t1, e1;
                }, e.exports = n2;
            },
            {
                "../utils": 32,
                "./ArrayReader": 17
            }
        ],
        22: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("../utils"), n2 = t("../support"), s1 = t("./ArrayReader"), a = t("./StringReader"), o = t("./NodeBufferReader"), h = t("./Uint8ArrayReader");
                e.exports = function(t1) {
                    var e1 = i2.getTypeOf(t1);
                    return i2.checkSupport(e1), "string" !== e1 || n2.uint8array ? "nodebuffer" === e1 ? new o(t1) : n2.uint8array ? new h(i2.transformTo("uint8array", t1)) : new s1(i2.transformTo("array", t1)) : new a(t1);
                };
            },
            {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }
        ],
        23: [
            function(t, e, r2) {
                "use strict";
                r2.LOCAL_FILE_HEADER = "PK", r2.CENTRAL_FILE_HEADER = "PK", r2.CENTRAL_DIRECTORY_END = "PK", r2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r2.ZIP64_CENTRAL_DIRECTORY_END = "PK", r2.DATA_DESCRIPTOR = "PK\b";
            },
            {
            }
        ],
        24: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./GenericWorker"), n2 = t("../utils");
                function s1(t1) {
                    i2.call(this, "ConvertWorker to " + t1), this.destType = t1;
                }
                n2.inherits(s1, i2), s1.prototype.processChunk = function(t1) {
                    this.push({
                        data: n2.transformTo(this.destType, t1.data),
                        meta: t1.meta
                    });
                }, e.exports = s1;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        25: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("./GenericWorker"), n2 = t("../crc32");
                function s1() {
                    i2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                }
                t("../utils").inherits(s1, i2), s1.prototype.processChunk = function(t1) {
                    this.streamInfo.crc32 = n2(t1.data, this.streamInfo.crc32 || 0), this.push(t1);
                }, e.exports = s1;
            },
            {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        26: [
            function(t, e, r2) {
                "use strict";
                var i2 = t("../utils"), n2 = t("./GenericWorker");
                function s1(t1) {
                    n2.call(this, "DataLengthProbe for " + t1), this.propName = t1, this.withStreamInfo(t1, 0);
                }
                i2.inherits(s1, n2), s1.prototype.processChunk = function(t1) {
                    if (t1) {
                        var e1 = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = e1 + t1.data.length;
                    }
                    n2.prototype.processChunk.call(this, t1);
                }, e.exports = s1;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        27: [
            function(t, e2, r2) {
                "use strict";
                var i2 = t("../utils"), n2 = t("./GenericWorker");
                function s1(t1) {
                    n2.call(this, "DataWorker");
                    var e3 = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, t1.then(function(t2) {
                        e3.dataIsReady = !0, e3.data = t2, e3.max = t2 && t2.length || 0, e3.type = i2.getTypeOf(t2), e3.isPaused || e3._tickAndRepeat();
                    }, function(t2) {
                        e3.error(t2);
                    });
                }
                i2.inherits(s1, n2), s1.prototype.cleanUp = function() {
                    n2.prototype.cleanUp.call(this), this.data = null;
                }, s1.prototype.resume = function() {
                    return !!n2.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i2.delay(this._tickAndRepeat, [], this)), !0);
                }, s1.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i2.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
                }, s1.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var t1 = null, e3 = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch(this.type){
                        case "string":
                            t1 = this.data.substring(this.index, e3);
                            break;
                        case "uint8array":
                            t1 = this.data.subarray(this.index, e3);
                            break;
                        case "array":
                        case "nodebuffer":
                            t1 = this.data.slice(this.index, e3);
                    }
                    return this.index = e3, this.push({
                        data: t1,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    });
                }, e2.exports = s1;
            },
            {
                "../utils": 32,
                "./GenericWorker": 28
            }
        ],
        28: [
            function(t, e2, r2) {
                "use strict";
                function i2(t1) {
                    this.name = t1 || "default", this.streamInfo = {
                    }, this.generatedError = null, this.extraStreamInfo = {
                    }, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null;
                }
                i2.prototype = {
                    push: function(t1) {
                        this.emit("data", t1);
                    },
                    end: function() {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0;
                        } catch (t1) {
                            this.emit("error", t1);
                        }
                        return !0;
                    },
                    error: function(t1) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = t1 : (this.isFinished = !0, this.emit("error", t1), this.previous && this.previous.error(t1), this.cleanUp()), !0);
                    },
                    on: function(t1, e3) {
                        return this._listeners[t1].push(e3), this;
                    },
                    cleanUp: function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
                    },
                    emit: function(t1, e3) {
                        if (this._listeners[t1]) for(var r3 = 0; r3 < this._listeners[t1].length; r3++)this._listeners[t1][r3].call(this, e3);
                    },
                    pipe: function(t1) {
                        return t1.registerPrevious(this);
                    },
                    registerPrevious: function(t1) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = t1.streamInfo, this.mergeStreamInfo(), this.previous = t1;
                        var e3 = this;
                        return t1.on("data", function(t2) {
                            e3.processChunk(t2);
                        }), t1.on("end", function() {
                            e3.end();
                        }), t1.on("error", function(t2) {
                            e3.error(t2);
                        }), this;
                    },
                    pause: function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
                    },
                    resume: function() {
                        if (!this.isPaused || this.isFinished) return !1;
                        var t1 = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), t1 = !0), this.previous && this.previous.resume(), !t1;
                    },
                    flush: function() {
                    },
                    processChunk: function(t1) {
                        this.push(t1);
                    },
                    withStreamInfo: function(t1, e3) {
                        return this.extraStreamInfo[t1] = e3, this.mergeStreamInfo(), this;
                    },
                    mergeStreamInfo: function() {
                        for(var t1 in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(t1) && (this.streamInfo[t1] = this.extraStreamInfo[t1]);
                    },
                    lock: function() {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock();
                    },
                    toString: function() {
                        var t1 = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + t1 : t1;
                    }
                }, e2.exports = i2;
            },
            {
            }
        ],
        29: [
            function(t, e2, r2) {
                "use strict";
                var h = t("../utils"), n2 = t("./ConvertWorker"), s1 = t("./GenericWorker"), u = t("../base64"), i2 = t("../support"), a = t("../external"), o = null;
                if (i2.nodestream) try {
                    o = t("../nodejs/NodejsStreamOutputAdapter");
                } catch (t1) {
                }
                function l(t1, o1) {
                    return new a.Promise(function(e3, r3) {
                        var i4 = [], n3 = t1._internalType, s2 = t1._outputType, a1 = t1._mimeType;
                        t1.on("data", function(t2, e4) {
                            i4.push(t2), o1 && o1(e4);
                        }).on("error", function(t2) {
                            i4 = [], r3(t2);
                        }).on("end", function() {
                            try {
                                var t2 = function(t3, e4, r4) {
                                    switch(t3){
                                        case "blob":
                                            return h.newBlob(h.transformTo("arraybuffer", e4), r4);
                                        case "base64":
                                            return u.encode(e4);
                                        default:
                                            return h.transformTo(t3, e4);
                                    }
                                }(s2, function(t3, e4) {
                                    var r4, i5 = 0, n4 = null, s3 = 0;
                                    for(r4 = 0; r4 < e4.length; r4++)s3 += e4[r4].length;
                                    switch(t3){
                                        case "string":
                                            return e4.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], e4);
                                        case "uint8array":
                                            for(n4 = new Uint8Array(s3), r4 = 0; r4 < e4.length; r4++)n4.set(e4[r4], i5), i5 += e4[r4].length;
                                            return n4;
                                        case "nodebuffer":
                                            return Buffer.concat(e4);
                                        default:
                                            throw new Error("concat : unsupported type '" + t3 + "'");
                                    }
                                }(n3, i4), a1);
                                e3(t2);
                            } catch (t3) {
                                r3(t3);
                            }
                            i4 = [];
                        }).resume();
                    });
                }
                function f(t1, e3, r3) {
                    var i4 = e3;
                    switch(e3){
                        case "blob":
                        case "arraybuffer":
                            i4 = "uint8array";
                            break;
                        case "base64":
                            i4 = "string";
                    }
                    try {
                        this._internalType = i4, this._outputType = e3, this._mimeType = r3, h.checkSupport(i4), this._worker = t1.pipe(new n2(i4)), t1.lock();
                    } catch (t2) {
                        this._worker = new s1("error"), this._worker.error(t2);
                    }
                }
                f.prototype = {
                    accumulate: function(t1) {
                        return l(this, t1);
                    },
                    on: function(t1, e3) {
                        var r3 = this;
                        return "data" === t1 ? this._worker.on(t1, function(t2) {
                            e3.call(r3, t2.data, t2.meta);
                        }) : this._worker.on(t1, function() {
                            h.delay(e3, arguments, r3);
                        }), this;
                    },
                    resume: function() {
                        return h.delay(this._worker.resume, [], this._worker), this;
                    },
                    pause: function() {
                        return this._worker.pause(), this;
                    },
                    toNodejsStream: function(t1) {
                        if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
                        return new o(this, {
                            objectMode: "nodebuffer" !== this._outputType
                        }, t1);
                    }
                }, e2.exports = f;
            },
            {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }
        ],
        30: [
            function(t, e2, r2) {
                "use strict";
                if (r2.base64 = !0, r2.array = !0, r2.string = !0, r2.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r2.nodebuffer = "undefined" != typeof Buffer, r2.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r2.blob = !1;
                else {
                    var i2 = new ArrayBuffer(0);
                    try {
                        r2.blob = 0 === new Blob([
                            i2
                        ], {
                            type: "application/zip"
                        }).size;
                    } catch (t1) {
                        try {
                            var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            n2.append(i2), r2.blob = 0 === n2.getBlob("application/zip").size;
                        } catch (t2) {
                            r2.blob = !1;
                        }
                    }
                }
                try {
                    r2.nodestream = !!t("readable-stream").Readable;
                } catch (t1) {
                    r2.nodestream = !1;
                }
            },
            {
                "readable-stream": 16
            }
        ],
        31: [
            function(t, e2, s1) {
                "use strict";
                for(var o = t("./utils"), h = t("./support"), r2 = t("./nodejsUtils"), i4 = t("./stream/GenericWorker"), u = new Array(256), n3 = 0; n3 < 256; n3++)u[n3] = 252 <= n3 ? 6 : 248 <= n3 ? 5 : 240 <= n3 ? 4 : 224 <= n3 ? 3 : 192 <= n3 ? 2 : 1;
                u[254] = u[254] = 1;
                function a() {
                    i4.call(this, "utf-8 decode"), this.leftOver = null;
                }
                function l() {
                    i4.call(this, "utf-8 encode");
                }
                s1.utf8encode = function(t1) {
                    return h.nodebuffer ? r2.newBufferFrom(t1, "utf-8") : (function(t2) {
                        var e3, r3, i5, n4, s2, a1 = t2.length, o1 = 0;
                        for(n4 = 0; n4 < a1; n4++)55296 == (64512 & (r3 = t2.charCodeAt(n4))) && n4 + 1 < a1 && 56320 == (64512 & (i5 = t2.charCodeAt(n4 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (i5 - 56320), n4++), o1 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
                        for(e3 = h.uint8array ? new Uint8Array(o1) : new Array(o1), n4 = s2 = 0; s2 < o1; n4++)55296 == (64512 & (r3 = t2.charCodeAt(n4))) && n4 + 1 < a1 && 56320 == (64512 & (i5 = t2.charCodeAt(n4 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (i5 - 56320), n4++), r3 < 128 ? e3[s2++] = r3 : (r3 < 2048 ? e3[s2++] = 192 | r3 >>> 6 : (r3 < 65536 ? e3[s2++] = 224 | r3 >>> 12 : (e3[s2++] = 240 | r3 >>> 18, e3[s2++] = 128 | r3 >>> 12 & 63), e3[s2++] = 128 | r3 >>> 6 & 63), e3[s2++] = 128 | 63 & r3);
                        return e3;
                    })(t1);
                }, s1.utf8decode = function(t1) {
                    return h.nodebuffer ? o.transformTo("nodebuffer", t1).toString("utf-8") : (function(t2) {
                        var e3, r3, i5, n4, s2 = t2.length, a1 = new Array(2 * s2);
                        for(e3 = r3 = 0; e3 < s2;)if ((i5 = t2[e3++]) < 128) a1[r3++] = i5;
                        else if (4 < (n4 = u[i5])) a1[r3++] = 65533, e3 += n4 - 1;
                        else {
                            for(i5 &= 2 === n4 ? 31 : 3 === n4 ? 15 : 7; 1 < n4 && e3 < s2;)i5 = i5 << 6 | 63 & t2[e3++], n4--;
                            1 < n4 ? a1[r3++] = 65533 : i5 < 65536 ? a1[r3++] = i5 : (i5 -= 65536, a1[r3++] = 55296 | i5 >> 10 & 1023, a1[r3++] = 56320 | 1023 & i5);
                        }
                        return a1.length !== r3 && (a1.subarray ? a1 = a1.subarray(0, r3) : a1.length = r3), o.applyFromCharCode(a1);
                    })(t1 = o.transformTo(h.uint8array ? "uint8array" : "array", t1));
                }, o.inherits(a, i4), a.prototype.processChunk = function(t1) {
                    var e3 = o.transformTo(h.uint8array ? "uint8array" : "array", t1.data);
                    if (this.leftOver && this.leftOver.length) {
                        if (h.uint8array) {
                            var r3 = e3;
                            (e3 = new Uint8Array(r3.length + this.leftOver.length)).set(this.leftOver, 0), e3.set(r3, this.leftOver.length);
                        } else e3 = this.leftOver.concat(e3);
                        this.leftOver = null;
                    }
                    var i5 = function(t2, e4) {
                        var r4;
                        for((e4 = e4 || t2.length) > t2.length && (e4 = t2.length), r4 = e4 - 1; 0 <= r4 && 128 == (192 & t2[r4]);)r4--;
                        return r4 < 0 ? e4 : 0 === r4 ? e4 : r4 + u[t2[r4]] > e4 ? r4 : e4;
                    }(e3), n4 = e3;
                    i5 !== e3.length && (h.uint8array ? (n4 = e3.subarray(0, i5), this.leftOver = e3.subarray(i5, e3.length)) : (n4 = e3.slice(0, i5), this.leftOver = e3.slice(i5, e3.length))), this.push({
                        data: s1.utf8decode(n4),
                        meta: t1.meta
                    });
                }, a.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: s1.utf8decode(this.leftOver),
                        meta: {
                        }
                    }), this.leftOver = null);
                }, s1.Utf8DecodeWorker = a, o.inherits(l, i4), l.prototype.processChunk = function(t1) {
                    this.push({
                        data: s1.utf8encode(t1.data),
                        meta: t1.meta
                    });
                }, s1.Utf8EncodeWorker = l;
            },
            {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }
        ],
        32: [
            function(t, e2, a) {
                "use strict";
                var o = t("./support"), h = t("./base64"), r2 = t("./nodejsUtils"), i4 = t("set-immediate-shim"), u = t("./external");
                function n3(t1) {
                    return t1;
                }
                function l(t1, e3) {
                    for(var r4 = 0; r4 < t1.length; ++r4)e3[r4] = 255 & t1.charCodeAt(r4);
                    return e3;
                }
                a.newBlob = function(e3, r4) {
                    a.checkSupport("blob");
                    try {
                        return new Blob([
                            e3
                        ], {
                            type: r4
                        });
                    } catch (t1) {
                        try {
                            var i5 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return i5.append(e3), i5.getBlob(r4);
                        } catch (t2) {
                            throw new Error("Bug : can't construct the Blob.");
                        }
                    }
                };
                var s1 = {
                    stringifyByChunk: function(t1, e3, r4) {
                        var i6 = [], n4 = 0, s2 = t1.length;
                        if (s2 <= r4) return String.fromCharCode.apply(null, t1);
                        for(; n4 < s2;)"array" === e3 || "nodebuffer" === e3 ? i6.push(String.fromCharCode.apply(null, t1.slice(n4, Math.min(n4 + r4, s2)))) : i6.push(String.fromCharCode.apply(null, t1.subarray(n4, Math.min(n4 + r4, s2)))), n4 += r4;
                        return i6.join("");
                    },
                    stringifyByChar: function(t1) {
                        for(var e3 = "", r4 = 0; r4 < t1.length; r4++)e3 += String.fromCharCode(t1[r4]);
                        return e3;
                    },
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
                            } catch (t1) {
                                return !1;
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return o.nodebuffer && 1 === String.fromCharCode.apply(null, r2.allocBuffer(1)).length;
                            } catch (t1) {
                                return !1;
                            }
                        }()
                    }
                };
                function f(t1) {
                    var e3 = 65536, r4 = a.getTypeOf(t1), i6 = !0;
                    if ("uint8array" === r4 ? i6 = s1.applyCanBeUsed.uint8array : "nodebuffer" === r4 && (i6 = s1.applyCanBeUsed.nodebuffer), i6) for(; 1 < e3;)try {
                        return s1.stringifyByChunk(t1, r4, e3);
                    } catch (t2) {
                        e3 = Math.floor(e3 / 2);
                    }
                    return s1.stringifyByChar(t1);
                }
                function d(t1, e3) {
                    for(var r4 = 0; r4 < t1.length; r4++)e3[r4] = t1[r4];
                    return e3;
                }
                a.applyFromCharCode = f;
                var c = {
                };
                c.string = {
                    string: n3,
                    array: function(t1) {
                        return l(t1, new Array(t1.length));
                    },
                    arraybuffer: function(t1) {
                        return c.string.uint8array(t1).buffer;
                    },
                    uint8array: function(t1) {
                        return l(t1, new Uint8Array(t1.length));
                    },
                    nodebuffer: function(t1) {
                        return l(t1, r2.allocBuffer(t1.length));
                    }
                }, c.array = {
                    string: f,
                    array: n3,
                    arraybuffer: function(t1) {
                        return new Uint8Array(t1).buffer;
                    },
                    uint8array: function(t1) {
                        return new Uint8Array(t1);
                    },
                    nodebuffer: function(t1) {
                        return r2.newBufferFrom(t1);
                    }
                }, c.arraybuffer = {
                    string: function(t1) {
                        return f(new Uint8Array(t1));
                    },
                    array: function(t1) {
                        return d(new Uint8Array(t1), new Array(t1.byteLength));
                    },
                    arraybuffer: n3,
                    uint8array: function(t1) {
                        return new Uint8Array(t1);
                    },
                    nodebuffer: function(t1) {
                        return r2.newBufferFrom(new Uint8Array(t1));
                    }
                }, c.uint8array = {
                    string: f,
                    array: function(t1) {
                        return d(t1, new Array(t1.length));
                    },
                    arraybuffer: function(t1) {
                        return t1.buffer;
                    },
                    uint8array: n3,
                    nodebuffer: function(t1) {
                        return r2.newBufferFrom(t1);
                    }
                }, c.nodebuffer = {
                    string: f,
                    array: function(t1) {
                        return d(t1, new Array(t1.length));
                    },
                    arraybuffer: function(t1) {
                        return c.nodebuffer.uint8array(t1).buffer;
                    },
                    uint8array: function(t1) {
                        return d(t1, new Uint8Array(t1.length));
                    },
                    nodebuffer: n3
                }, a.transformTo = function(t1, e3) {
                    if (e3 = e3 || "", !t1) return e3;
                    a.checkSupport(t1);
                    var r4 = a.getTypeOf(e3);
                    return c[r4][t1](e3);
                }, a.getTypeOf = function(t1) {
                    return "string" == typeof t1 ? "string" : "[object Array]" === Object.prototype.toString.call(t1) ? "array" : o.nodebuffer && r2.isBuffer(t1) ? "nodebuffer" : o.uint8array && t1 instanceof Uint8Array ? "uint8array" : o.arraybuffer && t1 instanceof ArrayBuffer ? "arraybuffer" : void 0;
                }, a.checkSupport = function(t1) {
                    if (!o[t1.toLowerCase()]) throw new Error(t1 + " is not supported by this platform");
                }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(t1) {
                    var e3, r4, i6 = "";
                    for(r4 = 0; r4 < (t1 || "").length; r4++)i6 += "\\x" + ((e3 = t1.charCodeAt(r4)) < 16 ? "0" : "") + e3.toString(16).toUpperCase();
                    return i6;
                }, a.delay = function(t1, e3, r4) {
                    i4(function() {
                        t1.apply(r4 || null, e3 || []);
                    });
                }, a.inherits = function(t1, e3) {
                    function r4() {
                    }
                    r4.prototype = e3.prototype, t1.prototype = new r4;
                }, a.extend = function() {
                    var t1, e3, r4 = {
                    };
                    for(t1 = 0; t1 < arguments.length; t1++)for(e3 in arguments[t1])arguments[t1].hasOwnProperty(e3) && (void 0) === r4[e3] && (r4[e3] = arguments[t1][e3]);
                    return r4;
                }, a.prepareContent = function(r4, t1, i6, n4, s2) {
                    return u.Promise.resolve(t1).then(function(i7) {
                        return o.blob && (i7 instanceof Blob || -1 !== [
                            "[object File]",
                            "[object Blob]"
                        ].indexOf(Object.prototype.toString.call(i7))) && "undefined" != typeof FileReader ? new u.Promise(function(e3, r5) {
                            var t2 = new FileReader;
                            t2.onload = function(t3) {
                                e3(t3.target.result);
                            }, t2.onerror = function(t3) {
                                r5(t3.target.error);
                            }, t2.readAsArrayBuffer(i7);
                        }) : i7;
                    }).then(function(t2) {
                        var e3 = a.getTypeOf(t2);
                        return e3 ? ("arraybuffer" === e3 ? t2 = a.transformTo("uint8array", t2) : "string" === e3 && (s2 ? t2 = h.decode(t2) : i6 && !0 !== n4 && (t2 = (function(t3) {
                            return l(t3, o.uint8array ? new Uint8Array(t3.length) : new Array(t3.length));
                        })(t2))), t2) : u.Promise.reject(new Error("Can't read the data of '" + r4 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                    });
                };
            },
            {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                "set-immediate-shim": 54
            }
        ],
        33: [
            function(t, e2, r2) {
                "use strict";
                var i4 = t("./reader/readerFor"), n3 = t("./utils"), s1 = t("./signature"), a = t("./zipEntry"), o = (t("./utf8"), t("./support"));
                function h(t1) {
                    this.files = [], this.loadOptions = t1;
                }
                h.prototype = {
                    checkSignature: function(t1) {
                        if (!this.reader.readAndCheckSignature(t1)) {
                            this.reader.index -= 4;
                            var e3 = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + n3.pretty(e3) + ", expected " + n3.pretty(t1) + ")");
                        }
                    },
                    isSignature: function(t1, e4) {
                        var r4 = this.reader.index;
                        this.reader.setIndex(t1);
                        var i6 = this.reader.readString(4) === e4;
                        return this.reader.setIndex(r4), i6;
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var t1 = this.reader.readData(this.zipCommentLength), e4 = o.uint8array ? "uint8array" : "array", r4 = n3.transformTo(e4, t1);
                        this.zipComment = this.loadOptions.decodeFileName(r4);
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {
                        };
                        for(var t1, e4, r4, i6 = this.zip64EndOfCentralSize - 44; 0 < i6;)t1 = this.reader.readInt(2), e4 = this.reader.readInt(4), r4 = this.reader.readData(e4), this.zip64ExtensibleData[t1] = {
                            id: t1,
                            length: e4,
                            value: r4
                        };
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
                    },
                    readLocalFiles: function() {
                        var t1, e4;
                        for(t1 = 0; t1 < this.files.length; t1++)e4 = this.files[t1], this.reader.setIndex(e4.localHeaderOffset), this.checkSignature(s1.LOCAL_FILE_HEADER), e4.readLocalPart(this.reader), e4.handleUTF8(), e4.processAttributes();
                    },
                    readCentralDir: function() {
                        var t1;
                        for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s1.CENTRAL_FILE_HEADER);)(t1 = new a({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t1);
                        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                    },
                    readEndOfCentral: function() {
                        var t1 = this.reader.lastIndexOfSignature(s1.CENTRAL_DIRECTORY_END);
                        if (t1 < 0) throw !this.isSignature(0, s1.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
                        this.reader.setIndex(t1);
                        var e4 = t1;
                        if (this.checkSignature(s1.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n3.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n3.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n3.MAX_VALUE_16BITS || this.centralDirRecords === n3.MAX_VALUE_16BITS || this.centralDirSize === n3.MAX_VALUE_32BITS || this.centralDirOffset === n3.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, (t1 = this.reader.lastIndexOfSignature(s1.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if (this.reader.setIndex(t1), this.checkSignature(s1.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s1.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s1.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s1.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                        }
                        var r4 = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (r4 += 20, r4 += 12 + this.zip64EndOfCentralSize);
                        var i6 = e4 - r4;
                        if (0 < i6) this.isSignature(e4, s1.CENTRAL_FILE_HEADER) || (this.reader.zero = i6);
                        else if (i6 < 0) throw new Error("Corrupted zip: missing " + Math.abs(i6) + " bytes.");
                    },
                    prepareReader: function(t1) {
                        this.reader = i4(t1);
                    },
                    load: function(t1) {
                        this.prepareReader(t1), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                    }
                }, e2.exports = h;
            },
            {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntry": 34
            }
        ],
        34: [
            function(t, e2, r2) {
                "use strict";
                var i4 = t("./reader/readerFor"), s1 = t("./utils"), n3 = t("./compressedObject"), a = t("./crc32"), o = t("./utf8"), h = t("./compressions"), u = t("./support");
                function l(t1, e4) {
                    this.options = t1, this.loadOptions = e4;
                }
                l.prototype = {
                    isEncrypted: function() {
                        return 1 == (1 & this.bitFlag);
                    },
                    useUTF8: function() {
                        return 2048 == (2048 & this.bitFlag);
                    },
                    readLocalPart: function(t1) {
                        var e4, r4;
                        if (t1.skip(22), this.fileNameLength = t1.readInt(2), r4 = t1.readInt(2), this.fileName = t1.readData(this.fileNameLength), t1.skip(r4), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if (null === (e4 = (function(t2) {
                            for(var e5 in h)if (h.hasOwnProperty(e5) && h[e5].magic === t2) return h[e5];
                            return null;
                        })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s1.pretty(this.compressionMethod) + " unknown (inner file : " + s1.transformTo("string", this.fileName) + ")");
                        this.decompressed = new n3(this.compressedSize, this.uncompressedSize, this.crc32, e4, t1.readData(this.compressedSize));
                    },
                    readCentralPart: function(t1) {
                        this.versionMadeBy = t1.readInt(2), t1.skip(2), this.bitFlag = t1.readInt(2), this.compressionMethod = t1.readString(2), this.date = t1.readDate(), this.crc32 = t1.readInt(4), this.compressedSize = t1.readInt(4), this.uncompressedSize = t1.readInt(4);
                        var e4 = t1.readInt(2);
                        if (this.extraFieldsLength = t1.readInt(2), this.fileCommentLength = t1.readInt(2), this.diskNumberStart = t1.readInt(2), this.internalFileAttributes = t1.readInt(2), this.externalFileAttributes = t1.readInt(4), this.localHeaderOffset = t1.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        t1.skip(e4), this.readExtraFields(t1), this.parseZIP64ExtraField(t1), this.fileComment = t1.readData(this.fileCommentLength);
                    },
                    processAttributes: function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var t1 = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), 0 == t1 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == t1 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
                    },
                    parseZIP64ExtraField: function(t1) {
                        if (this.extraFields[1]) {
                            var e4 = i4(this.extraFields[1].value);
                            this.uncompressedSize === s1.MAX_VALUE_32BITS && (this.uncompressedSize = e4.readInt(8)), this.compressedSize === s1.MAX_VALUE_32BITS && (this.compressedSize = e4.readInt(8)), this.localHeaderOffset === s1.MAX_VALUE_32BITS && (this.localHeaderOffset = e4.readInt(8)), this.diskNumberStart === s1.MAX_VALUE_32BITS && (this.diskNumberStart = e4.readInt(4));
                        }
                    },
                    readExtraFields: function(t1) {
                        var e5, r4, i6, n4 = t1.index + this.extraFieldsLength;
                        for(this.extraFields || (this.extraFields = {
                        }); t1.index + 4 < n4;)e5 = t1.readInt(2), r4 = t1.readInt(2), i6 = t1.readData(r4), this.extraFields[e5] = {
                            id: e5,
                            length: r4,
                            value: i6
                        };
                        t1.setIndex(n4);
                    },
                    handleUTF8: function() {
                        var t1 = u.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
                        else {
                            var e5 = this.findExtraFieldUnicodePath();
                            if (null !== e5) this.fileNameStr = e5;
                            else {
                                var r4 = s1.transformTo(t1, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(r4);
                            }
                            var i6 = this.findExtraFieldUnicodeComment();
                            if (null !== i6) this.fileCommentStr = i6;
                            else {
                                var n4 = s1.transformTo(t1, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(n4);
                            }
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var t1 = this.extraFields[28789];
                        if (t1) {
                            var e6 = i4(t1.value);
                            return 1 !== e6.readInt(1) ? null : a(this.fileName) !== e6.readInt(4) ? null : o.utf8decode(e6.readData(t1.length - 5));
                        }
                        return null;
                    },
                    findExtraFieldUnicodeComment: function() {
                        var t1 = this.extraFields[25461];
                        if (t1) {
                            var e7 = i4(t1.value);
                            return 1 !== e7.readInt(1) ? null : a(this.fileComment) !== e7.readInt(4) ? null : o.utf8decode(e7.readData(t1.length - 5));
                        }
                        return null;
                    }
                }, e2.exports = l;
            },
            {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }
        ],
        35: [
            function(t, e2, r2) {
                "use strict";
                function i4(t1, e8, r5) {
                    this.name = t1, this.dir = r5.dir, this.date = r5.date, this.comment = r5.comment, this.unixPermissions = r5.unixPermissions, this.dosPermissions = r5.dosPermissions, this._data = e8, this._dataBinary = r5.binary, this.options = {
                        compression: r5.compression,
                        compressionOptions: r5.compressionOptions
                    };
                }
                var s1 = t("./stream/StreamHelper"), n3 = t("./stream/DataWorker"), a = t("./utf8"), o = t("./compressedObject"), h = t("./stream/GenericWorker");
                i4.prototype = {
                    internalStream: function(t1) {
                        var e8 = null, r5 = "string";
                        try {
                            if (!t1) throw new Error("No output type specified.");
                            var i7 = "string" === (r5 = t1.toLowerCase()) || "text" === r5;
                            "binarystring" !== r5 && "text" !== r5 || (r5 = "string"), e8 = this._decompressWorker();
                            var n5 = !this._dataBinary;
                            n5 && !i7 && (e8 = e8.pipe(new a.Utf8EncodeWorker)), !n5 && i7 && (e8 = e8.pipe(new a.Utf8DecodeWorker));
                        } catch (t2) {
                            (e8 = new h("error")).error(t2);
                        }
                        return new s1(e8, r5, "");
                    },
                    async: function(t1, e8) {
                        return this.internalStream(t1).accumulate(e8);
                    },
                    nodeStream: function(t1, e8) {
                        return this.internalStream(t1 || "nodebuffer").toNodejsStream(e8);
                    },
                    _compressWorker: function(t1, e8) {
                        if (this._data instanceof o && this._data.compression.magic === t1.magic) return this._data.getCompressedWorker();
                        var r5 = this._decompressWorker();
                        return this._dataBinary || (r5 = r5.pipe(new a.Utf8EncodeWorker)), o.createWorkerFrom(r5, t1, e8);
                    },
                    _decompressWorker: function() {
                        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new n3(this._data);
                    }
                };
                for(var u = [
                    "asText",
                    "asBinary",
                    "asNodeBuffer",
                    "asUint8Array",
                    "asArrayBuffer"
                ], l = function() {
                    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                }, f = 0; f < u.length; f++)i4.prototype[u[f]] = l;
                e2.exports = i4;
            },
            {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }
        ],
        36: [
            function(t, l, e2) {
                (function(e8) {
                    var r2, i4, t1 = e8.MutationObserver || e8.WebKitMutationObserver;
                    if (t1) {
                        var n3 = 0, s1 = new t1(u), a = e8.document.createTextNode("");
                        s1.observe(a, {
                            characterData: !0
                        }), r2 = function() {
                            a.data = n3 = (++n3) % 2;
                        };
                    } else if (e8.setImmediate || (void 0) === e8.MessageChannel) r2 = "document" in e8 && "onreadystatechange" in e8.document.createElement("script") ? function() {
                        var t2 = e8.document.createElement("script");
                        t2.onreadystatechange = function() {
                            u(), t2.onreadystatechange = null, t2.parentNode.removeChild(t2), t2 = null;
                        }, e8.document.documentElement.appendChild(t2);
                    } : function() {
                        setTimeout(u, 0);
                    };
                    else {
                        var o = new e8.MessageChannel;
                        o.port1.onmessage = u, r2 = function() {
                            o.port2.postMessage(0);
                        };
                    }
                    var h = [];
                    function u() {
                        var t2, e9;
                        i4 = !0;
                        for(var r5 = h.length; r5;){
                            for(e9 = h, h = [], t2 = -1; (++t2) < r5;)e9[t2]();
                            r5 = h.length;
                        }
                        i4 = !1;
                    }
                    l.exports = function(t2) {
                        1 !== h.push(t2) || i4 || r2();
                    };
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {
                });
            },
            {
            }
        ],
        37: [
            function(t, e2, r2) {
                "use strict";
                var n5 = t("immediate");
                function u() {
                }
                var l = {
                }, s2 = [
                    "REJECTED"
                ], a1 = [
                    "FULFILLED"
                ], i4 = [
                    "PENDING"
                ];
                function o(t1) {
                    if ("function" != typeof t1) throw new TypeError("resolver must be a function");
                    this.state = i4, this.queue = [], this.outcome = void 0, t1 !== u && c(this, t1);
                }
                function h1(t1, e8, r5) {
                    this.promise = t1, "function" == typeof e8 && (this.onFulfilled = e8, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r5 && (this.onRejected = r5, this.callRejected = this.otherCallRejected);
                }
                function f(e8, r5, i7) {
                    n5(function() {
                        var t1;
                        try {
                            t1 = r5(i7);
                        } catch (t2) {
                            return l.reject(e8, t2);
                        }
                        t1 === e8 ? l.reject(e8, new TypeError("Cannot resolve promise with itself")) : l.resolve(e8, t1);
                    });
                }
                function d(t1) {
                    var e8 = t1 && t1.then;
                    if (t1 && ("object" == typeof t1 || "function" == typeof t1) && "function" == typeof e8) return function() {
                        e8.apply(t1, arguments);
                    };
                }
                function c(e8, t1) {
                    var r5 = !1;
                    function i7(t2) {
                        r5 || (r5 = !0, l.reject(e8, t2));
                    }
                    function n6(t2) {
                        r5 || (r5 = !0, l.resolve(e8, t2));
                    }
                    var s3 = p(function() {
                        t1(n6, i7);
                    });
                    "error" === s3.status && i7(s3.value);
                }
                function p(t1, e8) {
                    var r5 = {
                    };
                    try {
                        r5.value = t1(e8), r5.status = "success";
                    } catch (t2) {
                        r5.status = "error", r5.value = t2;
                    }
                    return r5;
                }
                (e2.exports = o).prototype.finally = function(e8) {
                    if ("function" != typeof e8) return this;
                    var r5 = this.constructor;
                    return this.then(function(t1) {
                        return r5.resolve(e8()).then(function() {
                            return t1;
                        });
                    }, function(t1) {
                        return r5.resolve(e8()).then(function() {
                            throw t1;
                        });
                    });
                }, o.prototype.catch = function(t1) {
                    return this.then(null, t1);
                }, o.prototype.then = function(t1, e8) {
                    if ("function" != typeof t1 && this.state === a1 || "function" != typeof e8 && this.state === s2) return this;
                    var r5 = new this.constructor(u);
                    this.state !== i4 ? f(r5, this.state === a1 ? t1 : e8, this.outcome) : this.queue.push(new h1(r5, t1, e8));
                    return r5;
                }, h1.prototype.callFulfilled = function(t1) {
                    l.resolve(this.promise, t1);
                }, h1.prototype.otherCallFulfilled = function(t1) {
                    f(this.promise, this.onFulfilled, t1);
                }, h1.prototype.callRejected = function(t1) {
                    l.reject(this.promise, t1);
                }, h1.prototype.otherCallRejected = function(t1) {
                    f(this.promise, this.onRejected, t1);
                }, l.resolve = function(t1, e8) {
                    var r5 = p(d, e8);
                    if ("error" === r5.status) return l.reject(t1, r5.value);
                    var i7 = r5.value;
                    if (i7) c(t1, i7);
                    else {
                        t1.state = a1, t1.outcome = e8;
                        for(var n6 = -1, s3 = t1.queue.length; (++n6) < s3;)t1.queue[n6].callFulfilled(e8);
                    }
                    return t1;
                }, l.reject = function(t1, e8) {
                    t1.state = s2, t1.outcome = e8;
                    for(var r5 = -1, i7 = t1.queue.length; (++r5) < i7;)t1.queue[r5].callRejected(e8);
                    return t1;
                }, o.resolve = function(t1) {
                    if (t1 instanceof this) return t1;
                    return l.resolve(new this(u), t1);
                }, o.reject = function(t1) {
                    var e8 = new this(u);
                    return l.reject(e8, t1);
                }, o.all = function(t1) {
                    var r5 = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t1)) return this.reject(new TypeError("must be an array"));
                    var i7 = t1.length, n7 = !1;
                    if (!i7) return this.resolve([]);
                    var s4 = new Array(i7), a1 = 0, e8 = -1, o1 = new this(u);
                    for(; (++e8) < i7;)h2(t1[e8], e8);
                    function h2(t2, e9) {
                        r5.resolve(t2).then(function(t3) {
                            s4[e9] = t3, (++a1) !== i7 || n7 || (n7 = !0, l.resolve(o1, s4));
                        }, function(t3) {
                            n7 || (n7 = !0, l.reject(o1, t3));
                        });
                    }
                    return o1;
                }, o.race = function(t1) {
                    var e8 = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t1)) return this.reject(new TypeError("must be an array"));
                    var r5 = t1.length, i7 = !1;
                    if (!r5) return this.resolve([]);
                    var n7 = -1, s4 = new this(u);
                    for(; (++n7) < r5;)a2 = t1[n7], e8.resolve(a2).then(function(t2) {
                        i7 || (i7 = !0, l.resolve(s4, t2));
                    }, function(t2) {
                        i7 || (i7 = !0, l.reject(s4, t2));
                    });
                    var a2;
                    return s4;
                };
            },
            {
                immediate: 36
            }
        ],
        38: [
            function(t, e2, r2) {
                "use strict";
                var i4 = {
                };
                t("./lib/utils/common").assign(i4, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e2.exports = i4;
            },
            {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }
        ],
        39: [
            function(t, e2, r2) {
                "use strict";
                var a = t("./zlib/deflate"), o = t("./utils/common"), h = t("./utils/strings"), n5 = t("./zlib/messages"), s2 = t("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, d = 0, c = 8;
                function p(t1) {
                    if (!(this instanceof p)) return new p(t1);
                    this.options = o.assign({
                        level: f,
                        method: c,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: d,
                        to: ""
                    }, t1 || {
                    });
                    var e8 = this.options;
                    e8.raw && 0 < e8.windowBits ? e8.windowBits = -e8.windowBits : e8.gzip && 0 < e8.windowBits && e8.windowBits < 16 && (e8.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s2, this.strm.avail_out = 0;
                    var r5 = a.deflateInit2(this.strm, e8.level, e8.method, e8.windowBits, e8.memLevel, e8.strategy);
                    if (r5 !== l) throw new Error(n5[r5]);
                    if (e8.header && a.deflateSetHeader(this.strm, e8.header), e8.dictionary) {
                        var i4;
                        if (i4 = "string" == typeof e8.dictionary ? h.string2buf(e8.dictionary) : "[object ArrayBuffer]" === u.call(e8.dictionary) ? new Uint8Array(e8.dictionary) : e8.dictionary, (r5 = a.deflateSetDictionary(this.strm, i4)) !== l) throw new Error(n5[r5]);
                        this._dict_set = !0;
                    }
                }
                function i7(t1, e8) {
                    var r5 = new p(e8);
                    if (r5.push(t1, !0), r5.err) throw r5.msg || n5[r5.err];
                    return r5.result;
                }
                p.prototype.push = function(t1, e8) {
                    var r5, i8, n7 = this.strm, s4 = this.options.chunkSize;
                    if (this.ended) return !1;
                    i8 = e8 === ~~e8 ? e8 : !0 === e8 ? 4 : 0, "string" == typeof t1 ? n7.input = h.string2buf(t1) : "[object ArrayBuffer]" === u.call(t1) ? n7.input = new Uint8Array(t1) : n7.input = t1, n7.next_in = 0, n7.avail_in = n7.input.length;
                    do {
                        if (0 === n7.avail_out && (n7.output = new o.Buf8(s4), n7.next_out = 0, n7.avail_out = s4), 1 !== (r5 = a.deflate(n7, i8)) && r5 !== l) return this.onEnd(r5), this.ended = !0, false;
                        0 !== n7.avail_out && (0 !== n7.avail_in || 4 !== i8 && 2 !== i8) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(n7.output, n7.next_out))) : this.onData(o.shrinkBuf(n7.output, n7.next_out)));
                    }while ((0 < n7.avail_in || 0 === n7.avail_out) && 1 !== r5)
                    return 4 === i8 ? (r5 = a.deflateEnd(this.strm), this.onEnd(r5), this.ended = !0, r5 === l) : 2 !== i8 || (this.onEnd(l), n7.avail_out = 0, true);
                }, p.prototype.onData = function(t1) {
                    this.chunks.push(t1);
                }, p.prototype.onEnd = function(t1) {
                    t1 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t1, this.msg = this.strm.msg;
                }, r2.Deflate = p, r2.deflate = i7, r2.deflateRaw = function(t1, e8) {
                    return (e8 = e8 || {
                    }).raw = !0, i7(t1, e8);
                }, r2.gzip = function(t1, e8) {
                    return (e8 = e8 || {
                    }).gzip = !0, i7(t1, e8);
                };
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        40: [
            function(t, e2, r2) {
                "use strict";
                var d = t("./zlib/inflate"), c = t("./utils/common"), p = t("./utils/strings"), m = t("./zlib/constants"), i7 = t("./zlib/messages"), n5 = t("./zlib/zstream"), s2 = t("./zlib/gzheader"), _ = Object.prototype.toString;
                function a(t1) {
                    if (!(this instanceof a)) return new a(t1);
                    this.options = c.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, t1 || {
                    });
                    var e8 = this.options;
                    e8.raw && 0 <= e8.windowBits && e8.windowBits < 16 && (e8.windowBits = -e8.windowBits, 0 === e8.windowBits && (e8.windowBits = -15)), !(0 <= e8.windowBits && e8.windowBits < 16) || t1 && t1.windowBits || (e8.windowBits += 32), 15 < e8.windowBits && e8.windowBits < 48 && 0 == (15 & e8.windowBits) && (e8.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new n5, this.strm.avail_out = 0;
                    var r5 = d.inflateInit2(this.strm, e8.windowBits);
                    if (r5 !== m.Z_OK) throw new Error(i7[r5]);
                    this.header = new s2, d.inflateGetHeader(this.strm, this.header);
                }
                function o(t1, e8) {
                    var r5 = new a(e8);
                    if (r5.push(t1, !0), r5.err) throw r5.msg || i7[r5.err];
                    return r5.result;
                }
                a.prototype.push = function(t1, e8) {
                    var r5, i8, n7, s4, a1, o1, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = !1;
                    if (this.ended) return !1;
                    i8 = e8 === ~~e8 ? e8 : !0 === e8 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof t1 ? h.input = p.binstring2buf(t1) : "[object ArrayBuffer]" === _.call(t1) ? h.input = new Uint8Array(t1) : h.input = t1, h.next_in = 0, h.avail_in = h.input.length;
                    do {
                        if (0 === h.avail_out && (h.output = new c.Buf8(u), h.next_out = 0, h.avail_out = u), (r5 = d.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o1 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r5 = d.inflateSetDictionary(this.strm, o1)), r5 === m.Z_BUF_ERROR && !0 === f && (r5 = m.Z_OK, f = !1), r5 !== m.Z_STREAM_END && r5 !== m.Z_OK) return this.onEnd(r5), this.ended = !0, false;
                        h.next_out && (0 !== h.avail_out && r5 !== m.Z_STREAM_END && (0 !== h.avail_in || i8 !== m.Z_FINISH && i8 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n7 = p.utf8border(h.output, h.next_out), s4 = h.next_out - n7, a1 = p.buf2string(h.output, n7), h.next_out = s4, h.avail_out = u - s4, s4 && c.arraySet(h.output, h.output, n7, s4, 0), this.onData(a1)) : this.onData(c.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
                    }while ((0 < h.avail_in || 0 === h.avail_out) && r5 !== m.Z_STREAM_END)
                    return r5 === m.Z_STREAM_END && (i8 = m.Z_FINISH), i8 === m.Z_FINISH ? (r5 = d.inflateEnd(this.strm), this.onEnd(r5), this.ended = !0, r5 === m.Z_OK) : i8 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), h.avail_out = 0, true);
                }, a.prototype.onData = function(t1) {
                    this.chunks.push(t1);
                }, a.prototype.onEnd = function(t1) {
                    t1 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = t1, this.msg = this.strm.msg;
                }, r2.Inflate = a, r2.inflate = o, r2.inflateRaw = function(t1, e8) {
                    return (e8 = e8 || {
                    }).raw = !0, o(t1, e8);
                }, r2.ungzip = o;
            },
            {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }
        ],
        41: [
            function(t, e2, r2) {
                "use strict";
                var i7 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                r2.assign = function(t1) {
                    for(var e8 = Array.prototype.slice.call(arguments, 1); e8.length;){
                        var r5 = e8.shift();
                        if (r5) {
                            if ("object" != typeof r5) throw new TypeError(r5 + "must be non-object");
                            for(var i8 in r5)r5.hasOwnProperty(i8) && (t1[i8] = r5[i8]);
                        }
                    }
                    return t1;
                }, r2.shrinkBuf = function(t1, e8) {
                    return t1.length === e8 ? t1 : t1.subarray ? t1.subarray(0, e8) : (t1.length = e8, t1);
                };
                var n5 = {
                    arraySet: function(t1, e8, r6, i9, n7) {
                        if (e8.subarray && t1.subarray) t1.set(e8.subarray(r6, r6 + i9), n7);
                        else for(var s2 = 0; s2 < i9; s2++)t1[n7 + s2] = e8[r6 + s2];
                    },
                    flattenChunks: function(t1) {
                        var e8, r6, i9, n7, s2, a;
                        for(e8 = i9 = 0, r6 = t1.length; e8 < r6; e8++)i9 += t1[e8].length;
                        for(a = new Uint8Array(i9), e8 = n7 = 0, r6 = t1.length; e8 < r6; e8++)s2 = t1[e8], a.set(s2, n7), n7 += s2.length;
                        return a;
                    }
                }, s2 = {
                    arraySet: function(t1, e8, r6, i9, n7) {
                        for(var s4 = 0; s4 < i9; s4++)t1[n7 + s4] = e8[r6 + s4];
                    },
                    flattenChunks: function(t1) {
                        return [].concat.apply([], t1);
                    }
                };
                r2.setTyped = function(t1) {
                    t1 ? (r2.Buf8 = Uint8Array, r2.Buf16 = Uint16Array, r2.Buf32 = Int32Array, r2.assign(r2, n5)) : (r2.Buf8 = Array, r2.Buf16 = Array, r2.Buf32 = Array, r2.assign(r2, s2));
                }, r2.setTyped(i7);
            },
            {
            }
        ],
        42: [
            function(t, e2, r2) {
                "use strict";
                var h = t("./common"), n5 = !0, s2 = !0;
                try {
                    String.fromCharCode.apply(null, [
                        0
                    ]);
                } catch (t1) {
                    n5 = !1;
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (t1) {
                    s2 = !1;
                }
                for(var u = new h.Buf8(256), i7 = 0; i7 < 256; i7++)u[i7] = 252 <= i7 ? 6 : 248 <= i7 ? 5 : 240 <= i7 ? 4 : 224 <= i7 ? 3 : 192 <= i7 ? 2 : 1;
                function l(t1, e8) {
                    if (e8 < 65537 && (t1.subarray && s2 || !t1.subarray && n5)) return String.fromCharCode.apply(null, h.shrinkBuf(t1, e8));
                    for(var r6 = "", i9 = 0; i9 < e8; i9++)r6 += String.fromCharCode(t1[i9]);
                    return r6;
                }
                u[254] = u[254] = 1, r2.string2buf = function(t1) {
                    var e8, r6, i9, n7, s4, a = t1.length, o = 0;
                    for(n7 = 0; n7 < a; n7++)55296 == (64512 & (r6 = t1.charCodeAt(n7))) && n7 + 1 < a && 56320 == (64512 & (i9 = t1.charCodeAt(n7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (i9 - 56320), n7++), o += r6 < 128 ? 1 : r6 < 2048 ? 2 : r6 < 65536 ? 3 : 4;
                    for(e8 = new h.Buf8(o), n7 = s4 = 0; s4 < o; n7++)55296 == (64512 & (r6 = t1.charCodeAt(n7))) && n7 + 1 < a && 56320 == (64512 & (i9 = t1.charCodeAt(n7 + 1))) && (r6 = 65536 + (r6 - 55296 << 10) + (i9 - 56320), n7++), r6 < 128 ? e8[s4++] = r6 : (r6 < 2048 ? e8[s4++] = 192 | r6 >>> 6 : (r6 < 65536 ? e8[s4++] = 224 | r6 >>> 12 : (e8[s4++] = 240 | r6 >>> 18, e8[s4++] = 128 | r6 >>> 12 & 63), e8[s4++] = 128 | r6 >>> 6 & 63), e8[s4++] = 128 | 63 & r6);
                    return e8;
                }, r2.buf2binstring = function(t1) {
                    return l(t1, t1.length);
                }, r2.binstring2buf = function(t1) {
                    for(var e8 = new h.Buf8(t1.length), r6 = 0, i9 = e8.length; r6 < i9; r6++)e8[r6] = t1.charCodeAt(r6);
                    return e8;
                }, r2.buf2string = function(t1, e8) {
                    var r6, i9, n7, s4, a = e8 || t1.length, o = new Array(2 * a);
                    for(r6 = i9 = 0; r6 < a;)if ((n7 = t1[r6++]) < 128) o[i9++] = n7;
                    else if (4 < (s4 = u[n7])) o[i9++] = 65533, r6 += s4 - 1;
                    else {
                        for(n7 &= 2 === s4 ? 31 : 3 === s4 ? 15 : 7; 1 < s4 && r6 < a;)n7 = n7 << 6 | 63 & t1[r6++], s4--;
                        1 < s4 ? o[i9++] = 65533 : n7 < 65536 ? o[i9++] = n7 : (n7 -= 65536, o[i9++] = 55296 | n7 >> 10 & 1023, o[i9++] = 56320 | 1023 & n7);
                    }
                    return l(o, i9);
                }, r2.utf8border = function(t1, e8) {
                    var r6;
                    for((e8 = e8 || t1.length) > t1.length && (e8 = t1.length), r6 = e8 - 1; 0 <= r6 && 128 == (192 & t1[r6]);)r6--;
                    return r6 < 0 ? e8 : 0 === r6 ? e8 : r6 + u[t1[r6]] > e8 ? r6 : e8;
                };
            },
            {
                "./common": 41
            }
        ],
        43: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = function(t1, e8, r6, i7) {
                    for(var n5 = 65535 & t1 | 0, s2 = t1 >>> 16 & 65535 | 0, a = 0; 0 !== r6;){
                        for(r6 -= a = 2000 < r6 ? 2000 : r6; s2 = s2 + (n5 = n5 + e8[i7++] | 0) | 0, --a;);
                        n5 %= 65521, s2 %= 65521;
                    }
                    return n5 | s2 << 16 | 0;
                };
            },
            {
            }
        ],
        44: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                };
            },
            {
            }
        ],
        45: [
            function(t, e2, r2) {
                "use strict";
                var o = function() {
                    for(var t1, e8 = [], r6 = 0; r6 < 256; r6++){
                        t1 = r6;
                        for(var i7 = 0; i7 < 8; i7++)t1 = 1 & t1 ? 3988292384 ^ t1 >>> 1 : t1 >>> 1;
                        e8[r6] = t1;
                    }
                    return e8;
                }();
                e2.exports = function(t1, e8, r6, i9) {
                    var n5 = o, s2 = i9 + r6;
                    t1 ^= -1;
                    for(var a = i9; a < s2; a++)t1 = t1 >>> 8 ^ n5[255 & (t1 ^ e8[a])];
                    return -1 ^ t1;
                };
            },
            {
            }
        ],
        46: [
            function(t, e2, r2) {
                "use strict";
                var h, d = t("../utils/common"), u = t("./trees"), c = t("./adler32"), p = t("./crc32"), i9 = t("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, n5 = 2, v = 8, y = 9, s2 = 286, a = 30, o = 19, w = 2 * s2 + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
                function R(t1, e8) {
                    return t1.msg = i9[e8], e8;
                }
                function T(t1) {
                    return (t1 << 1) - (4 < t1 ? 9 : 0);
                }
                function D(t1) {
                    for(var e8 = t1.length; 0 <= --e8;)t1[e8] = 0;
                }
                function F(t1) {
                    var e8 = t1.state, r6 = e8.pending;
                    r6 > t1.avail_out && (r6 = t1.avail_out), 0 !== r6 && (d.arraySet(t1.output, e8.pending_buf, e8.pending_out, r6, t1.next_out), t1.next_out += r6, e8.pending_out += r6, t1.total_out += r6, t1.avail_out -= r6, e8.pending -= r6, 0 === e8.pending && (e8.pending_out = 0));
                }
                function N(t1, e8) {
                    u._tr_flush_block(t1, 0 <= t1.block_start ? t1.block_start : -1, t1.strstart - t1.block_start, e8), t1.block_start = t1.strstart, F(t1.strm);
                }
                function U(t1, e8) {
                    t1.pending_buf[t1.pending++] = e8;
                }
                function P(t1, e8) {
                    t1.pending_buf[t1.pending++] = e8 >>> 8 & 255, t1.pending_buf[t1.pending++] = 255 & e8;
                }
                function L(t1, e8) {
                    var r6, i10, n7 = t1.max_chain_length, s4 = t1.strstart, a1 = t1.prev_length, o1 = t1.nice_match, h1 = t1.strstart > t1.w_size - z ? t1.strstart - (t1.w_size - z) : 0, u1 = t1.window, l1 = t1.w_mask, f1 = t1.prev, d1 = t1.strstart + S, c1 = u1[s4 + a1 - 1], p1 = u1[s4 + a1];
                    t1.prev_length >= t1.good_match && (n7 >>= 2), o1 > t1.lookahead && (o1 = t1.lookahead);
                    do if (u1[(r6 = e8) + a1] === p1 && u1[r6 + a1 - 1] === c1 && u1[r6] === u1[s4] && u1[++r6] === u1[s4 + 1]) {
                        s4 += 2, r6++;
                        do ;
                        while (u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && u1[++s4] === u1[++r6] && s4 < d1)
                        if (i10 = S - (d1 - s4), s4 = d1 - S, a1 < i10) {
                            if (t1.match_start = e8, o1 <= (a1 = i10)) break;
                            c1 = u1[s4 + a1 - 1], p1 = u1[s4 + a1];
                        }
                    }
                    while ((e8 = f1[e8 & l1]) > h1 && 0 != --n7)
                    return a1 <= t1.lookahead ? a1 : t1.lookahead;
                }
                function j(t1) {
                    var e8, r6, i10, n7, s4, a1, o1, h1, u1, l1, f1 = t1.w_size;
                    do {
                        if (n7 = t1.window_size - t1.lookahead - t1.strstart, t1.strstart >= f1 + (f1 - z)) {
                            for(d.arraySet(t1.window, t1.window, f1, f1, 0), t1.match_start -= f1, t1.strstart -= f1, t1.block_start -= f1, e8 = r6 = t1.hash_size; i10 = t1.head[--e8], t1.head[e8] = f1 <= i10 ? i10 - f1 : 0, --r6;);
                            for(e8 = r6 = f1; i10 = t1.prev[--e8], t1.prev[e8] = f1 <= i10 ? i10 - f1 : 0, --r6;);
                            n7 += f1;
                        }
                        if (0 === t1.strm.avail_in) break;
                        if (a1 = t1.strm, o1 = t1.window, h1 = t1.strstart + t1.lookahead, u1 = n7, l1 = void 0, l1 = a1.avail_in, u1 < l1 && (l1 = u1), r6 = 0 === l1 ? 0 : (a1.avail_in -= l1, d.arraySet(o1, a1.input, a1.next_in, l1, h1), 1 === a1.state.wrap ? a1.adler = c(a1.adler, o1, l1, h1) : 2 === a1.state.wrap && (a1.adler = p(a1.adler, o1, l1, h1)), a1.next_in += l1, a1.total_in += l1, l1), t1.lookahead += r6, t1.lookahead + t1.insert >= x) for(s4 = t1.strstart - t1.insert, t1.ins_h = t1.window[s4], t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[s4 + 1]) & t1.hash_mask; t1.insert && (t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[s4 + x - 1]) & t1.hash_mask, t1.prev[s4 & t1.w_mask] = t1.head[t1.ins_h], t1.head[t1.ins_h] = s4, s4++, t1.insert--, !(t1.lookahead + t1.insert < x)););
                    }while (t1.lookahead < z && 0 !== t1.strm.avail_in)
                }
                function Z(t1, e8) {
                    for(var r6, i10;;){
                        if (t1.lookahead < z) {
                            if (j(t1), t1.lookahead < z && e8 === l) return A;
                            if (0 === t1.lookahead) break;
                        }
                        if (r6 = 0, t1.lookahead >= x && (t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[t1.strstart + x - 1]) & t1.hash_mask, r6 = t1.prev[t1.strstart & t1.w_mask] = t1.head[t1.ins_h], t1.head[t1.ins_h] = t1.strstart), 0 !== r6 && t1.strstart - r6 <= t1.w_size - z && (t1.match_length = L(t1, r6)), t1.match_length >= x) {
                            if (i10 = u._tr_tally(t1, t1.strstart - t1.match_start, t1.match_length - x), t1.lookahead -= t1.match_length, t1.match_length <= t1.max_lazy_match && t1.lookahead >= x) {
                                for(t1.match_length--; t1.strstart++, t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[t1.strstart + x - 1]) & t1.hash_mask, r6 = t1.prev[t1.strstart & t1.w_mask] = t1.head[t1.ins_h], t1.head[t1.ins_h] = t1.strstart, 0 != --t1.match_length;);
                                t1.strstart++;
                            } else t1.strstart += t1.match_length, t1.match_length = 0, t1.ins_h = t1.window[t1.strstart], t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[t1.strstart + 1]) & t1.hash_mask;
                        } else i10 = u._tr_tally(t1, 0, t1.window[t1.strstart]), t1.lookahead--, t1.strstart++;
                        if (i10 && (N(t1, !1), 0 === t1.strm.avail_out)) return A;
                    }
                    return t1.insert = t1.strstart < x - 1 ? t1.strstart : x - 1, e8 === f ? (N(t1, !0), 0 === t1.strm.avail_out ? O : B) : t1.last_lit && (N(t1, !1), 0 === t1.strm.avail_out) ? A : I;
                }
                function W(t1, e8) {
                    for(var r6, i10, n7;;){
                        if (t1.lookahead < z) {
                            if (j(t1), t1.lookahead < z && e8 === l) return A;
                            if (0 === t1.lookahead) break;
                        }
                        if (r6 = 0, t1.lookahead >= x && (t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[t1.strstart + x - 1]) & t1.hash_mask, r6 = t1.prev[t1.strstart & t1.w_mask] = t1.head[t1.ins_h], t1.head[t1.ins_h] = t1.strstart), t1.prev_length = t1.match_length, t1.prev_match = t1.match_start, t1.match_length = x - 1, 0 !== r6 && t1.prev_length < t1.max_lazy_match && t1.strstart - r6 <= t1.w_size - z && (t1.match_length = L(t1, r6), t1.match_length <= 5 && (1 === t1.strategy || t1.match_length === x && 4096 < t1.strstart - t1.match_start) && (t1.match_length = x - 1)), t1.prev_length >= x && t1.match_length <= t1.prev_length) {
                            for(n7 = t1.strstart + t1.lookahead - x, i10 = u._tr_tally(t1, t1.strstart - 1 - t1.prev_match, t1.prev_length - x), t1.lookahead -= t1.prev_length - 1, t1.prev_length -= 2; (++t1.strstart) <= n7 && (t1.ins_h = (t1.ins_h << t1.hash_shift ^ t1.window[t1.strstart + x - 1]) & t1.hash_mask, r6 = t1.prev[t1.strstart & t1.w_mask] = t1.head[t1.ins_h], t1.head[t1.ins_h] = t1.strstart), 0 != --t1.prev_length;);
                            if (t1.match_available = 0, t1.match_length = x - 1, t1.strstart++, i10 && (N(t1, !1), 0 === t1.strm.avail_out)) return A;
                        } else if (t1.match_available) {
                            if ((i10 = u._tr_tally(t1, 0, t1.window[t1.strstart - 1])) && N(t1, !1), t1.strstart++, t1.lookahead--, 0 === t1.strm.avail_out) return A;
                        } else t1.match_available = 1, t1.strstart++, t1.lookahead--;
                    }
                    return t1.match_available && (i10 = u._tr_tally(t1, 0, t1.window[t1.strstart - 1]), t1.match_available = 0), t1.insert = t1.strstart < x - 1 ? t1.strstart : x - 1, e8 === f ? (N(t1, !0), 0 === t1.strm.avail_out ? O : B) : t1.last_lit && (N(t1, !1), 0 === t1.strm.avail_out) ? A : I;
                }
                function M(t1, e8, r6, i10, n7) {
                    this.good_length = t1, this.max_lazy = e8, this.nice_length = r6, this.max_chain = i10, this.func = n7;
                }
                function H() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * w), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(k + 1), this.heap = new d.Buf16(2 * s2 + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s2 + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                }
                function G(t1) {
                    var e8;
                    return t1 && t1.state ? (t1.total_in = t1.total_out = 0, t1.data_type = n5, (e8 = t1.state).pending = 0, e8.pending_out = 0, e8.wrap < 0 && (e8.wrap = -e8.wrap), e8.status = e8.wrap ? C : E, t1.adler = 2 === e8.wrap ? 0 : 1, e8.last_flush = l, u._tr_init(e8), m) : R(t1, _);
                }
                function K(t1) {
                    var e8 = G(t1);
                    return e8 === m && (function(t2) {
                        t2.window_size = 2 * t2.w_size, D(t2.head), t2.max_lazy_match = h[t2.level].max_lazy, t2.good_match = h[t2.level].good_length, t2.nice_match = h[t2.level].nice_length, t2.max_chain_length = h[t2.level].max_chain, t2.strstart = 0, t2.block_start = 0, t2.lookahead = 0, t2.insert = 0, t2.match_length = t2.prev_length = x - 1, t2.match_available = 0, t2.ins_h = 0;
                    })(t1.state), e8;
                }
                function Y(t1, e8, r6, i10, n7, s4) {
                    if (!t1) return _;
                    var a1 = 1;
                    if (e8 === g && (e8 = 6), i10 < 0 ? (a1 = 0, i10 = -i10) : 15 < i10 && (a1 = 2, i10 -= 16), n7 < 1 || y < n7 || r6 !== v || i10 < 8 || 15 < i10 || e8 < 0 || 9 < e8 || s4 < 0 || b < s4) return R(t1, _);
                    8 === i10 && (i10 = 9);
                    var o1 = new H;
                    return (t1.state = o1).strm = t1, o1.wrap = a1, o1.gzhead = null, o1.w_bits = i10, o1.w_size = 1 << o1.w_bits, o1.w_mask = o1.w_size - 1, o1.hash_bits = n7 + 7, o1.hash_size = 1 << o1.hash_bits, o1.hash_mask = o1.hash_size - 1, o1.hash_shift = ~~((o1.hash_bits + x - 1) / x), o1.window = new d.Buf8(2 * o1.w_size), o1.head = new d.Buf16(o1.hash_size), o1.prev = new d.Buf16(o1.w_size), o1.lit_bufsize = 1 << n7 + 6, o1.pending_buf_size = 4 * o1.lit_bufsize, o1.pending_buf = new d.Buf8(o1.pending_buf_size), o1.d_buf = 1 * o1.lit_bufsize, o1.l_buf = 3 * o1.lit_bufsize, o1.level = e8, o1.strategy = s4, o1.method = r6, K(t1);
                }
                h = [
                    new M(0, 0, 0, 0, function(t1, e8) {
                        var r6 = 65535;
                        for(r6 > t1.pending_buf_size - 5 && (r6 = t1.pending_buf_size - 5);;){
                            if (t1.lookahead <= 1) {
                                if (j(t1), 0 === t1.lookahead && e8 === l) return A;
                                if (0 === t1.lookahead) break;
                            }
                            t1.strstart += t1.lookahead, t1.lookahead = 0;
                            var i10 = t1.block_start + r6;
                            if ((0 === t1.strstart || t1.strstart >= i10) && (t1.lookahead = t1.strstart - i10, t1.strstart = i10, N(t1, !1), 0 === t1.strm.avail_out)) return A;
                            if (t1.strstart - t1.block_start >= t1.w_size - z && (N(t1, !1), 0 === t1.strm.avail_out)) return A;
                        }
                        return t1.insert = 0, e8 === f ? (N(t1, !0), 0 === t1.strm.avail_out ? O : B) : (t1.strstart > t1.block_start && (N(t1, !1), t1.strm.avail_out), A);
                    }),
                    new M(4, 4, 8, 4, Z),
                    new M(4, 5, 16, 8, Z),
                    new M(4, 6, 32, 32, Z),
                    new M(4, 4, 16, 16, W),
                    new M(8, 16, 32, 32, W),
                    new M(8, 16, 128, 128, W),
                    new M(8, 32, 128, 256, W),
                    new M(32, 128, 258, 1024, W),
                    new M(32, 258, 258, 4096, W)
                ], r2.deflateInit = function(t1, e8) {
                    return Y(t1, e8, v, 15, 8, 0);
                }, r2.deflateInit2 = Y, r2.deflateReset = K, r2.deflateResetKeep = G, r2.deflateSetHeader = function(t1, e8) {
                    return t1 && t1.state ? 2 !== t1.state.wrap ? _ : (t1.state.gzhead = e8, m) : _;
                }, r2.deflate = function(t1, e8) {
                    var r6, i11, n7, s4;
                    if (!t1 || !t1.state || 5 < e8 || e8 < 0) return t1 ? R(t1, _) : _;
                    if (i11 = t1.state, !t1.output || !t1.input && 0 !== t1.avail_in || 666 === i11.status && e8 !== f) return R(t1, 0 === t1.avail_out ? -5 : _);
                    if (i11.strm = t1, r6 = i11.last_flush, i11.last_flush = e8, i11.status === C) {
                        if (2 === i11.wrap) t1.adler = 0, U(i11, 31), U(i11, 139), U(i11, 8), i11.gzhead ? (U(i11, (i11.gzhead.text ? 1 : 0) + (i11.gzhead.hcrc ? 2 : 0) + (i11.gzhead.extra ? 4 : 0) + (i11.gzhead.name ? 8 : 0) + (i11.gzhead.comment ? 16 : 0)), U(i11, 255 & i11.gzhead.time), U(i11, i11.gzhead.time >> 8 & 255), U(i11, i11.gzhead.time >> 16 & 255), U(i11, i11.gzhead.time >> 24 & 255), U(i11, 9 === i11.level ? 2 : 2 <= i11.strategy || i11.level < 2 ? 4 : 0), U(i11, 255 & i11.gzhead.os), i11.gzhead.extra && i11.gzhead.extra.length && (U(i11, 255 & i11.gzhead.extra.length), U(i11, i11.gzhead.extra.length >> 8 & 255)), i11.gzhead.hcrc && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending, 0)), i11.gzindex = 0, i11.status = 69) : (U(i11, 0), U(i11, 0), U(i11, 0), U(i11, 0), U(i11, 0), U(i11, 9 === i11.level ? 2 : 2 <= i11.strategy || i11.level < 2 ? 4 : 0), U(i11, 3), i11.status = E);
                        else {
                            var a1 = v + (i11.w_bits - 8 << 4) << 8;
                            a1 |= (2 <= i11.strategy || i11.level < 2 ? 0 : i11.level < 6 ? 1 : 6 === i11.level ? 2 : 3) << 6, 0 !== i11.strstart && (a1 |= 32), a1 += 31 - a1 % 31, i11.status = E, P(i11, a1), 0 !== i11.strstart && (P(i11, t1.adler >>> 16), P(i11, 65535 & t1.adler)), t1.adler = 1;
                        }
                    }
                    if (69 === i11.status) {
                        if (i11.gzhead.extra) {
                            for(n7 = i11.pending; i11.gzindex < (65535 & i11.gzhead.extra.length) && (i11.pending !== i11.pending_buf_size || (i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), F(t1), n7 = i11.pending, i11.pending !== i11.pending_buf_size));)U(i11, 255 & i11.gzhead.extra[i11.gzindex]), i11.gzindex++;
                            i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), i11.gzindex === i11.gzhead.extra.length && (i11.gzindex = 0, i11.status = 73);
                        } else i11.status = 73;
                    }
                    if (73 === i11.status) {
                        if (i11.gzhead.name) {
                            n7 = i11.pending;
                            do {
                                if (i11.pending === i11.pending_buf_size && (i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), F(t1), n7 = i11.pending, i11.pending === i11.pending_buf_size)) {
                                    s4 = 1;
                                    break;
                                }
                                s4 = i11.gzindex < i11.gzhead.name.length ? 255 & i11.gzhead.name.charCodeAt(i11.gzindex++) : 0, U(i11, s4);
                            }while (0 !== s4)
                            i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), 0 === s4 && (i11.gzindex = 0, i11.status = 91);
                        } else i11.status = 91;
                    }
                    if (91 === i11.status) {
                        if (i11.gzhead.comment) {
                            n7 = i11.pending;
                            do {
                                if (i11.pending === i11.pending_buf_size && (i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), F(t1), n7 = i11.pending, i11.pending === i11.pending_buf_size)) {
                                    s4 = 1;
                                    break;
                                }
                                s4 = i11.gzindex < i11.gzhead.comment.length ? 255 & i11.gzhead.comment.charCodeAt(i11.gzindex++) : 0, U(i11, s4);
                            }while (0 !== s4)
                            i11.gzhead.hcrc && i11.pending > n7 && (t1.adler = p(t1.adler, i11.pending_buf, i11.pending - n7, n7)), 0 === s4 && (i11.status = 103);
                        } else i11.status = 103;
                    }
                    if (103 === i11.status && (i11.gzhead.hcrc ? (i11.pending + 2 > i11.pending_buf_size && F(t1), i11.pending + 2 <= i11.pending_buf_size && (U(i11, 255 & t1.adler), U(i11, t1.adler >> 8 & 255), t1.adler = 0, i11.status = E)) : i11.status = E), 0 !== i11.pending) {
                        if (F(t1), 0 === t1.avail_out) return i11.last_flush = -1, m;
                    } else if (0 === t1.avail_in && T(e8) <= T(r6) && e8 !== f) return R(t1, -5);
                    if (666 === i11.status && 0 !== t1.avail_in) return R(t1, -5);
                    if (0 !== t1.avail_in || 0 !== i11.lookahead || e8 !== l && 666 !== i11.status) {
                        var o1 = 2 === i11.strategy ? function(t2, e9) {
                            for(var r7;;){
                                if (0 === t2.lookahead && (j(t2), 0 === t2.lookahead)) {
                                    if (e9 === l) return A;
                                    break;
                                }
                                if (t2.match_length = 0, r7 = u._tr_tally(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++, r7 && (N(t2, !1), 0 === t2.strm.avail_out)) return A;
                            }
                            return t2.insert = 0, e9 === f ? (N(t2, !0), 0 === t2.strm.avail_out ? O : B) : t2.last_lit && (N(t2, !1), 0 === t2.strm.avail_out) ? A : I;
                        }(i11, e8) : 3 === i11.strategy ? function(t2, e9) {
                            for(var r7, i12, n8, s5, a2 = t2.window;;){
                                if (t2.lookahead <= S) {
                                    if (j(t2), t2.lookahead <= S && e9 === l) return A;
                                    if (0 === t2.lookahead) break;
                                }
                                if (t2.match_length = 0, t2.lookahead >= x && 0 < t2.strstart && (i12 = a2[n8 = t2.strstart - 1]) === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8]) {
                                    s5 = t2.strstart + S;
                                    do ;
                                    while (i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && i12 === a2[++n8] && n8 < s5)
                                    t2.match_length = S - (s5 - n8), t2.match_length > t2.lookahead && (t2.match_length = t2.lookahead);
                                }
                                if (t2.match_length >= x ? (r7 = u._tr_tally(t2, 1, t2.match_length - x), t2.lookahead -= t2.match_length, t2.strstart += t2.match_length, t2.match_length = 0) : (r7 = u._tr_tally(t2, 0, t2.window[t2.strstart]), t2.lookahead--, t2.strstart++), r7 && (N(t2, !1), 0 === t2.strm.avail_out)) return A;
                            }
                            return t2.insert = 0, e9 === f ? (N(t2, !0), 0 === t2.strm.avail_out ? O : B) : t2.last_lit && (N(t2, !1), 0 === t2.strm.avail_out) ? A : I;
                        }(i11, e8) : h[i11.level].func(i11, e8);
                        if (o1 !== O && o1 !== B || (i11.status = 666), o1 === A || o1 === O) return 0 === t1.avail_out && (i11.last_flush = -1), m;
                        if (o1 === I && (1 === e8 ? u._tr_align(i11) : 5 !== e8 && (u._tr_stored_block(i11, 0, 0, !1), 3 === e8 && (D(i11.head), 0 === i11.lookahead && (i11.strstart = 0, i11.block_start = 0, i11.insert = 0))), F(t1), 0 === t1.avail_out)) return i11.last_flush = -1, m;
                    }
                    return e8 !== f ? m : i11.wrap <= 0 ? 1 : (2 === i11.wrap ? (U(i11, 255 & t1.adler), U(i11, t1.adler >> 8 & 255), U(i11, t1.adler >> 16 & 255), U(i11, t1.adler >> 24 & 255), U(i11, 255 & t1.total_in), U(i11, t1.total_in >> 8 & 255), U(i11, t1.total_in >> 16 & 255), U(i11, t1.total_in >> 24 & 255)) : (P(i11, t1.adler >>> 16), P(i11, 65535 & t1.adler)), F(t1), 0 < i11.wrap && (i11.wrap = -i11.wrap), 0 !== i11.pending ? m : 1);
                }, r2.deflateEnd = function(t1) {
                    var e8;
                    return t1 && t1.state ? (e8 = t1.state.status) !== C && 69 !== e8 && 73 !== e8 && 91 !== e8 && 103 !== e8 && e8 !== E && 666 !== e8 ? R(t1, _) : (t1.state = null, e8 === E ? R(t1, -3) : m) : _;
                }, r2.deflateSetDictionary = function(t1, e8) {
                    var r6, i11, n7, s4, a2, o2, h1, u1, l1 = e8.length;
                    if (!t1 || !t1.state) return _;
                    if (2 === (s4 = (r6 = t1.state).wrap) || 1 === s4 && r6.status !== C || r6.lookahead) return _;
                    for(1 === s4 && (t1.adler = c(t1.adler, e8, l1, 0)), r6.wrap = 0, l1 >= r6.w_size && (0 === s4 && (D(r6.head), r6.strstart = 0, r6.block_start = 0, r6.insert = 0), u1 = new d.Buf8(r6.w_size), d.arraySet(u1, e8, l1 - r6.w_size, r6.w_size, 0), e8 = u1, l1 = r6.w_size), a2 = t1.avail_in, o2 = t1.next_in, h1 = t1.input, t1.avail_in = l1, t1.next_in = 0, t1.input = e8, j(r6); r6.lookahead >= x;){
                        for(i11 = r6.strstart, n7 = r6.lookahead - (x - 1); r6.ins_h = (r6.ins_h << r6.hash_shift ^ r6.window[i11 + x - 1]) & r6.hash_mask, r6.prev[i11 & r6.w_mask] = r6.head[r6.ins_h], r6.head[r6.ins_h] = i11, i11++, --n7;);
                        r6.strstart = i11, r6.lookahead = x - 1, j(r6);
                    }
                    return r6.strstart += r6.lookahead, r6.block_start = r6.strstart, r6.insert = r6.lookahead, r6.lookahead = 0, r6.match_length = r6.prev_length = x - 1, r6.match_available = 0, t1.next_in = o2, t1.input = h1, t1.avail_in = a2, r6.wrap = s4, m;
                }, r2.deflateInfo = "pako deflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }
        ],
        47: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
                };
            },
            {
            }
        ],
        48: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = function(t1, e8) {
                    var r6, i9, n5, s2, a2, o2, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z, C;
                    r6 = t1.state, i9 = t1.next_in, z = t1.input, n5 = i9 + (t1.avail_in - 5), s2 = t1.next_out, C = t1.output, a2 = s2 - (e8 - t1.avail_out), o2 = s2 + (t1.avail_out - 257), h = r6.dmax, u = r6.wsize, l = r6.whave, f = r6.wnext, d = r6.window, c = r6.hold, p = r6.bits, m = r6.lencode, _ = r6.distcode, g = (1 << r6.lenbits) - 1, b = (1 << r6.distbits) - 1;
                    t: do {
                        p < 15 && (c += z[i9++] << p, p += 8, c += z[i9++] << p, p += 8), v = m[c & g];
                        e: for(;;){
                            if (c >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s2++] = 65535 & v;
                            else {
                                if (!(16 & y)) {
                                    if (0 == (64 & y)) {
                                        v = m[(65535 & v) + (c & (1 << y) - 1)];
                                        continue e;
                                    }
                                    if (32 & y) {
                                        r6.mode = 12;
                                        break t;
                                    }
                                    t1.msg = "invalid literal/length code", r6.mode = 30;
                                    break t;
                                }
                                w = 65535 & v, y &= 15, p < y && (c += z[i9++] << p, p += 8), w += c & (1 << y) - 1, c >>>= y, p -= y, p < 15 && (c += z[i9++] << p, p += 8, c += z[i9++] << p, p += 8), v = _[c & b];
                                r: for(;;){
                                    if (c >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                                        if (0 == (64 & y)) {
                                            v = _[(65535 & v) + (c & (1 << y) - 1)];
                                            continue r;
                                        }
                                        t1.msg = "invalid distance code", r6.mode = 30;
                                        break t;
                                    }
                                    if (k = 65535 & v, p < (y &= 15) && (c += z[i9++] << p, (p += 8) < y && (c += z[i9++] << p, p += 8)), h < (k += c & (1 << y) - 1)) {
                                        t1.msg = "invalid distance too far back", r6.mode = 30;
                                        break t;
                                    }
                                    if (c >>>= y, p -= y, (y = s2 - a2) < k) {
                                        if (l < (y = k - y) && r6.sane) {
                                            t1.msg = "invalid distance too far back", r6.mode = 30;
                                            break t;
                                        }
                                        if (S = d, (x = 0) === f) {
                                            if (x += u - y, y < w) {
                                                for(w -= y; C[s2++] = d[x++], --y;);
                                                x = s2 - k, S = C;
                                            }
                                        } else if (f < y) {
                                            if (x += u + f - y, (y -= f) < w) {
                                                for(w -= y; C[s2++] = d[x++], --y;);
                                                if (x = 0, f < w) {
                                                    for(w -= y = f; C[s2++] = d[x++], --y;);
                                                    x = s2 - k, S = C;
                                                }
                                            }
                                        } else if (x += f - y, y < w) {
                                            for(w -= y; C[s2++] = d[x++], --y;);
                                            x = s2 - k, S = C;
                                        }
                                        for(; 2 < w;)C[s2++] = S[x++], C[s2++] = S[x++], C[s2++] = S[x++], w -= 3;
                                        w && (C[s2++] = S[x++], 1 < w && (C[s2++] = S[x++]));
                                    } else {
                                        for(x = s2 - k; C[s2++] = C[x++], C[s2++] = C[x++], C[s2++] = C[x++], 2 < (w -= 3););
                                        w && (C[s2++] = C[x++], 1 < w && (C[s2++] = C[x++]));
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    }while (i9 < n5 && s2 < o2)
                    i9 -= w = p >> 3, c &= (1 << (p -= w << 3)) - 1, t1.next_in = i9, t1.next_out = s2, t1.avail_in = i9 < n5 ? n5 - i9 + 5 : 5 - (i9 - n5), t1.avail_out = s2 < o2 ? o2 - s2 + 257 : 257 - (s2 - o2), r6.hold = c, r6.bits = p;
                };
            },
            {
            }
        ],
        49: [
            function(t, e2, r2) {
                "use strict";
                var I = t("../utils/common"), O = t("./adler32"), B = t("./crc32"), R = t("./inffast"), T = t("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, i9 = 852, n5 = 592;
                function L(t1) {
                    return (t1 >>> 24 & 255) + (t1 >>> 8 & 65280) + ((65280 & t1) << 8) + ((255 & t1) << 24);
                }
                function s2() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                }
                function a2(t1) {
                    var e8;
                    return t1 && t1.state ? (e8 = t1.state, t1.total_in = t1.total_out = e8.total = 0, t1.msg = "", e8.wrap && (t1.adler = 1 & e8.wrap), e8.mode = P, e8.last = 0, e8.havedict = 0, e8.dmax = 32768, e8.head = null, e8.hold = 0, e8.bits = 0, e8.lencode = e8.lendyn = new I.Buf32(i9), e8.distcode = e8.distdyn = new I.Buf32(n5), e8.sane = 1, e8.back = -1, N) : U;
                }
                function o2(t1) {
                    var e8;
                    return t1 && t1.state ? ((e8 = t1.state).wsize = 0, e8.whave = 0, e8.wnext = 0, a2(t1)) : U;
                }
                function h(t1, e8) {
                    var r6, i11;
                    return t1 && t1.state ? (i11 = t1.state, e8 < 0 ? (r6 = 0, e8 = -e8) : (r6 = 1 + (e8 >> 4), e8 < 48 && (e8 &= 15)), e8 && (e8 < 8 || 15 < e8) ? U : (null !== i11.window && i11.wbits !== e8 && (i11.window = null), i11.wrap = r6, i11.wbits = e8, o2(t1))) : U;
                }
                function u(t1, e8) {
                    var r6, i11;
                    return t1 ? (i11 = new s2, (t1.state = i11).window = null, (r6 = h(t1, e8)) !== N && (t1.state = null), r6) : U;
                }
                var l, f, d = !0;
                function j(t1) {
                    if (d) {
                        var e8;
                        for(l = new I.Buf32(512), f = new I.Buf32(32), e8 = 0; e8 < 144;)t1.lens[e8++] = 8;
                        for(; e8 < 256;)t1.lens[e8++] = 9;
                        for(; e8 < 280;)t1.lens[e8++] = 7;
                        for(; e8 < 288;)t1.lens[e8++] = 8;
                        for(T(D, t1.lens, 0, 288, l, 0, t1.work, {
                            bits: 9
                        }), e8 = 0; e8 < 32;)t1.lens[e8++] = 5;
                        T(F, t1.lens, 0, 32, f, 0, t1.work, {
                            bits: 5
                        }), d = !1;
                    }
                    t1.lencode = l, t1.lenbits = 9, t1.distcode = f, t1.distbits = 5;
                }
                function Z(t1, e9, r6, i11) {
                    var n7, s4 = t1.state;
                    return null === s4.window && (s4.wsize = 1 << s4.wbits, s4.wnext = 0, s4.whave = 0, s4.window = new I.Buf8(s4.wsize)), i11 >= s4.wsize ? (I.arraySet(s4.window, e9, r6 - s4.wsize, s4.wsize, 0), s4.wnext = 0, s4.whave = s4.wsize) : (i11 < (n7 = s4.wsize - s4.wnext) && (n7 = i11), I.arraySet(s4.window, e9, r6 - i11, n7, s4.wnext), (i11 -= n7) ? (I.arraySet(s4.window, e9, r6 - i11, i11, 0), s4.wnext = i11, s4.whave = s4.wsize) : (s4.wnext += n7, s4.wnext === s4.wsize && (s4.wnext = 0), s4.whave < s4.wsize && (s4.whave += n7))), 0;
                }
                r2.inflateReset = o2, r2.inflateReset2 = h, r2.inflateResetKeep = a2, r2.inflateInit = function(t1) {
                    return u(t1, 15);
                }, r2.inflateInit2 = u, r2.inflate = function(t1, e9) {
                    var r6, i11, n7, s4, a3, o3, h1, u1, l1, f1, d1, c, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [
                        16,
                        17,
                        18,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15
                    ];
                    if (!t1 || !t1.state || !t1.output || !t1.input && 0 !== t1.avail_in) return U;
                    12 === (r6 = t1.state).mode && (r6.mode = 13), a3 = t1.next_out, n7 = t1.output, h1 = t1.avail_out, s4 = t1.next_in, i11 = t1.input, o3 = t1.avail_in, u1 = r6.hold, l1 = r6.bits, f1 = o3, d1 = h1, x = N;
                    t: for(;;)switch(r6.mode){
                        case P:
                            if (0 === r6.wrap) {
                                r6.mode = 13;
                                break;
                            }
                            for(; l1 < 16;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if (2 & r6.wrap && 35615 === u1) {
                                E[r6.check = 0] = 255 & u1, E[1] = u1 >>> 8 & 255, r6.check = B(r6.check, E, 2, 0), l1 = u1 = 0, r6.mode = 2;
                                break;
                            }
                            if (r6.flags = 0, r6.head && (r6.head.done = !1), !(1 & r6.wrap) || (((255 & u1) << 8) + (u1 >> 8)) % 31) {
                                t1.msg = "incorrect header check", r6.mode = 30;
                                break;
                            }
                            if (8 != (15 & u1)) {
                                t1.msg = "unknown compression method", r6.mode = 30;
                                break;
                            }
                            if (l1 -= 4, k = 8 + (15 & (u1 >>>= 4)), 0 === r6.wbits) r6.wbits = k;
                            else if (k > r6.wbits) {
                                t1.msg = "invalid window size", r6.mode = 30;
                                break;
                            }
                            r6.dmax = 1 << k, t1.adler = r6.check = 1, r6.mode = 512 & u1 ? 10 : 12, l1 = u1 = 0;
                            break;
                        case 2:
                            for(; l1 < 16;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if (r6.flags = u1, 8 != (255 & r6.flags)) {
                                t1.msg = "unknown compression method", r6.mode = 30;
                                break;
                            }
                            if (57344 & r6.flags) {
                                t1.msg = "unknown header flags set", r6.mode = 30;
                                break;
                            }
                            r6.head && (r6.head.text = u1 >> 8 & 1), 512 & r6.flags && (E[0] = 255 & u1, E[1] = u1 >>> 8 & 255, r6.check = B(r6.check, E, 2, 0)), l1 = u1 = 0, r6.mode = 3;
                        case 3:
                            for(; l1 < 32;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            r6.head && (r6.head.time = u1), 512 & r6.flags && (E[0] = 255 & u1, E[1] = u1 >>> 8 & 255, E[2] = u1 >>> 16 & 255, E[3] = u1 >>> 24 & 255, r6.check = B(r6.check, E, 4, 0)), l1 = u1 = 0, r6.mode = 4;
                        case 4:
                            for(; l1 < 16;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            r6.head && (r6.head.xflags = 255 & u1, r6.head.os = u1 >> 8), 512 & r6.flags && (E[0] = 255 & u1, E[1] = u1 >>> 8 & 255, r6.check = B(r6.check, E, 2, 0)), l1 = u1 = 0, r6.mode = 5;
                        case 5:
                            if (1024 & r6.flags) {
                                for(; l1 < 16;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                r6.length = u1, r6.head && (r6.head.extra_len = u1), 512 & r6.flags && (E[0] = 255 & u1, E[1] = u1 >>> 8 & 255, r6.check = B(r6.check, E, 2, 0)), l1 = u1 = 0;
                            } else r6.head && (r6.head.extra = null);
                            r6.mode = 6;
                        case 6:
                            if (1024 & r6.flags && (o3 < (c = r6.length) && (c = o3), c && (r6.head && (k = r6.head.extra_len - r6.length, r6.head.extra || (r6.head.extra = new Array(r6.head.extra_len)), I.arraySet(r6.head.extra, i11, s4, c, k)), 512 & r6.flags && (r6.check = B(r6.check, i11, c, s4)), o3 -= c, s4 += c, r6.length -= c), r6.length)) break t;
                            r6.length = 0, r6.mode = 7;
                        case 7:
                            if (2048 & r6.flags) {
                                if (0 === o3) break t;
                                for(c = 0; k = i11[s4 + c++], r6.head && k && r6.length < 65536 && (r6.head.name += String.fromCharCode(k)), k && c < o3;);
                                if (512 & r6.flags && (r6.check = B(r6.check, i11, c, s4)), o3 -= c, s4 += c, k) break t;
                            } else r6.head && (r6.head.name = null);
                            r6.length = 0, r6.mode = 8;
                        case 8:
                            if (4096 & r6.flags) {
                                if (0 === o3) break t;
                                for(c = 0; k = i11[s4 + c++], r6.head && k && r6.length < 65536 && (r6.head.comment += String.fromCharCode(k)), k && c < o3;);
                                if (512 & r6.flags && (r6.check = B(r6.check, i11, c, s4)), o3 -= c, s4 += c, k) break t;
                            } else r6.head && (r6.head.comment = null);
                            r6.mode = 9;
                        case 9:
                            if (512 & r6.flags) {
                                for(; l1 < 16;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                if (u1 !== (65535 & r6.check)) {
                                    t1.msg = "header crc mismatch", r6.mode = 30;
                                    break;
                                }
                                l1 = u1 = 0;
                            }
                            r6.head && (r6.head.hcrc = r6.flags >> 9 & 1, r6.head.done = !0), t1.adler = r6.check = 0, r6.mode = 12;
                            break;
                        case 10:
                            for(; l1 < 32;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            t1.adler = r6.check = L(u1), l1 = u1 = 0, r6.mode = 11;
                        case 11:
                            if (0 === r6.havedict) return t1.next_out = a3, t1.avail_out = h1, t1.next_in = s4, t1.avail_in = o3, r6.hold = u1, r6.bits = l1, 2;
                            t1.adler = r6.check = 1, r6.mode = 12;
                        case 12:
                            if (5 === e9 || 6 === e9) break t;
                        case 13:
                            if (r6.last) {
                                u1 >>>= 7 & l1, l1 -= 7 & l1, r6.mode = 27;
                                break;
                            }
                            for(; l1 < 3;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            switch(r6.last = 1 & u1, l1 -= 1, 3 & (u1 >>>= 1)){
                                case 0:
                                    r6.mode = 14;
                                    break;
                                case 1:
                                    if (j(r6), r6.mode = 20, 6 !== e9) break;
                                    u1 >>>= 2, l1 -= 2;
                                    break t;
                                case 2:
                                    r6.mode = 17;
                                    break;
                                case 3:
                                    t1.msg = "invalid block type", r6.mode = 30;
                            }
                            u1 >>>= 2, l1 -= 2;
                            break;
                        case 14:
                            for(u1 >>>= 7 & l1, l1 -= 7 & l1; l1 < 32;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if ((65535 & u1) != (u1 >>> 16 ^ 65535)) {
                                t1.msg = "invalid stored block lengths", r6.mode = 30;
                                break;
                            }
                            if (r6.length = 65535 & u1, l1 = u1 = 0, r6.mode = 15, 6 === e9) break t;
                        case 15:
                            r6.mode = 16;
                        case 16:
                            if (c = r6.length) {
                                if (o3 < c && (c = o3), h1 < c && (c = h1), 0 === c) break t;
                                I.arraySet(n7, i11, s4, c, a3), o3 -= c, s4 += c, h1 -= c, a3 += c, r6.length -= c;
                                break;
                            }
                            r6.mode = 12;
                            break;
                        case 17:
                            for(; l1 < 14;){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if (r6.nlen = 257 + (31 & u1), u1 >>>= 5, l1 -= 5, r6.ndist = 1 + (31 & u1), u1 >>>= 5, l1 -= 5, r6.ncode = 4 + (15 & u1), u1 >>>= 4, l1 -= 4, 286 < r6.nlen || 30 < r6.ndist) {
                                t1.msg = "too many length or distance symbols", r6.mode = 30;
                                break;
                            }
                            r6.have = 0, r6.mode = 18;
                        case 18:
                            for(; r6.have < r6.ncode;){
                                for(; l1 < 3;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                r6.lens[A[r6.have++]] = 7 & u1, u1 >>>= 3, l1 -= 3;
                            }
                            for(; r6.have < 19;)r6.lens[A[r6.have++]] = 0;
                            if (r6.lencode = r6.lendyn, r6.lenbits = 7, S = {
                                bits: r6.lenbits
                            }, x = T(0, r6.lens, 0, 19, r6.lencode, 0, r6.work, S), r6.lenbits = S.bits, x) {
                                t1.msg = "invalid code lengths set", r6.mode = 30;
                                break;
                            }
                            r6.have = 0, r6.mode = 19;
                        case 19:
                            for(; r6.have < r6.nlen + r6.ndist;){
                                for(; g = (C = r6.lencode[u1 & (1 << r6.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l1);){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                if (b < 16) u1 >>>= _, l1 -= _, r6.lens[r6.have++] = b;
                                else {
                                    if (16 === b) {
                                        for(z = _ + 2; l1 < z;){
                                            if (0 === o3) break t;
                                            o3--, u1 += i11[s4++] << l1, l1 += 8;
                                        }
                                        if (u1 >>>= _, l1 -= _, 0 === r6.have) {
                                            t1.msg = "invalid bit length repeat", r6.mode = 30;
                                            break;
                                        }
                                        k = r6.lens[r6.have - 1], c = 3 + (3 & u1), u1 >>>= 2, l1 -= 2;
                                    } else if (17 === b) {
                                        for(z = _ + 3; l1 < z;){
                                            if (0 === o3) break t;
                                            o3--, u1 += i11[s4++] << l1, l1 += 8;
                                        }
                                        l1 -= _, k = 0, c = 3 + (7 & (u1 >>>= _)), u1 >>>= 3, l1 -= 3;
                                    } else {
                                        for(z = _ + 7; l1 < z;){
                                            if (0 === o3) break t;
                                            o3--, u1 += i11[s4++] << l1, l1 += 8;
                                        }
                                        l1 -= _, k = 0, c = 11 + (127 & (u1 >>>= _)), u1 >>>= 7, l1 -= 7;
                                    }
                                    if (r6.have + c > r6.nlen + r6.ndist) {
                                        t1.msg = "invalid bit length repeat", r6.mode = 30;
                                        break;
                                    }
                                    for(; c--;)r6.lens[r6.have++] = k;
                                }
                            }
                            if (30 === r6.mode) break;
                            if (0 === r6.lens[256]) {
                                t1.msg = "invalid code -- missing end-of-block", r6.mode = 30;
                                break;
                            }
                            if (r6.lenbits = 9, S = {
                                bits: r6.lenbits
                            }, x = T(D, r6.lens, 0, r6.nlen, r6.lencode, 0, r6.work, S), r6.lenbits = S.bits, x) {
                                t1.msg = "invalid literal/lengths set", r6.mode = 30;
                                break;
                            }
                            if (r6.distbits = 6, r6.distcode = r6.distdyn, S = {
                                bits: r6.distbits
                            }, x = T(F, r6.lens, r6.nlen, r6.ndist, r6.distcode, 0, r6.work, S), r6.distbits = S.bits, x) {
                                t1.msg = "invalid distances set", r6.mode = 30;
                                break;
                            }
                            if (r6.mode = 20, 6 === e9) break t;
                        case 20:
                            r6.mode = 21;
                        case 21:
                            if (6 <= o3 && 258 <= h1) {
                                t1.next_out = a3, t1.avail_out = h1, t1.next_in = s4, t1.avail_in = o3, r6.hold = u1, r6.bits = l1, R(t1, d1), a3 = t1.next_out, n7 = t1.output, h1 = t1.avail_out, s4 = t1.next_in, i11 = t1.input, o3 = t1.avail_in, u1 = r6.hold, l1 = r6.bits, 12 === r6.mode && (r6.back = -1);
                                break;
                            }
                            for(r6.back = 0; g = (C = r6.lencode[u1 & (1 << r6.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l1);){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if (g && 0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r6.lencode[w + ((u1 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l1);){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                u1 >>>= v, l1 -= v, r6.back += v;
                            }
                            if (u1 >>>= _, l1 -= _, r6.back += _, r6.length = b, 0 === g) {
                                r6.mode = 26;
                                break;
                            }
                            if (32 & g) {
                                r6.back = -1, r6.mode = 12;
                                break;
                            }
                            if (64 & g) {
                                t1.msg = "invalid literal/length code", r6.mode = 30;
                                break;
                            }
                            r6.extra = 15 & g, r6.mode = 22;
                        case 22:
                            if (r6.extra) {
                                for(z = r6.extra; l1 < z;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                r6.length += u1 & (1 << r6.extra) - 1, u1 >>>= r6.extra, l1 -= r6.extra, r6.back += r6.extra;
                            }
                            r6.was = r6.length, r6.mode = 23;
                        case 23:
                            for(; g = (C = r6.distcode[u1 & (1 << r6.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l1);){
                                if (0 === o3) break t;
                                o3--, u1 += i11[s4++] << l1, l1 += 8;
                            }
                            if (0 == (240 & g)) {
                                for(v = _, y = g, w = b; g = (C = r6.distcode[w + ((u1 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l1);){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                u1 >>>= v, l1 -= v, r6.back += v;
                            }
                            if (u1 >>>= _, l1 -= _, r6.back += _, 64 & g) {
                                t1.msg = "invalid distance code", r6.mode = 30;
                                break;
                            }
                            r6.offset = b, r6.extra = 15 & g, r6.mode = 24;
                        case 24:
                            if (r6.extra) {
                                for(z = r6.extra; l1 < z;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                r6.offset += u1 & (1 << r6.extra) - 1, u1 >>>= r6.extra, l1 -= r6.extra, r6.back += r6.extra;
                            }
                            if (r6.offset > r6.dmax) {
                                t1.msg = "invalid distance too far back", r6.mode = 30;
                                break;
                            }
                            r6.mode = 25;
                        case 25:
                            if (0 === h1) break t;
                            if (c = d1 - h1, r6.offset > c) {
                                if ((c = r6.offset - c) > r6.whave && r6.sane) {
                                    t1.msg = "invalid distance too far back", r6.mode = 30;
                                    break;
                                }
                                p = c > r6.wnext ? (c -= r6.wnext, r6.wsize - c) : r6.wnext - c, c > r6.length && (c = r6.length), m = r6.window;
                            } else m = n7, p = a3 - r6.offset, c = r6.length;
                            for(h1 < c && (c = h1), h1 -= c, r6.length -= c; n7[a3++] = m[p++], --c;);
                            0 === r6.length && (r6.mode = 21);
                            break;
                        case 26:
                            if (0 === h1) break t;
                            n7[a3++] = r6.length, h1--, r6.mode = 21;
                            break;
                        case 27:
                            if (r6.wrap) {
                                for(; l1 < 32;){
                                    if (0 === o3) break t;
                                    o3--, u1 |= i11[s4++] << l1, l1 += 8;
                                }
                                if (d1 -= h1, t1.total_out += d1, r6.total += d1, d1 && (t1.adler = r6.check = r6.flags ? B(r6.check, n7, d1, a3 - d1) : O(r6.check, n7, d1, a3 - d1)), d1 = h1, (r6.flags ? u1 : L(u1)) !== r6.check) {
                                    t1.msg = "incorrect data check", r6.mode = 30;
                                    break;
                                }
                                l1 = u1 = 0;
                            }
                            r6.mode = 28;
                        case 28:
                            if (r6.wrap && r6.flags) {
                                for(; l1 < 32;){
                                    if (0 === o3) break t;
                                    o3--, u1 += i11[s4++] << l1, l1 += 8;
                                }
                                if (u1 !== (4294967295 & r6.total)) {
                                    t1.msg = "incorrect length check", r6.mode = 30;
                                    break;
                                }
                                l1 = u1 = 0;
                            }
                            r6.mode = 29;
                        case 29:
                            x = 1;
                            break t;
                        case 30:
                            x = -3;
                            break t;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return U;
                    }
                    return t1.next_out = a3, t1.avail_out = h1, t1.next_in = s4, t1.avail_in = o3, r6.hold = u1, r6.bits = l1, (r6.wsize || d1 !== t1.avail_out && r6.mode < 30 && (r6.mode < 27 || 4 !== e9)) && Z(t1, t1.output, t1.next_out, d1 - t1.avail_out) ? (r6.mode = 31, -4) : (f1 -= t1.avail_in, d1 -= t1.avail_out, t1.total_in += f1, t1.total_out += d1, r6.total += d1, r6.wrap && d1 && (t1.adler = r6.check = r6.flags ? B(r6.check, n7, d1, t1.next_out - d1) : O(r6.check, n7, d1, t1.next_out - d1)), t1.data_type = r6.bits + (r6.last ? 64 : 0) + (12 === r6.mode ? 128 : 0) + (20 === r6.mode || 15 === r6.mode ? 256 : 0), (0 == f1 && 0 === d1 || 4 === e9) && x === N && (x = -5), x);
                }, r2.inflateEnd = function(t1) {
                    if (!t1 || !t1.state) return U;
                    var e9 = t1.state;
                    return e9.window && (e9.window = null), t1.state = null, N;
                }, r2.inflateGetHeader = function(t1, e9) {
                    var r6;
                    return t1 && t1.state ? 0 == (2 & (r6 = t1.state).wrap) ? U : ((r6.head = e9).done = !1, N) : U;
                }, r2.inflateSetDictionary = function(t1, e9) {
                    var r6, i11 = e9.length;
                    return t1 && t1.state ? 0 !== (r6 = t1.state).wrap && 11 !== r6.mode ? U : 11 === r6.mode && O(1, e9, i11, 0) !== r6.check ? -3 : Z(t1, e9, i11, i11) ? (r6.mode = 31, -4) : (r6.havedict = 1, N) : U;
                }, r2.inflateInfo = "pako inflate (from Nodeca project)";
            },
            {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }
        ],
        50: [
            function(t, e2, r2) {
                "use strict";
                var D = t("../utils/common"), F = [
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    13,
                    15,
                    17,
                    19,
                    23,
                    27,
                    31,
                    35,
                    43,
                    51,
                    59,
                    67,
                    83,
                    99,
                    115,
                    131,
                    163,
                    195,
                    227,
                    258,
                    0,
                    0
                ], N = [
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    17,
                    17,
                    18,
                    18,
                    18,
                    18,
                    19,
                    19,
                    19,
                    19,
                    20,
                    20,
                    20,
                    20,
                    21,
                    21,
                    21,
                    21,
                    16,
                    72,
                    78
                ], U = [
                    1,
                    2,
                    3,
                    4,
                    5,
                    7,
                    9,
                    13,
                    17,
                    25,
                    33,
                    49,
                    65,
                    97,
                    129,
                    193,
                    257,
                    385,
                    513,
                    769,
                    1025,
                    1537,
                    2049,
                    3073,
                    4097,
                    6145,
                    8193,
                    12289,
                    16385,
                    24577,
                    0,
                    0
                ], P = [
                    16,
                    16,
                    16,
                    16,
                    17,
                    17,
                    18,
                    18,
                    19,
                    19,
                    20,
                    20,
                    21,
                    21,
                    22,
                    22,
                    23,
                    23,
                    24,
                    24,
                    25,
                    25,
                    26,
                    26,
                    27,
                    27,
                    28,
                    28,
                    29,
                    29,
                    64,
                    64
                ];
                e2.exports = function(t1, e9, r6, i9, n5, s2, a2, o2) {
                    var h, u, l, f, d, c, p, m, _, g = o2.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
                    for(b = 0; b <= 15; b++)O[b] = 0;
                    for(v = 0; v < i9; v++)O[e9[r6 + v]]++;
                    for(k = g, w = 15; 1 <= w && 0 === O[w]; w--);
                    if (w < k && (k = w), 0 === w) return n5[s2++] = 20971520, n5[s2++] = 20971520, o2.bits = 1, 0;
                    for(y = 1; y < w && 0 === O[y]; y++);
                    for(k < y && (k = y), b = z = 1; b <= 15; b++)if (z <<= 1, (z -= O[b]) < 0) return -1;
                    if (0 < z && (0 === t1 || 1 !== w)) return -1;
                    for(B[1] = 0, b = 1; b < 15; b++)B[b + 1] = B[b] + O[b];
                    for(v = 0; v < i9; v++)0 !== e9[r6 + v] && (a2[B[e9[r6 + v]]++] = v);
                    if (c = 0 === t1 ? (A = R = a2, 19) : 1 === t1 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, d = s2, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === t1 && 852 < C || 2 === t1 && 592 < C) return 1;
                    for(;;){
                        for(p = b - S, _ = a2[v] < c ? (m = 0, a2[v]) : a2[v] > c ? (m = R[T + a2[v]], A[I + a2[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; n5[d + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
                        for(h = 1 << b - 1; E & h;)h >>= 1;
                        if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                            if (b === w) break;
                            b = e9[r6 + a2[v]];
                        }
                        if (k < b && (E & f) !== l) {
                            for(0 === S && (S = k), d += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);)x++, z <<= 1;
                            if (C += 1 << x, 1 === t1 && 852 < C || 2 === t1 && 592 < C) return 1;
                            n5[l = E & f] = k << 24 | x << 16 | d - s2 | 0;
                        }
                    }
                    return 0 !== E && (n5[d + E] = b - S << 24 | 4194304), o2.bits = k, 0;
                };
            },
            {
                "../utils/common": 41
            }
        ],
        51: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                };
            },
            {
            }
        ],
        52: [
            function(t, e2, r2) {
                "use strict";
                var n5 = t("../utils/common"), o2 = 0, h = 1;
                function i9(t1) {
                    for(var e9 = t1.length; 0 <= --e9;)t1[e9] = 0;
                }
                var s2 = 0, a2 = 29, u = 256, l = u + 1 + a2, f = 30, d = 19, _ = 2 * l + 1, g = 15, c = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0
                ], k = [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13
                ], x = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    3,
                    7
                ], S = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                ], z = new Array(2 * (l + 2));
                i9(z);
                var C = new Array(2 * f);
                i9(C);
                var E = new Array(512);
                i9(E);
                var A = new Array(256);
                i9(A);
                var I = new Array(a2);
                i9(I);
                var O, B, R, T = new Array(f);
                function D(t1, e9, r6, i11, n7) {
                    this.static_tree = t1, this.extra_bits = e9, this.extra_base = r6, this.elems = i11, this.max_length = n7, this.has_stree = t1 && t1.length;
                }
                function F(t1, e9) {
                    this.dyn_tree = t1, this.max_code = 0, this.stat_desc = e9;
                }
                function N(t1) {
                    return t1 < 256 ? E[t1] : E[256 + (t1 >>> 7)];
                }
                function U(t1, e9) {
                    t1.pending_buf[t1.pending++] = 255 & e9, t1.pending_buf[t1.pending++] = e9 >>> 8 & 255;
                }
                function P(t1, e9, r6) {
                    t1.bi_valid > c - r6 ? (t1.bi_buf |= e9 << t1.bi_valid & 65535, U(t1, t1.bi_buf), t1.bi_buf = e9 >> c - t1.bi_valid, t1.bi_valid += r6 - c) : (t1.bi_buf |= e9 << t1.bi_valid & 65535, t1.bi_valid += r6);
                }
                function L(t1, e9, r6) {
                    P(t1, r6[2 * e9], r6[2 * e9 + 1]);
                }
                function j(t1, e9) {
                    for(var r6 = 0; r6 |= 1 & t1, t1 >>>= 1, r6 <<= 1, 0 < --e9;);
                    return r6 >>> 1;
                }
                function Z(t1, e9, r6) {
                    var i11, n7, s4 = new Array(g + 1), a3 = 0;
                    for(i11 = 1; i11 <= g; i11++)s4[i11] = a3 = a3 + r6[i11 - 1] << 1;
                    for(n7 = 0; n7 <= e9; n7++){
                        var o3 = t1[2 * n7 + 1];
                        0 !== o3 && (t1[2 * n7] = j(s4[o3]++, o3));
                    }
                }
                function W(t1) {
                    var e9;
                    for(e9 = 0; e9 < l; e9++)t1.dyn_ltree[2 * e9] = 0;
                    for(e9 = 0; e9 < f; e9++)t1.dyn_dtree[2 * e9] = 0;
                    for(e9 = 0; e9 < d; e9++)t1.bl_tree[2 * e9] = 0;
                    t1.dyn_ltree[2 * m] = 1, t1.opt_len = t1.static_len = 0, t1.last_lit = t1.matches = 0;
                }
                function M(t1) {
                    8 < t1.bi_valid ? U(t1, t1.bi_buf) : 0 < t1.bi_valid && (t1.pending_buf[t1.pending++] = t1.bi_buf), t1.bi_buf = 0, t1.bi_valid = 0;
                }
                function H(t1, e9, r6, i11) {
                    var n7 = 2 * e9, s4 = 2 * r6;
                    return t1[n7] < t1[s4] || t1[n7] === t1[s4] && i11[e9] <= i11[r6];
                }
                function G(t1, e9, r6) {
                    for(var i11 = t1.heap[r6], n7 = r6 << 1; n7 <= t1.heap_len && (n7 < t1.heap_len && H(e9, t1.heap[n7 + 1], t1.heap[n7], t1.depth) && n7++, !H(e9, i11, t1.heap[n7], t1.depth));)t1.heap[r6] = t1.heap[n7], r6 = n7, n7 <<= 1;
                    t1.heap[r6] = i11;
                }
                function K(t1, e9, r6) {
                    var i11, n7, s4, a3, o4 = 0;
                    if (0 !== t1.last_lit) for(; i11 = t1.pending_buf[t1.d_buf + 2 * o4] << 8 | t1.pending_buf[t1.d_buf + 2 * o4 + 1], n7 = t1.pending_buf[t1.l_buf + o4], o4++, 0 === i11 ? L(t1, n7, e9) : (L(t1, (s4 = A[n7]) + u + 1, e9), 0 !== (a3 = w[s4]) && P(t1, n7 -= I[s4], a3), L(t1, s4 = N(--i11), r6), 0 !== (a3 = k[s4]) && P(t1, i11 -= T[s4], a3)), o4 < t1.last_lit;);
                    L(t1, m, e9);
                }
                function Y(t1, e9) {
                    var r6, i11, n7, s4 = e9.dyn_tree, a3 = e9.stat_desc.static_tree, o4 = e9.stat_desc.has_stree, h1 = e9.stat_desc.elems, u1 = -1;
                    for(t1.heap_len = 0, t1.heap_max = _, r6 = 0; r6 < h1; r6++)0 !== s4[2 * r6] ? (t1.heap[++t1.heap_len] = u1 = r6, t1.depth[r6] = 0) : s4[2 * r6 + 1] = 0;
                    for(; t1.heap_len < 2;)s4[2 * (n7 = t1.heap[++t1.heap_len] = u1 < 2 ? ++u1 : 0)] = 1, t1.depth[n7] = 0, t1.opt_len--, o4 && (t1.static_len -= a3[2 * n7 + 1]);
                    for(e9.max_code = u1, r6 = t1.heap_len >> 1; 1 <= r6; r6--)G(t1, s4, r6);
                    for(n7 = h1; r6 = t1.heap[1], t1.heap[1] = t1.heap[t1.heap_len--], G(t1, s4, 1), i11 = t1.heap[1], t1.heap[--t1.heap_max] = r6, t1.heap[--t1.heap_max] = i11, s4[2 * n7] = s4[2 * r6] + s4[2 * i11], t1.depth[n7] = (t1.depth[r6] >= t1.depth[i11] ? t1.depth[r6] : t1.depth[i11]) + 1, s4[2 * r6 + 1] = s4[2 * i11 + 1] = n7, t1.heap[1] = n7++, G(t1, s4, 1), 2 <= t1.heap_len;);
                    t1.heap[--t1.heap_max] = t1.heap[1], (function(t2, e10) {
                        var r7, i12, n8, s5, a4, o5, h2 = e10.dyn_tree, u2 = e10.max_code, l1 = e10.stat_desc.static_tree, f1 = e10.stat_desc.has_stree, d1 = e10.stat_desc.extra_bits, c1 = e10.stat_desc.extra_base, p1 = e10.stat_desc.max_length, m1 = 0;
                        for(s5 = 0; s5 <= g; s5++)t2.bl_count[s5] = 0;
                        for(h2[2 * t2.heap[t2.heap_max] + 1] = 0, r7 = t2.heap_max + 1; r7 < _; r7++)p1 < (s5 = h2[2 * h2[2 * (i12 = t2.heap[r7]) + 1] + 1] + 1) && (s5 = p1, m1++), h2[2 * i12 + 1] = s5, u2 < i12 || (t2.bl_count[s5]++, a4 = 0, c1 <= i12 && (a4 = d1[i12 - c1]), o5 = h2[2 * i12], t2.opt_len += o5 * (s5 + a4), f1 && (t2.static_len += o5 * (l1[2 * i12 + 1] + a4)));
                        if (0 !== m1) {
                            do {
                                for(s5 = p1 - 1; 0 === t2.bl_count[s5];)s5--;
                                t2.bl_count[s5]--, t2.bl_count[s5 + 1] += 2, t2.bl_count[p1]--, m1 -= 2;
                            }while (0 < m1)
                            for(s5 = p1; 0 !== s5; s5--)for(i12 = t2.bl_count[s5]; 0 !== i12;)u2 < (n8 = t2.heap[--r7]) || (h2[2 * n8 + 1] !== s5 && (t2.opt_len += (s5 - h2[2 * n8 + 1]) * h2[2 * n8], h2[2 * n8 + 1] = s5), i12--);
                        }
                    })(t1, e9), Z(s4, u1, t1.bl_count);
                }
                function X(t1, e9, r6) {
                    var i11, n7, s4 = -1, a3 = e9[1], o4 = 0, h1 = 7, u1 = 4;
                    for(0 === a3 && (h1 = 138, u1 = 3), e9[2 * (r6 + 1) + 1] = 65535, i11 = 0; i11 <= r6; i11++)n7 = a3, a3 = e9[2 * (i11 + 1) + 1], (++o4) < h1 && n7 === a3 || (o4 < u1 ? t1.bl_tree[2 * n7] += o4 : 0 !== n7 ? (n7 !== s4 && t1.bl_tree[2 * n7]++, t1.bl_tree[2 * b]++) : o4 <= 10 ? t1.bl_tree[2 * v]++ : t1.bl_tree[2 * y]++, s4 = n7, u1 = (o4 = 0) === a3 ? (h1 = 138, 3) : n7 === a3 ? (h1 = 6, 3) : (h1 = 7, 4));
                }
                function V(t1, e9, r6) {
                    var i11, n7, s4 = -1, a3 = e9[1], o4 = 0, h1 = 7, u1 = 4;
                    for(0 === a3 && (h1 = 138, u1 = 3), i11 = 0; i11 <= r6; i11++)if (n7 = a3, a3 = e9[2 * (i11 + 1) + 1], !((++o4) < h1 && n7 === a3)) {
                        if (o4 < u1) for(; L(t1, n7, t1.bl_tree), 0 != --o4;);
                        else 0 !== n7 ? (n7 !== s4 && (L(t1, n7, t1.bl_tree), o4--), L(t1, b, t1.bl_tree), P(t1, o4 - 3, 2)) : o4 <= 10 ? (L(t1, v, t1.bl_tree), P(t1, o4 - 3, 3)) : (L(t1, y, t1.bl_tree), P(t1, o4 - 11, 7));
                        s4 = n7, u1 = (o4 = 0) === a3 ? (h1 = 138, 3) : n7 === a3 ? (h1 = 6, 3) : (h1 = 7, 4);
                    }
                }
                i9(T);
                var q = !1;
                function J(t1, e9, r6, i11) {
                    P(t1, (s2 << 1) + (i11 ? 1 : 0), 3), (function(t2, e10, r7, i12) {
                        M(t2), i12 && (U(t2, r7), U(t2, ~r7)), n5.arraySet(t2.pending_buf, t2.window, e10, r7, t2.pending), t2.pending += r7;
                    })(t1, e9, r6, !0);
                }
                r2._tr_init = function(t1) {
                    q || ((function() {
                        var t2, e9, r6, i11, n7, s4 = new Array(g + 1);
                        for(i11 = r6 = 0; i11 < a2 - 1; i11++)for(I[i11] = r6, t2 = 0; t2 < 1 << w[i11]; t2++)A[r6++] = i11;
                        for(A[r6 - 1] = i11, i11 = n7 = 0; i11 < 16; i11++)for(T[i11] = n7, t2 = 0; t2 < 1 << k[i11]; t2++)E[n7++] = i11;
                        for(n7 >>= 7; i11 < f; i11++)for(T[i11] = n7 << 7, t2 = 0; t2 < 1 << k[i11] - 7; t2++)E[256 + n7++] = i11;
                        for(e9 = 0; e9 <= g; e9++)s4[e9] = 0;
                        for(t2 = 0; t2 <= 143;)z[2 * t2 + 1] = 8, t2++, s4[8]++;
                        for(; t2 <= 255;)z[2 * t2 + 1] = 9, t2++, s4[9]++;
                        for(; t2 <= 279;)z[2 * t2 + 1] = 7, t2++, s4[7]++;
                        for(; t2 <= 287;)z[2 * t2 + 1] = 8, t2++, s4[8]++;
                        for(Z(z, l + 1, s4), t2 = 0; t2 < f; t2++)C[2 * t2 + 1] = 5, C[2 * t2] = j(t2, 5);
                        O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, d, p);
                    })(), q = !0), t1.l_desc = new F(t1.dyn_ltree, O), t1.d_desc = new F(t1.dyn_dtree, B), t1.bl_desc = new F(t1.bl_tree, R), t1.bi_buf = 0, t1.bi_valid = 0, W(t1);
                }, r2._tr_stored_block = J, r2._tr_flush_block = function(t1, e9, r6, i11) {
                    var n7, s4, a3 = 0;
                    0 < t1.level ? (2 === t1.strm.data_type && (t1.strm.data_type = (function(t2) {
                        var e10, r7 = 4093624447;
                        for(e10 = 0; e10 <= 31; e10++, r7 >>>= 1)if (1 & r7 && 0 !== t2.dyn_ltree[2 * e10]) return o2;
                        if (0 !== t2.dyn_ltree[18] || 0 !== t2.dyn_ltree[20] || 0 !== t2.dyn_ltree[26]) return h;
                        for(e10 = 32; e10 < u; e10++)if (0 !== t2.dyn_ltree[2 * e10]) return h;
                        return o2;
                    })(t1)), Y(t1, t1.l_desc), Y(t1, t1.d_desc), a3 = (function(t2) {
                        var e10;
                        for(X(t2, t2.dyn_ltree, t2.l_desc.max_code), X(t2, t2.dyn_dtree, t2.d_desc.max_code), Y(t2, t2.bl_desc), e10 = d - 1; 3 <= e10 && 0 === t2.bl_tree[2 * S[e10] + 1]; e10--);
                        return t2.opt_len += 3 * (e10 + 1) + 5 + 5 + 4, e10;
                    })(t1), n7 = t1.opt_len + 3 + 7 >>> 3, (s4 = t1.static_len + 3 + 7 >>> 3) <= n7 && (n7 = s4)) : n7 = s4 = r6 + 5, r6 + 4 <= n7 && -1 !== e9 ? J(t1, e9, r6, i11) : 4 === t1.strategy || s4 === n7 ? (P(t1, 2 + (i11 ? 1 : 0), 3), K(t1, z, C)) : (P(t1, 4 + (i11 ? 1 : 0), 3), (function(t2, e10, r7, i12) {
                        var n8;
                        for(P(t2, e10 - 257, 5), P(t2, r7 - 1, 5), P(t2, i12 - 4, 4), n8 = 0; n8 < i12; n8++)P(t2, t2.bl_tree[2 * S[n8] + 1], 3);
                        V(t2, t2.dyn_ltree, e10 - 1), V(t2, t2.dyn_dtree, r7 - 1);
                    })(t1, t1.l_desc.max_code + 1, t1.d_desc.max_code + 1, a3 + 1), K(t1, t1.dyn_ltree, t1.dyn_dtree)), W(t1), i11 && M(t1);
                }, r2._tr_tally = function(t1, e9, r6) {
                    return t1.pending_buf[t1.d_buf + 2 * t1.last_lit] = e9 >>> 8 & 255, t1.pending_buf[t1.d_buf + 2 * t1.last_lit + 1] = 255 & e9, t1.pending_buf[t1.l_buf + t1.last_lit] = 255 & r6, t1.last_lit++, 0 === e9 ? t1.dyn_ltree[2 * r6]++ : (t1.matches++, e9--, t1.dyn_ltree[2 * (A[r6] + u + 1)]++, t1.dyn_dtree[2 * N(e9)]++), t1.last_lit === t1.lit_bufsize - 1;
                }, r2._tr_align = function(t1) {
                    P(t1, 2, 3), L(t1, m, z), (function(t2) {
                        16 === t2.bi_valid ? (U(t2, t2.bi_buf), t2.bi_buf = 0, t2.bi_valid = 0) : 8 <= t2.bi_valid && (t2.pending_buf[t2.pending++] = 255 & t2.bi_buf, t2.bi_buf >>= 8, t2.bi_valid -= 8);
                    })(t1);
                };
            },
            {
                "../utils/common": 41
            }
        ],
        53: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                };
            },
            {
            }
        ],
        54: [
            function(t, e2, r2) {
                "use strict";
                e2.exports = "function" == typeof setImmediate ? setImmediate : function() {
                    var t1 = [].slice.apply(arguments);
                    t1.splice(1, 0, 0), setTimeout.apply(null, t1);
                };
            },
            {
            }
        ]
    }, {
    }, [
        10
    ])(10);
});

},{"buffer":"bpNHw"}]},["kAaS7","i87aF"], "i87aF", "parcelRequirea03a")

//# sourceMappingURL=index.147655b4.js.map
