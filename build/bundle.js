/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  host: 'server.com',
  user: 'user',
  password: 'pass',
  database: 'database_name',
  connectionLimit: 10
});

/***/ }),

/***/ "./src/config/swagger.js":
/*!*******************************!*\
  !*** ./src/config/swagger.js ***!
  \*******************************/
/*! exports provided: swaggerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swaggerConfig", function() { return swaggerConfig; });
var swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'x-access-token',
          "in": 'header'
        }
      }
    },
    security: [{
      ApiKeyAuth: []
    }],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  // Path to the API docs
  apis: ['./src/controllers/**/*.js', './src/controllers/**/*.yml']
};

/***/ }),

/***/ "./src/controllers/api/index.js":
/*!**************************************!*\
  !*** ./src/controllers/api/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/models/index.js");
/* harmony import */ var _utils_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/access */ "./src/utils/access.js");
/* harmony import */ var _middlewares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/error-handler */ "./src/middlewares/error-handler.js");
/* harmony import */ var _middlewares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../middlewares/restricted-access */ "./src/middlewares/restricted-access.js");







var StartApiServer = function StartApiServer(app) {
  /**
   * @swagger
   *
   * /:
   *   get:
   *     description: Test request
   *     tags:
   *       - Public
   *     responses:
   *       200:
   *         []
   *     security:
   *       - basicAuth
   */
  app.get("/", function (req, res) {
    res.send("va bien la cosa");
  });
  /**
   * @swagger
   *
   * /login:
   *   post:
   *     description: Login endpoint
   *     requestBody:
   *       description: User credentials (email, password)
   *       content:
   *         application/json:
   *           examples:
   *             Credentials exmaple:
   *               value:
   *                 mail: pp@pp.com
   *                 pass: pp
   *           schema:
   *             type: object
   *             properties:
   *               mail:
   *                 type: string
   *               pass:
   *                 type: string
   *     tags:
   *       - Public
   *     responses:
   *       200:
   *         []
   *     security:
   *       - basicAuth
   */

  app.post("/login", Object(_middlewares_error_handler__WEBPACK_IMPORTED_MODULE_4__["asyncHandler"])( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
      var mail, pass, user, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mail = req.body.mail;
              pass = req.body.pass;

              if (!(!mail || !pass)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.send(400));

            case 4:
              // const user = await Model.login(mail, pass);
              user = {
                id: 5,
                name: 'maria'
              };
              token = Object(_utils_access__WEBPACK_IMPORTED_MODULE_3__["createToken"])({
                id: user.id
              });
              res.send(token);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
  /**
  * @swagger
  *
  * /restricted-path:
  *   get:
  *     description: Restricted path
  *     tags:
  *       - Restricted
  *     responses:
  *       200:
  *         []
  */

  app.get("/restricted-path", _middlewares_restricted_access__WEBPACK_IMPORTED_MODULE_5__["default"], function (req, res) {
    res.send("User id: ".concat(req.userId));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (StartApiServer);

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/controllers/api/index.js");


var Controllers = function Controllers(app) {
  Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
};

/* harmony default export */ __webpack_exports__["default"] = (Controllers);

/***/ }),

/***/ "./src/documentation/index.js":
/*!************************************!*\
  !*** ./src/documentation/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__["swaggerConfig"]); // Api entrypoint

  app.use("/api-docs", swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a.setup(swaggerSpec));
};

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers */ "./src/controllers/index.js");
/* harmony import */ var _documentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation */ "./src/documentation/index.js");





var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = process.env.PORT || 3005;
Object(_documentation__WEBPACK_IMPORTED_MODULE_4__["default"])(app);
Object(_middlewares__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
Object(_controllers__WEBPACK_IMPORTED_MODULE_3__["default"])(app);
var server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(app);
server.listen(port, function () {
  return console.log("Server listening to http://localhost:".concat(port));
});

/***/ }),

/***/ "./src/middlewares/error-handler.js":
/*!******************************************!*\
  !*** ./src/middlewares/error-handler.js ***!
  \******************************************/
/*! exports provided: asyncHandler, socketHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncHandler", function() { return asyncHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketHandler", function() { return socketHandler; });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/middlewares/index.js":
/*!**********************************!*\
  !*** ./src/middlewares/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);



var Middlewares = function Middlewares(app) {
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());
  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()()); // Use this after the variable declaration

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Middlewares);

/***/ }),

/***/ "./src/middlewares/restricted-access.js":
/*!**********************************************!*\
  !*** ./src/middlewares/restricted-access.js ***!
  \**********************************************/
/*! exports provided: getHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony import */ var _utils_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/access */ "./src/utils/access.js");

var getHeader = function getHeader(req, header) {
  return req.headers[header];
};
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  var token = getHeader(req, 'x-access-token');

  if (!token) {
    return res.status(400).send('No token provided.');
  }

  return Object(_utils_access__WEBPACK_IMPORTED_MODULE_0__["verifyToken"])(token, function (err) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        id = _ref.id;

    if (err) {
      return res.status(401).send('Failed to authenticate token.');
    }

    if (!id) {
      return res.status(403).send('Wrong credentials');
    }

    req.userId = id;
    return next();
  });
});

/***/ }),

/***/ "./src/models/connection.js":
/*!**********************************!*\
  !*** ./src/models/connection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/database */ "./src/config/database.js");


var dbName = _config_database__WEBPACK_IMPORTED_MODULE_1__["default"].dbName,
    user = _config_database__WEBPACK_IMPORTED_MODULE_1__["default"].user,
    password = _config_database__WEBPACK_IMPORTED_MODULE_1__["default"].password,
    host = _config_database__WEBPACK_IMPORTED_MODULE_1__["default"].host;
/* harmony default export */ __webpack_exports__["default"] = (new sequelize__WEBPACK_IMPORTED_MODULE_0__["Sequelize"](dbName, user, password, {
  host: host,
  dialect: 'mysql'
}));

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection */ "./src/models/connection.js");


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
    QueryTypes = _require.QueryTypes;

var login = function login(cod) {
  return _connection__WEBPACK_IMPORTED_MODULE_0__["default"].query('SELECT * FROM pap_user WHERE mail = :msil AND password = :password', {
    replacements: {
      mail: mail,
      password: password
    },
    type: QueryTypes.SELECT
  });
};

/***/ }),

/***/ "./src/utils/access.js":
/*!*****************************!*\
  !*** ./src/utils/access.js ***!
  \*****************************/
/*! exports provided: decodeToken, createToken, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeToken", function() { return decodeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var secret = 'secret';
var decodeToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode;
var createToken = function createToken(data) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(data, secret);
};
var verifyToken = function verifyToken(token, callback) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, secret, callback);
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map