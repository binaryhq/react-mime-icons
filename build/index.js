"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconBase = _interopRequireDefault(require("react-icon-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FaFileImageO = function FaFileImageO(props) {
  return _react["default"].createElement(_reactIconBase["default"], _extends({
    viewBox: "0 0 40 40"
  }, props), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-2.8-10v7.2h-22.9v-4.3l4.3-4.3 2.9 2.9 8.5-8.6z m-18.6-4.2q-1.8 0-3-1.3t-1.3-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1-1.3 3-3 1.3z"
  })));
};

var _default = FaFileImageO;
exports["default"] = _default;
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ReactMimeIcons["default"];
  }
});

var _ReactMimeIcons = _interopRequireDefault(require("./ReactMimeIcons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
'use strict';
/** 
 * @author Ningappa Kamate 
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fileImageO = _interopRequireDefault(require("./Icons/fa/file-image-o"));

var _fileAudioO = _interopRequireDefault(require("./Icons/fa/file-audio-o"));

var _fileMovieO = _interopRequireDefault(require("./Icons/fa/file-movie-o"));

var _fileWordO = _interopRequireDefault(require("./Icons/fa/file-word-o"));

var _fileExcelO = _interopRequireDefault(require("./Icons/fa/file-excel-o"));

var _filePowerpointO = _interopRequireDefault(require("./Icons/fa/file-powerpoint-o"));

var _fileTextO = _interopRequireDefault(require("./Icons/fa/file-text-o"));

var _fileAlt = _interopRequireDefault(require("./Icons/fa/file-alt"));

var _fileCodeO = _interopRequireDefault(require("./Icons/fa/file-code-o"));

var _fileArchiveO = _interopRequireDefault(require("./Icons/fa/file-archive-o"));

var _fileO = _interopRequireDefault(require("./Icons/fa/file-o"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var iconsComponents = {
  //Fontawesome Icons
  "fa-FileImageO": _fileImageO["default"],
  "fa-FileAudioO": _fileAudioO["default"],
  "fa-FileMovieO": _fileMovieO["default"],
  "fa-FileWordO": _fileWordO["default"],
  "fa-FileExcelO": _fileExcelO["default"],
  "fa-FilePowerpointO": _filePowerpointO["default"],
  "fa-FileTextO": _fileTextO["default"],
  "fa-FileAlt": _fileAlt["default"],
  "fa-FileCodeO": _fileCodeO["default"],
  "fa-FileArchiveO": _fileArchiveO["default"],
  "fa-FileO": _fileO["default"]
};
var mappings = {
  // Media
  FileImageO: /^image\//,
  FileAudioO: /^audio\//,
  FileMovieO: /^video\//,
  // Documents
  FilePdfO: 'application/pdf',
  FileWordO: [/ms-?word/, 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml'],
  FileExcelO: [/ms-?excel/, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml', 'application/vnd.oasis.opendocument.spreadsheet'],
  FilePowerpointO: [/ms-?powerpoint/, 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml', 'application/vnd.oasis.opendocument.presentation'],
  FileAlt: 'text/plain',
  FileTextO: 'text/plain',
  FileCodeO: ['text/html', 'text/javascript', 'application/json'],
  FileArchiveO: [/^application\/x-(g?tar|xz|compress|bzip2|g?zip)$/, /^application\/x-(7z|rar|zip)-compressed$/, /^application\/(zip|gzip|tar)$/]
};

var match = function match(mimetype, cond) {
  if (Array.isArray(cond)) {
    return cond.reduce(function (v, c) {
      return v || match(mimetype, c);
    }, false);
  } else if (cond instanceof RegExp) {
    return cond.test(mimetype);
  } else if (cond === undefined) {
    return true;
  } else {
    return mimetype === cond;
  }
};

var cache = {};

var resolve = function resolve(mimetype) {
  if (cache[mimetype]) {
    return cache[mimetype];
  }

  for (var _i = 0, _Object$entries = Object.entries(mappings); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        icon = _Object$entries$_i[0],
        condition = _Object$entries$_i[1];

    if (match(mimetype, condition)) {
      cache[mimetype] = icon;
      return icon;
    }
  }
};

var FileMimeIcons =
/*#__PURE__*/
function (_Component) {
  _inherits(FileMimeIcons, _Component);

  function FileMimeIcons(props) {
    _classCallCheck(this, FileMimeIcons);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileMimeIcons).call(this, props));
  }

  _createClass(FileMimeIcons, [{
    key: "render",
    value: function render() {
      var mimetype = this.props.mimetype;
      var MyComponent = iconsComponents["".concat(type, "-").concat(resolve(mimetype))];

      if (MyComponent) {
        return _react["default"].createElement(MyComponent, this.props);
      }

      return _react["default"].createElement(_fileO["default"], this.props);
    }
  }]);

  return FileMimeIcons;
}(_react.Component);

FileMimeIcons.propTypes = {
  mimetype: _propTypes["default"].string,
  type: _propTypes["default"].string,
  color: _propTypes["default"].string,
  size: _propTypes["default"].string
};
FileMimeIcons.defaultProps = {
  type: "fa",
  size: "1em"
};
var _default = FileMimeIcons;
exports["default"] = _default;
