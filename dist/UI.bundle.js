/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with time zone, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getDate(), 2);
    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMonth() + 1, 2);
    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getHours(), 2);
    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMinutes(), 2);
    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ?????? Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ?????? Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    static #nextId = 0;

    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = Project.#nextId++;
    }

    getTaskIndex(taskId) {
        let index = -1;

        for (let i = 0; i < this.tasks.length; i++) {
            if (taskId == this.tasks[i].getId()) {
                index = i;
            }
        }
        
        return index;
    }

    deleteTask(taskPos) {
        this.tasks.splice(taskPos, 1);
    }

    updateTaskInfo(taskPos, name, desc, dueDate, priority) {
        this.tasks[taskPos].setAttributes(name, desc, dueDate, priority);
    }

    toggleTaskStatus(taskId) {
        this.tasks[this.getTaskIndex(taskId)].toggleTaskStatus();
    }

    getTask(taskId) {
        let task = null;

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() == taskId) {
                task = this.tasks[i];
            }
        }

        return task;
    }

    getTasks() {
        return this.tasks
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ "./src/ToDo.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");





class Storage {
    static #saveName = 'ToDoList';

    static saveData(data) {
        localStorage.setItem(this.#saveName, JSON.stringify(data));
    }

    static loadData() {
        let loadedData = false;

        let projects = JSON.parse(localStorage.getItem(this.#saveName));

        if (projects) {
            projects = projects.map(project => Object.assign(new _Project_js__WEBPACK_IMPORTED_MODULE_1__.default(), project));

            projects.forEach(project => {
                project.setTasks(project.getTasks().map((task => Object.assign(new _Task_js__WEBPACK_IMPORTED_MODULE_2__.default(), task))))
            });
    
            _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.setProjects(projects);

            loadedData = true;
        }

        return loadedData;
    }

    static initToDo() {
        if (!this.loadData()) {
            let defaultProject = new _Project_js__WEBPACK_IMPORTED_MODULE_1__.default('default');

            defaultProject.addTask(new _Task_js__WEBPACK_IMPORTED_MODULE_2__.default('Example', 'An example task', 
            (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(), { representation: 'date' }), 'Low'));

            _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewProject(defaultProject);
        }
    }

    static removeData() {
        localStorage.removeItem(this.#saveName);
    }
}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    static #nextId = 0;

    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Task.#nextId++;
        this.isCompleted = false;
    }

    setAttributes(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggleTaskStatus() {
        this.isCompleted = !this.isCompleted;
    }

    getStatus() {
        return this.isCompleted;
    }

    getName() {
        return this.name;
    }

    getDescription = () => {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getId() {
        return this.id;
    }
}

/***/ }),

/***/ "./src/ToDo.js":
/*!*********************!*\
  !*** ./src/ToDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");





class ToDo {
    static #projects = [];

    static addNewProject(project) {
        this.#projects.push(project);

        _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
    }

    static changeTaskStatus(taskId) {
        let index = this.getProjectOfTask(taskId);

        if (index != -1) {
            this.#projects[index].toggleTaskStatus(taskId);

            _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
        }
    }

    static setProjects(projects) {
        this.#projects = projects;

        _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
    }

    static getAllTasks() {
        let tasks = [];

        for (let i = 0; i < this.#projects.length; i++) {
            this.#projects[i].getTasks().forEach(task => {
                tasks.push(task);
            });
        }

        return tasks;
    }

    static getProjects() {
        return this.#projects;
    }

    static addNewTask(task, project) {
        let index = this.#getProjectIndex(project);

        if (index != -1) {
            this.#projects[index].addTask(task);

            _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
        }
        else if (project == 'No project') {
            this.#projects[0].addTask(task);
        }
    }

    static #getProjectIndex(project) {
        let index = -1;

        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getName() === project) {
                index = i;
                break;
            }
        }
        return index;
    }

    static getProjectNames() {
        return this.#projects.map(project => project.getName());
    }

    static getProjectTasks(project) {
        let index = this.#getProjectIndex(project);
        let tasks = null;

        if (index != -1) {
            tasks = this.#projects[index].getTasks();
        }

        return tasks;
    }

    static getDueTodayTasks = () => {
        let tasks = [];

        for (let i = 0; i < this.#projects.length; i++) {
            let projectTasks = this.#projects[i].getTasks();

            for (let j = 0; j < projectTasks.length; j++) {
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(projectTasks[j].getDueDate()))) {
                    tasks.push(projectTasks[j]);
                }
            }
        }

        return tasks;
    }

    static deleteTask(taskId) {
        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getTaskIndex(taskId) != -1) {
                this.#projects[i].deleteTask(this.#projects[i].getTaskIndex(taskId));
                _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
                break;
            }
        }
    }

    static changeTaskInfo(taskId, name, desc, dueDate, priority) {
        let projectIndex = this.getProjectOfTask(taskId);
        let taskIndex;

        if (projectIndex != -1) {
            taskIndex = this.#projects[projectIndex].getTaskIndex(taskId);

            if (taskIndex != -1) {
                this.#projects[projectIndex].updateTaskInfo(taskIndex, name, desc, dueDate, priority);
                _Storage_js__WEBPACK_IMPORTED_MODULE_2__.default.saveData(this.#projects);
            }
        }
    }


    static getDueThisWeekTasks = () => {
        let tasks = [];
        let nextWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(), 7);

        for (let i = 0; i < this.#projects.length; i++) {
            let projectTasks = this.#projects[i].getTasks();

            for (let j = 0; j < projectTasks.length; j++) {
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(projectTasks[j].getDueDate()), nextWeek) != 1) {
                    tasks.push(projectTasks[j]);
                }
            }
        }

        return tasks;
    }

    static getProjectOfTask(taskId) {
        let projectIndex = -1;

        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getTaskIndex(taskId) != -1) {
                projectIndex = i;
            }
        }

        return projectIndex;
    }

    static getTaskInfo(taskId) {
        let projectIndex = this.getProjectOfTask(taskId);
        let task = this.#projects[projectIndex].getTask(taskId);

        return [task.getName(), task.getDescription(), task.getDueDate(), task.getPriority()];
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ "./src/ToDo.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");





class UI {
    static #activateBurgerMenu = () => {
        const body = document.querySelector('body');
        const burgerMenuBtn = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('#sidebar');

        let burgerMenuOpen = false;

        burgerMenuBtn.addEventListener('click', () => {
            if (!burgerMenuOpen) {
                burgerMenuOpen = true;
            }
            else {
                burgerMenuOpen = false;
            }
        
            sidebar.classList.toggle('visible-mobile-nav');
            burgerMenuBtn.classList.toggle('open');
        });
    }

    static showNewTaskModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-task-modal">
                <div class="modal-header">
                    <h4>New task</h4>
                </div>

                <div class="inputs">
                    <div class="new-task-modal-left-panel">
                        <div class="task-property">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input"></textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select id="task-priority-input">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="task-property">
                            <label>Project</label>
                            <br>
                            <select id="task-project-input">
                                <option>No project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Add task</button>
                </div>
            </div>
        </div>`
        );

        this.#updateProjectList();

        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        this.addModalEventListeners(modalType);
    }

    static showNewProjectModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>New project</h4>
                </div>

                <div class="inputs">
                    <div class="project-property">
                        <label>Title</label>
                        <br>
                        <input type="text" id="proj-name-input">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        const continueBtn = document.querySelector('.continue-btn');
        // The 2nd element is the modal header.
        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType);
    }

    static showEditTaskModal = (taskId) => {
        const body = document.querySelector('body');
        const taskInfo = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getTaskInfo(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="edit-task-modal">
                <div class="modal-header">
                    <h4>Edit Task</h4>
                </div>

                <div class="inputs">
                    <div class="new-task-modal-left-panel">
                        <div class="task-property">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input" value="${taskInfo[0]}">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input">${taskInfo[1]}</textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input" value="${taskInfo[2]}">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select id="task-priority-input">
                                <option ${(taskInfo[3] === 'Low')? 'selected="selected"' : ''}>Low</option>
                                <option ${(taskInfo[3] === 'Medium')? 'selected="selected"' : ''}>Medium</option>
                                <option ${(taskInfo[3] === 'High')? 'selected="selected"' : ''}>High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType, taskId);
    }

    static showTaskInfoModal = (taskId) => {
        const body = document.querySelector('body');
        const taskInfo = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getTaskInfo(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="show-task-modal">
                <div class="modal-header">
                    <h4>${taskInfo[0]}</h4>
                </div>

                <div class="properties">
                    <div class="show-task-modal-left-panel">
                        <div class="task-property">
                            <p class="property-title">Title:</p>
                            <p>${taskInfo[0]}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-desc">Description:</p>
                            <p>${taskInfo[1]}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div class="task-property">
                            <p class="property-due-date">Due date:</p>
                            <p>${taskInfo[2]}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-priority">Priority:</p>
                            <p>${taskInfo[3]}</p>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Edit task</button>
                </div>
            </div>
        </div>`
        );


        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType, taskId);
    }

    static addNewTask = (name, dueDate, priority, id, taskStatus) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task" data-taskid ="${id}">
                <div class="left-panel">
                    <input type="checkbox" class="task-finished" data-taskid="${id}">
                    <label>${name} - ${dueDate}</label>
                </div>

                <div class="right-panel">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span id="task-priority" class="material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');
        let taskStatusToggle;

        for (let i = 0; i < completedTaskInputs.length; i++) {
            if (completedTaskInputs[i].dataset.taskid == id) {
                taskStatusToggle = completedTaskInputs[i];
                break;
            };
        }

        taskStatusToggle.addEventListener('click', (e) => {
            this.changeTaskStatus(id, e.target.parentNode.parentNode);
        })

        if (taskStatus) {
            const tasks = document.querySelectorAll('.task');
            let task;

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].dataset.taskid == id) {
                    task = tasks[i];
                    break;
                };
            }
    
            task.childNodes[1].classList.toggle('completedl');
            task.childNodes[1].childNodes[1].checked = true;
            task.childNodes[3].classList.toggle('completedr');
        };

        this.addTaskInfoEL(id);
        this.addEditTaskBtnEL(id);
        this.addDeleteTaskBtnEL(id);
    }

    static changeTaskStatus(id, taskEntry) {
        _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.changeTaskStatus(id);

        taskEntry.childNodes[1].classList.toggle('completedl');
        taskEntry.childNodes[3].classList.toggle('completedr');
    }

    static addTaskInfoEL(taskId) {
        const taskInfo = document.querySelector(`[data-taskid='${taskId}']`);
        const label = taskInfo.querySelector('label');

        label.addEventListener('click', (e) => {
            this.showTaskInfoModal(taskId);
        })
    }

    static addDeleteTaskBtnEL(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn;

        for (let i = 0; i < deleteTaskBtns.length; i++) {
            if (deleteTaskBtns[i].dataset.taskid == id) {
                deleteTaskBtn = deleteTaskBtns[i];
                break;
            };
        }

        deleteTaskBtn.addEventListener('click', (e) => {
            this.removeTask(e.target.dataset.taskid);

            _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(e.target.dataset.taskid);
        })
    }

    static addEditTaskBtnEL(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        let editTaskBtn;

        for (let i = 0; i < editTaskBtns.length; i++) {
            if (editTaskBtns[i].dataset.taskid == id) {
                editTaskBtn = editTaskBtns[i];
                break;
            }
        }

        editTaskBtn.addEventListener('click', (e) => {
            this.showEditTaskModal(e.target.dataset.taskid);
        });
    }

    static #handleTaskEdit(id) {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectInput = document.querySelector('#task-project-input');

        _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.changeTaskInfo(id, newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority);

        this.#updateTaskEntry(id, newTaskName, newTaskDueDate, newTaskPriority);

        this.removeModal();
    }

    static #updateTaskEntry(taskId, name, dueDate, priority) {
        const task = document.querySelector(`[data-taskid='${taskId}']`);
        const taskPriority = task.querySelector('#task-priority');
        const taskName = task.querySelector('label');

        taskName.innerText = `${name} - ${dueDate}`;

        // Remove current priority.
        taskPriority.classList.remove('task-low-priority');
        taskPriority.classList.remove('task-medium-priority');
        taskPriority.classList.remove('task-high-priority');

        taskPriority.classList.add(`task-${priority.toLowerCase()}-priority`);
    }

    static addNewProject = (name, id) => {
        const projects = document.getElementsByClassName('project');

        if (projects.length == 0) {
            const projectContainer = document.querySelector('.projects');
            const containerHeader = projectContainer.childNodes[1];

            containerHeader.insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }
        else {
            projects[projects.length -1].insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }

        UI.#updateTaskFiltersEventListeners();
    }

    static removeModal = () => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        if (modal) {
            modal.textContent = '';

            body.removeChild(modal);
    
            UI.#removeModalEventListeners();
        }
    }

    static removeTask = (id) => {
        const task = document.querySelector(`[data-taskid='${id}']`);
        const content = document.querySelector('.content');

        content.removeChild(task);
    }

    static clearTasks = () => {
        const content = document.querySelector('.content');

        const tasks = document.querySelectorAll('.task');

        tasks.forEach(task => {
            content.removeChild(task);
        });
    }

    static removeProject = (id) => {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projects = document.querySelector('.projects');

        projects.removeChild(project);
    }

    static clearProjects = () => {
        const projectContainer = document.querySelector('.projects');

        const projects = document.querySelectorAll('.project');

        projects.forEach(proj => {
            projectContainer.removeChild(proj);
        })
    }

    static #handleModalEventEsc = (e) => {
        if (e.key === 'Escape') {
            UI.removeModal();
        }
    }

    static #handleNewProject() {
        const newProjectName = document.querySelector('#proj-name-input');

        const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_2__.default(newProjectName.value);

        _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewProject(newProject);

        UI.addNewProject(newProject.getName(), newProject.getId());

        UI.removeModal();
    }

    static #handleNewTask() {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectInput = document.querySelector('#task-project-input');
        const newTaskProject = taskProjectInput.options[taskProjectInput.selectedIndex].value;

        const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__.default(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority);

        _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewTask(newTask, newTaskProject);

        UI.addNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(),
        newTask.getId(), newTask.getStatus());

        UI.removeModal();
    }

    static addModalEventListeners = (modalType, taskId = -1) => {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const cancelBtn = document.querySelector('.cancel-btn');
        const continueBtn = document.querySelector('.continue-btn');

        if (modalType === 'New task') {
            continueBtn.addEventListener('click', this.#handleNewTask);
        }
        else if (modalType === 'New project') {
            continueBtn.addEventListener('click', this.#handleNewProject);
        }
        else if (modalType === 'Edit Task') {
            continueBtn.addEventListener('click', () => {
                this.#handleTaskEdit(taskId);
            });
        }
        else {
            continueBtn.addEventListener('click', () => {
                this.removeModal();
                this.showEditTaskModal(taskId);
            });
        }

        modalWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleModalEventEsc);

        cancelBtn.addEventListener('click', UI.removeModal);
    }

    static #removeModalEventListeners = () => {
        const body = document.querySelector('body');

        body.removeEventListener('keydown', UI.#handleModalEventEsc);
    }

    static #handleFilterSelection = (selectedBtn, btnNodeList) => {
        const projectNameDisplay = document.querySelector('#project-name');

        // The paragraph element is the 3rd children of the btn pressed.
        const projectName = selectedBtn.childNodes[3];

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected')) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        selectedBtn.classList.add('selected');

        projectNameDisplay.innerText = projectName.innerText;

        this.#getProjectsForFilter(selectedBtn.childNodes[3].innerText);
    }

    static #getProjectsForFilter = (filter) => {
        let tasks;

        if (filter === 'All tasks') {
            tasks = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getAllTasks();
        }
        else if (filter === 'Today') {
            tasks = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getDueTodayTasks();
        }
        else if (filter === 'This week') {
            tasks = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getDueThisWeekTasks();
        }
        else {
            tasks = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjectTasks(filter);
        }

        this.clearTasks();        

        if (tasks) {
            tasks.forEach(task => {
                this.addNewTask(task.getName(), task.getDueDate(), task.getPriority(),
                task.getId(), task.getStatus());
            });
        }
    }

    static #updateTaskFiltersEventListeners = () => {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', (e) => {
            UI.#handleFilterSelection(e.currentTarget, taskFilters);
        }));
    }

    static addHomepageEventListeners = () => {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('.add-project-btn');

        UI.#updateTaskFiltersEventListeners();

        addProjectBtn.addEventListener('click', (e) => {
            UI.showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });

        UI.#activateBurgerMenu();
    }

    static #updateProjectList() {
        const taskProjectInput = document.querySelector('#task-project-input');
        let projectNames = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjectNames();

        for (let i = 0; i < projectNames.length; i++) {
            if (projectNames[i] != 'default') {
                taskProjectInput.insertAdjacentHTML('beforeend', `
                <option>${projectNames[i]}</option>
                `)
            }
        }
    }

    static initHomePage() {
        UI.addHomepageEventListeners();

        let projects = _ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();

        projects.forEach(project => {
            if (project.getName() != 'default') {
                this.addNewProject(project.getName(), project.getId());
            }
        });

        const showAllTasks = document.querySelector('#all-tasks');

        showAllTasks.click();
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0SVNPL2luZGV4LmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL1RvRG8tTGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL1RvRG8uanMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvRG8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0Ly4vc3JjL1VJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CLGVBQWUsZ0VBQVM7O0FBRXhCO0FBQ0E7QUFDQTs7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QUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLEMiLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZvcm1hdElTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUgYWNjb3JkaW5nIHRvIHRoZSBJU08gODYwMSBzdGFuZGFyZCAoaHR0cDovL3N1cHBvcnQuc2FzLmNvbS9kb2N1bWVudGF0aW9uL2NkbC9lbi9scmRpY3QvNjQzMTYvSFRNTC9kZWZhdWx0L3ZpZXdlci5odG0jYTAwMzE2OTgxNC5odG0pLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0LiBPcHRpb25zIG1heSBiZSBwYXNzZWQgdG8gY29udHJvbCB0aGUgcGFydHMgYW5kIG5vdGF0aW9ucyBvZiB0aGUgZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHsnZXh0ZW5kZWQnfCdiYXNpYyd9IFtvcHRpb25zLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGlmICdiYXNpYycsIGhpZGUgZGVsaW1pdGVycyBiZXR3ZWVuIGRhdGUgYW5kIHRpbWUgdmFsdWVzLlxuICogQHBhcmFtIHsnY29tcGxldGUnfCdkYXRlJ3wndGltZSd9IFtvcHRpb25zLnJlcHJlc2VudGF0aW9uPSdjb21wbGV0ZSddIC0gZm9ybWF0IGRhdGUsIHRpbWUgd2l0aCB0aW1lIHpvbmUsIG9yIGJvdGguXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZvcm1hdGAgbXVzdCBiZSAnZXh0ZW5kZWQnIG9yICdiYXNpYydcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnJlcHJlc2VuYXRpb25gIG11c3QgYmUgJ2RhdGUnLCAndGltZScgb3IgJ2NvbXBsZXRlJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0IChVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpKVxuICogLy89PiAnMjAxOS0wOS0xOFQxOTowMDo1MlonXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxOCBTZXB0ZW1iZXIgMjAxOSBpbiBJU08gODYwMSwgc2hvcnQgZm9ybWF0IChVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IGZvcm1hdDogJ2Jhc2ljJyB9KVxuICogLy89PiAnMjAxOTA5MThUMTkwMDUyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0LCBkYXRlIG9ubHk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KVxuICogLy89PiAnMjAxOS0wOS0xOCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCwgdGltZSBvbmx5IChVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IHJlcHJlc2VudGF0aW9uOiAndGltZScgfSlcbiAqIC8vPT4gJzE5OjAwOjUyWidcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRJU08oZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIjEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IFwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoLCBcIiBwcmVzZW50XCIpKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgPT0gbnVsbCA/ICdleHRlbmRlZCcgOiBTdHJpbmcob3B0aW9ucy5mb3JtYXQpO1xuICB2YXIgcmVwcmVzZW50YXRpb24gPSBvcHRpb25zLnJlcHJlc2VudGF0aW9uID09IG51bGwgPyAnY29tcGxldGUnIDogU3RyaW5nKG9wdGlvbnMucmVwcmVzZW50YXRpb24pO1xuXG4gIGlmIChmb3JtYXQgIT09ICdleHRlbmRlZCcgJiYgZm9ybWF0ICE9PSAnYmFzaWMnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJmb3JtYXQgbXVzdCBiZSAnZXh0ZW5kZWQnIG9yICdiYXNpYydcIik7XG4gIH1cblxuICBpZiAocmVwcmVzZW50YXRpb24gIT09ICdkYXRlJyAmJiByZXByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnICYmIHJlcHJlc2VudGF0aW9uICE9PSAnY29tcGxldGUnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJyZXByZXNlbnRhdGlvbiBtdXN0IGJlICdkYXRlJywgJ3RpbWUnLCBvciAnY29tcGxldGUnXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgdHpPZmZzZXQgPSAnJztcbiAgdmFyIGRhdGVEZWxpbWl0ZXIgPSBmb3JtYXQgPT09ICdleHRlbmRlZCcgPyAnLScgOiAnJztcbiAgdmFyIHRpbWVEZWxpbWl0ZXIgPSBmb3JtYXQgPT09ICdleHRlbmRlZCcgPyAnOicgOiAnJzsgLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICdkYXRlJyBvciAnY29tcGxldGUnXG5cbiAgaWYgKHJlcHJlc2VudGF0aW9uICE9PSAndGltZScpIHtcbiAgICB2YXIgZGF5ID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXREYXRlKCksIDIpO1xuICAgIHZhciBtb250aCA9IGFkZExlYWRpbmdaZXJvcyhvcmlnaW5hbERhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xuICAgIHZhciB5ZWFyID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRGdWxsWWVhcigpLCA0KTsgLy8geXl5eU1NZGQgb3IgeXl5eS1NTS1kZC5cblxuICAgIHJlc3VsdCA9IFwiXCIuY29uY2F0KHllYXIpLmNvbmNhdChkYXRlRGVsaW1pdGVyKS5jb25jYXQobW9udGgpLmNvbmNhdChkYXRlRGVsaW1pdGVyKS5jb25jYXQoZGF5KTtcbiAgfSAvLyBSZXByZXNlbnRhdGlvbiBpcyBlaXRoZXIgJ3RpbWUnIG9yICdjb21wbGV0ZSdcblxuXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gJ2RhdGUnKSB7XG4gICAgLy8gQWRkIHRoZSB0aW1lem9uZS5cbiAgICB2YXIgb2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICB2YXIgYWJzb2x1dGVPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICAgICAgdmFyIGhvdXJPZmZzZXQgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNvbHV0ZU9mZnNldCAvIDYwKSwgMik7XG4gICAgICB2YXIgbWludXRlT2Zmc2V0ID0gYWRkTGVhZGluZ1plcm9zKGFic29sdXRlT2Zmc2V0ICUgNjAsIDIpOyAvLyBJZiBsZXNzIHRoYW4gMCwgdGhlIHNpZ24gaXMgKywgYmVjYXVzZSBpdCBpcyBhaGVhZCBvZiB0aW1lLlxuXG4gICAgICB2YXIgc2lnbiA9IG9mZnNldCA8IDAgPyAnKycgOiAnLSc7XG4gICAgICB0ek9mZnNldCA9IFwiXCIuY29uY2F0KHNpZ24pLmNvbmNhdChob3VyT2Zmc2V0LCBcIjpcIikuY29uY2F0KG1pbnV0ZU9mZnNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR6T2Zmc2V0ID0gJ1onO1xuICAgIH1cblxuICAgIHZhciBob3VyID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRIb3VycygpLCAyKTtcbiAgICB2YXIgbWludXRlID0gYWRkTGVhZGluZ1plcm9zKG9yaWdpbmFsRGF0ZS5nZXRNaW51dGVzKCksIDIpO1xuICAgIHZhciBzZWNvbmQgPSBhZGRMZWFkaW5nWmVyb3Mob3JpZ2luYWxEYXRlLmdldFNlY29uZHMoKSwgMik7IC8vIElmIHRoZXJlJ3MgYWxzbyBkYXRlLCBzZXBhcmF0ZSBpdCB3aXRoIHRpbWUgd2l0aCAnVCdcblxuICAgIHZhciBzZXBhcmF0b3IgPSByZXN1bHQgPT09ICcnID8gJycgOiAnVCc7IC8vIENyZWF0ZXMgYSB0aW1lIHN0cmluZyBjb25zaXN0aW5nIG9mIGhvdXIsIG1pbnV0ZSwgYW5kIHNlY29uZCwgc2VwYXJhdGVkIGJ5IGRlbGltaXRlcnMsIGlmIGRlZmluZWQuXG5cbiAgICB2YXIgdGltZSA9IFtob3VyLCBtaW51dGUsIHNlY29uZF0uam9pbih0aW1lRGVsaW1pdGVyKTsgLy8gSEhtbXNzIG9yIEhIOm1tOnNzLlxuXG4gICAgcmVzdWx0ID0gXCJcIi5jb25jYXQocmVzdWx0KS5jb25jYXQoc2VwYXJhdG9yKS5jb25jYXQodGltZSkuY29uY2F0KHR6T2Zmc2V0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgdG9kYXkuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mVG9kYXkoKVxuICogLy89PiBNb24gT2N0IDYgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZUb2RheSgpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZEYXkoRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBzdGF0aWMgI25leHRJZCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaWQgPSBQcm9qZWN0LiNuZXh0SWQrKztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrSW5kZXgodGFza0lkKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGFza0lkID09IHRoaXMudGFza3NbaV0uZ2V0SWQoKSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHRhc2tQb3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrUG9zLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrSW5mbyh0YXNrUG9zLCBuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGFza3NbdGFza1Bvc10uc2V0QXR0cmlidXRlcyhuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGFza1N0YXR1cyh0YXNrSWQpIHtcclxuICAgICAgICB0aGlzLnRhc2tzW3RoaXMuZ2V0VGFza0luZGV4KHRhc2tJZCldLnRvZ2dsZVRhc2tTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldElkKCkgPT0gdGFza0lkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy50YXNrc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXNrcyh0YXNrcykge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRvRG8gZnJvbSAnLi9Ub0RvLmpzJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJztcclxuaW1wb3J0IHsgc3RhcnRPZlRvZGF5LCBmb3JtYXRJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyAjc2F2ZU5hbWUgPSAnVG9Eb0xpc3QnO1xyXG5cclxuICAgIHN0YXRpYyBzYXZlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy4jc2F2ZU5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZERhdGEgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLiNzYXZlTmFtZSkpO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdHMpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldFRhc2tzKHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2sgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBUb0RvLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZERhdGEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxvYWRlZERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXRUb0RvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2FkRGF0YSgpKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKG5ldyBUYXNrKCdFeGFtcGxlJywgJ0FuIGV4YW1wbGUgdGFzaycsIFxyXG4gICAgICAgICAgICBmb3JtYXRJU08oc3RhcnRPZlRvZGF5KCksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KSwgJ0xvdycpKTtcclxuXHJcbiAgICAgICAgICAgIFRvRG8uYWRkTmV3UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVEYXRhKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuI3NhdmVOYW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgc3RhdGljICNuZXh0SWQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLiNuZXh0SWQrKztcclxuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0cmlidXRlcyhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUYXNrU3RhdHVzKCkge1xyXG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSAhdGhpcy5pc0NvbXBsZXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcyc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7IGlzVG9kYXksIHN0YXJ0T2ZUb2RheSwgY29tcGFyZUFzYywgYWRkRGF5cywgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcclxuICAgIHN0YXRpYyAjcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgYWRkTmV3UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy4jcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgU3RvcmFnZS5zYXZlRGF0YSh0aGlzLiNwcm9qZWN0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoYW5nZVRhc2tTdGF0dXModGFza0lkKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRQcm9qZWN0T2ZUYXNrKHRhc2tJZCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0c1tpbmRleF0udG9nZ2xlVGFza1N0YXR1cyh0YXNrSWQpO1xyXG5cclxuICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YSh0aGlzLiNwcm9qZWN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gcHJvamVjdHM7XHJcblxyXG4gICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEodGhpcy4jcHJvamVjdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxUYXNrcygpIHtcclxuICAgICAgICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0c1tpXS5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGROZXdUYXNrKHRhc2ssIHByb2plY3QpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLiNnZXRQcm9qZWN0SW5kZXgocHJvamVjdCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0c1tpbmRleF0uYWRkVGFzayh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEodGhpcy4jcHJvamVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwcm9qZWN0ID09ICdObyBwcm9qZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0c1swXS5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2dldFByb2plY3RJbmRleChwcm9qZWN0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI3Byb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gcHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0TmFtZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzLm1hcChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UHJvamVjdFRhc2tzKHByb2plY3QpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLiNnZXRQcm9qZWN0SW5kZXgocHJvamVjdCk7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRhc2tzID0gdGhpcy4jcHJvamVjdHNbaW5kZXhdLmdldFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldER1ZVRvZGF5VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRoaXMuI3Byb2plY3RzW2ldLmdldFRhc2tzKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RUYXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVG9kYXkocGFyc2VJU08ocHJvamVjdFRhc2tzW2pdLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3MucHVzaChwcm9qZWN0VGFza3Nbal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVRhc2sodGFza0lkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4jcHJvamVjdHNbaV0uZ2V0VGFza0luZGV4KHRhc2tJZCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RzW2ldLmRlbGV0ZVRhc2sodGhpcy4jcHJvamVjdHNbaV0uZ2V0VGFza0luZGV4KHRhc2tJZCkpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YSh0aGlzLiNwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hhbmdlVGFza0luZm8odGFza0lkLCBuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGlzLmdldFByb2plY3RPZlRhc2sodGFza0lkKTtcclxuICAgICAgICBsZXQgdGFza0luZGV4O1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdEluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRhc2tJbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFza0luZGV4KHRhc2tJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFza0luZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnVwZGF0ZVRhc2tJbmZvKHRhc2tJbmRleCwgbmFtZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YSh0aGlzLiNwcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXREdWVUaGlzV2Vla1Rhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0V2VlayA9IGFkZERheXMoc3RhcnRPZlRvZGF5KCksIDcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Byb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSB0aGlzLiNwcm9qZWN0c1tpXS5nZXRUYXNrcygpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0VGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlQXNjKHBhcnNlSVNPKHByb2plY3RUYXNrc1tqXS5nZXREdWVEYXRlKCkpLCBuZXh0V2VlaykgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2gocHJvamVjdFRhc2tzW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0T2ZUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4jcHJvamVjdHNbaV0uZ2V0VGFza0luZGV4KHRhc2tJZCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFRhc2tJbmZvKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGlzLmdldFByb2plY3RPZlRhc2sodGFza0lkKTtcclxuICAgICAgICBsZXQgdGFzayA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RJbmRleF0uZ2V0VGFzayh0YXNrSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW3Rhc2suZ2V0TmFtZSgpLCB0YXNrLmdldERlc2NyaXB0aW9uKCksIHRhc2suZ2V0RHVlRGF0ZSgpLCB0YXNrLmdldFByaW9yaXR5KCldO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9EbyBmcm9tICcuL1RvRG8uanMnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc3RhdGljICNhY3RpdmF0ZUJ1cmdlck1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBidXJnZXJNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XHJcblxyXG4gICAgICAgIGxldCBidXJnZXJNZW51T3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBidXJnZXJNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWJ1cmdlck1lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51T3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXJnZXJNZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZS1tb2JpbGUtbmF2Jyk7XHJcbiAgICAgICAgICAgIGJ1cmdlck1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93TmV3VGFza01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pk5ldyB0YXNrPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3LXRhc2stbW9kYWwtbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFzay1uYW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRhc2stZGVzY3JpcHRpb24taW5wdXRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3LXRhc2stbW9kYWwtcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EdWUgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInRhc2stZHVlZGF0ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidGFzay1wcmlvcml0eS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0YXNrLXByb2plY3QtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vIHByb2plY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLWJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRpbnVlLWJ0blwiPkFkZCB0YXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGFsVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1oZWFkZXInKS5jaGlsZE5vZGVzWzFdLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRNb2RhbEV2ZW50TGlzdGVuZXJzKG1vZGFsVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dOZXdQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3QtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+TmV3IHByb2plY3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9qLW5hbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1idG5cIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb250aW51ZS1idG5cIj5BZGQgcHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjb250aW51ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250aW51ZS1idG4nKTtcclxuICAgICAgICAvLyBUaGUgMm5kIGVsZW1lbnQgaXMgdGhlIG1vZGFsIGhlYWRlci5cclxuICAgICAgICBjb25zdCBtb2RhbFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyJykuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIFVJLmFkZE1vZGFsRXZlbnRMaXN0ZW5lcnMobW9kYWxUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0VkaXRUYXNrTW9kYWwgPSAodGFza0lkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IFRvRG8uZ2V0VGFza0luZm8odGFza0lkKTtcclxuXHJcbiAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkVkaXQgVGFzazwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy10YXNrLW1vZGFsLWxlZnQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2stbmFtZS1pbnB1dFwiIHZhbHVlPVwiJHt0YXNrSW5mb1swXX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiPiR7dGFza0luZm9bMV19PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy10YXNrLW1vZGFsLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIGRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWR1ZWRhdGUtaW5wdXRcIiB2YWx1ZT1cIiR7dGFza0luZm9bMl19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0YXNrLXByaW9yaXR5LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAkeyh0YXNrSW5mb1szXSA9PT0gJ0xvdycpPyAnc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJyA6ICcnfT5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICR7KHRhc2tJbmZvWzNdID09PSAnTWVkaXVtJyk/ICdzZWxlY3RlZD1cInNlbGVjdGVkXCInIDogJyd9Pk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gJHsodGFza0luZm9bM10gPT09ICdIaWdoJyk/ICdzZWxlY3RlZD1cInNlbGVjdGVkXCInIDogJyd9PkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLWJ0blwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRpbnVlLWJ0blwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWxUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWhlYWRlcicpLmNoaWxkTm9kZXNbMV0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICBVSS5hZGRNb2RhbEV2ZW50TGlzdGVuZXJzKG1vZGFsVHlwZSwgdGFza0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd1Rhc2tJbmZvTW9kYWwgPSAodGFza0lkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IFRvRG8uZ2V0VGFza0luZm8odGFza0lkKTtcclxuXHJcbiAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdy10YXNrLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PiR7dGFza0luZm9bMF19PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0aWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3ctdGFzay1tb2RhbC1sZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb3BlcnR5LXRpdGxlXCI+VGl0bGU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrSW5mb1swXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9wZXJ0eS1kZXNjXCI+RGVzY3JpcHRpb246PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrSW5mb1sxXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG93LXRhc2stbW9kYWwtcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stcHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvcGVydHktZHVlLWRhdGVcIj5EdWUgZGF0ZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Rhc2tJbmZvWzJdfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb3BlcnR5LXByaW9yaXR5XCI+UHJpb3JpdHk6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrSW5mb1szXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtYnRuXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGludWUtYnRuXCI+RWRpdCB0YXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtb2RhbFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtaGVhZGVyJykuY2hpbGROb2Rlc1sxXS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIFVJLmFkZE1vZGFsRXZlbnRMaXN0ZW5lcnMobW9kYWxUeXBlLCB0YXNrSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGROZXdUYXNrID0gKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBpZCwgdGFza1N0YXR1cykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb250ZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgZGF0YS10YXNraWQgPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGFzay1maW5pc2hlZFwiIGRhdGEtdGFza2lkPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+JHtuYW1lfSAtICR7ZHVlRGF0ZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBlZGl0LXRhc2stYnRuXCIgZGF0YS10YXNraWQgPVwiJHtpZH1cIj5lZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZGVsZXRlLXRhc2stYnRuXCIgZGF0YS10YXNraWQgPVwiJHtpZH1cIj5kZWxldGVfb3V0bGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRhc2stcHJpb3JpdHlcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHRhc2stJHtwcmlvcml0eS50b0xvd2VyQ2FzZSgpfS1wcmlvcml0eVwiPmNpcmNsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkVGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWZpbmlzaGVkJyk7XHJcbiAgICAgICAgbGV0IHRhc2tTdGF0dXNUb2dnbGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGxldGVkVGFza0lucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29tcGxldGVkVGFza0lucHV0c1tpXS5kYXRhc2V0LnRhc2tpZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGFza1N0YXR1c1RvZ2dsZSA9IGNvbXBsZXRlZFRhc2tJbnB1dHNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhc2tTdGF0dXNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRhc2tTdGF0dXMoaWQsIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRhc2tTdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG4gICAgICAgICAgICBsZXQgdGFzaztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrc1tpXS5kYXRhc2V0LnRhc2tpZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkbCcpO1xyXG4gICAgICAgICAgICB0YXNrLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGFzay5jaGlsZE5vZGVzWzNdLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZHInKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRhc2tJbmZvRUwoaWQpO1xyXG4gICAgICAgIHRoaXMuYWRkRWRpdFRhc2tCdG5FTChpZCk7XHJcbiAgICAgICAgdGhpcy5hZGREZWxldGVUYXNrQnRuRUwoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGFuZ2VUYXNrU3RhdHVzKGlkLCB0YXNrRW50cnkpIHtcclxuICAgICAgICBUb0RvLmNoYW5nZVRhc2tTdGF0dXMoaWQpO1xyXG5cclxuICAgICAgICB0YXNrRW50cnkuY2hpbGROb2Rlc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWRsJyk7XHJcbiAgICAgICAgdGFza0VudHJ5LmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRUYXNrSW5mb0VMKHRhc2tJZCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFza2lkPScke3Rhc2tJZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGFza0luZm8ucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcclxuXHJcbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUYXNrSW5mb01vZGFsKHRhc2tJZCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkRGVsZXRlVGFza0J0bkVMKGlkKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRhc2stYnRuJyk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdG47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlVGFza0J0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRlbGV0ZVRhc2tCdG5zW2ldLmRhdGFzZXQudGFza2lkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUYXNrQnRuID0gZGVsZXRlVGFza0J0bnNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRhc2soZS50YXJnZXQuZGF0YXNldC50YXNraWQpO1xyXG5cclxuICAgICAgICAgICAgVG9Eby5kZWxldGVUYXNrKGUudGFyZ2V0LmRhdGFzZXQudGFza2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRFZGl0VGFza0J0bkVMKGlkKSB7XHJcbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdGFzay1idG4nKTtcclxuICAgICAgICBsZXQgZWRpdFRhc2tCdG47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdFRhc2tCdG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlZGl0VGFza0J0bnNbaV0uZGF0YXNldC50YXNraWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIGVkaXRUYXNrQnRuID0gZWRpdFRhc2tCdG5zW2ldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93RWRpdFRhc2tNb2RhbChlLnRhcmdldC5kYXRhc2V0LnRhc2tpZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVUYXNrRWRpdChpZCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWR1ZWRhdGUtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5wdXQub3B0aW9uc1t0YXNrUHJpb3JpdHlJbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG5cclxuICAgICAgICBUb0RvLmNoYW5nZVRhc2tJbmZvKGlkLCBuZXdUYXNrTmFtZSwgbmV3VGFza0Rlc2MsIG5ld1Rhc2tEdWVEYXRlLCBuZXdUYXNrUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICB0aGlzLiN1cGRhdGVUYXNrRW50cnkoaWQsIG5ld1Rhc2tOYW1lLCBuZXdUYXNrRHVlRGF0ZSwgbmV3VGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjdXBkYXRlVGFza0VudHJ5KHRhc2tJZCwgbmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFza2lkPScke3Rhc2tJZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2sucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcclxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2sucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcclxuXHJcbiAgICAgICAgdGFza05hbWUuaW5uZXJUZXh0ID0gYCR7bmFtZX0gLSAke2R1ZURhdGV9YDtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcHJpb3JpdHkuXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stbG93LXByaW9yaXR5Jyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stbWVkaXVtLXByaW9yaXR5Jyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2staGlnaC1wcmlvcml0eScpO1xyXG5cclxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgdGFzay0ke3ByaW9yaXR5LnRvTG93ZXJDYXNlKCl9LXByaW9yaXR5YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZE5ld1Byb2plY3QgPSAobmFtZSwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGVhZGVyID0gcHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzWzFdO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVySGVhZGVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWZpbHRlciBwcm9qZWN0XCIgZGF0YS1wcm9qaWQ9XCIke2lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmRlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtuYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0xXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1maWx0ZXIgcHJvamVjdFwiIGRhdGEtcHJvamlkPVwiJHtpZH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5kZXNjcmlwdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPiR7bmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVJLiN1cGRhdGVUYXNrRmlsdGVyc0V2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIFVJLiNyZW1vdmVNb2RhbEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVUYXNrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2tpZD0nJHtpZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGVhclRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcblxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodGFzayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZVByb2plY3QgPSAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamlkPScke2lkfSddYCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbiAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvaiA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvaik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2hhbmRsZU1vZGFsRXZlbnRFc2MgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgVUkucmVtb3ZlTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVOZXdQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otbmFtZS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpO1xyXG5cclxuICAgICAgICBUb0RvLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIFVJLmFkZE5ld1Byb2plY3QobmV3UHJvamVjdC5nZXROYW1lKCksIG5ld1Byb2plY3QuZ2V0SWQoKSk7XHJcblxyXG4gICAgICAgIFVJLnJlbW92ZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVOZXdUYXNrKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWR1ZWRhdGUtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5SW5wdXQub3B0aW9uc1t0YXNrUHJpb3JpdHlJbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tQcm9qZWN0ID0gdGFza1Byb2plY3RJbnB1dC5vcHRpb25zW3Rhc2tQcm9qZWN0SW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXdUYXNrTmFtZSwgbmV3VGFza0Rlc2MsIG5ld1Rhc2tEdWVEYXRlLCBuZXdUYXNrUHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBUb0RvLmFkZE5ld1Rhc2sobmV3VGFzaywgbmV3VGFza1Byb2plY3QpO1xyXG5cclxuICAgICAgICBVSS5hZGROZXdUYXNrKG5ld1Rhc2suZ2V0TmFtZSgpLCBuZXdUYXNrLmdldER1ZURhdGUoKSwgbmV3VGFzay5nZXRQcmlvcml0eSgpLFxyXG4gICAgICAgIG5ld1Rhc2suZ2V0SWQoKSwgbmV3VGFzay5nZXRTdGF0dXMoKSk7XHJcblxyXG4gICAgICAgIFVJLnJlbW92ZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZE1vZGFsRXZlbnRMaXN0ZW5lcnMgPSAobW9kYWxUeXBlLCB0YXNrSWQgPSAtMSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcclxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRpbnVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRpbnVlLWJ0bicpO1xyXG5cclxuICAgICAgICBpZiAobW9kYWxUeXBlID09PSAnTmV3IHRhc2snKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jaGFuZGxlTmV3VGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vZGFsVHlwZSA9PT0gJ05ldyBwcm9qZWN0Jykge1xyXG4gICAgICAgICAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI2hhbmRsZU5ld1Byb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtb2RhbFR5cGUgPT09ICdFZGl0IFRhc2snKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jaGFuZGxlVGFza0VkaXQodGFza0lkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250aW51ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRUYXNrTW9kYWwodGFza0lkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLXdyYXBwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgVUkucmVtb3ZlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFVJLiNoYW5kbGVNb2RhbEV2ZW50RXNjKTtcclxuXHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkucmVtb3ZlTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjcmVtb3ZlTW9kYWxFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBVSS4jaGFuZGxlTW9kYWxFdmVudEVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNoYW5kbGVGaWx0ZXJTZWxlY3Rpb24gPSAoc2VsZWN0ZWRCdG4sIGJ0bk5vZGVMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5cclxuICAgICAgICAvLyBUaGUgcGFyYWdyYXBoIGVsZW1lbnQgaXMgdGhlIDNyZCBjaGlsZHJlbiBvZiB0aGUgYnRuIHByZXNzZWQuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBzZWxlY3RlZEJ0bi5jaGlsZE5vZGVzWzNdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bk5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChidG5Ob2RlTGlzdFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgIGJ0bk5vZGVMaXN0W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgIHByb2plY3ROYW1lRGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIHRoaXMuI2dldFByb2plY3RzRm9yRmlsdGVyKHNlbGVjdGVkQnRuLmNoaWxkTm9kZXNbM10uaW5uZXJUZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2dldFByb2plY3RzRm9yRmlsdGVyID0gKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrcztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ0FsbCB0YXNrcycpIHtcclxuICAgICAgICAgICAgdGFza3MgPSBUb0RvLmdldEFsbFRhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpbHRlciA9PT0gJ1RvZGF5Jykge1xyXG4gICAgICAgICAgICB0YXNrcyA9IFRvRG8uZ2V0RHVlVG9kYXlUYXNrcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWx0ZXIgPT09ICdUaGlzIHdlZWsnKSB7XHJcbiAgICAgICAgICAgIHRhc2tzID0gVG9Eby5nZXREdWVUaGlzV2Vla1Rhc2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrcyA9IFRvRG8uZ2V0UHJvamVjdFRhc2tzKGZpbHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFyVGFza3MoKTsgICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGFza3MpIHtcclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3VGFzayh0YXNrLmdldE5hbWUoKSwgdGFzay5nZXREdWVEYXRlKCksIHRhc2suZ2V0UHJpb3JpdHkoKSxcclxuICAgICAgICAgICAgICAgIHRhc2suZ2V0SWQoKSwgdGFzay5nZXRTdGF0dXMoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3VwZGF0ZVRhc2tGaWx0ZXJzRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0ZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1maWx0ZXInKTtcclxuXHJcbiAgICAgICAgdGFza0ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4gZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgVUkuI2hhbmRsZUZpbHRlclNlbGVjdGlvbihlLmN1cnJlbnRUYXJnZXQsIHRhc2tGaWx0ZXJzKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZEhvbWVwYWdlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKTtcclxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuQWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bi1hbHQnKTtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xyXG5cclxuICAgICAgICBVSS4jdXBkYXRlVGFza0ZpbHRlcnNFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgVUkuc2hvd05ld1Byb2plY3RNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgVUkuc2hvd05ld1Rhc2tNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRUYXNrQnRuQWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgVUkuc2hvd05ld1Rhc2tNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBVSS4jYWN0aXZhdGVCdXJnZXJNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICN1cGRhdGVQcm9qZWN0TGlzdCgpIHtcclxuICAgICAgICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZXMgPSBUb0RvLmdldFByb2plY3ROYW1lcygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWVzW2ldICE9ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgdGFza1Byb2plY3RJbnB1dC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgICAgICAgICAgICAgIDxvcHRpb24+JHtwcm9qZWN0TmFtZXNbaV19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0SG9tZVBhZ2UoKSB7XHJcbiAgICAgICAgVUkuYWRkSG9tZXBhZ2VFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdHMgPSBUb0RvLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPSAnZGVmYXVsdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSwgcHJvamVjdC5nZXRJZCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93QWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJyk7XHJcblxyXG4gICAgICAgIHNob3dBbGxUYXNrcy5jbGljaygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==