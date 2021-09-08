/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime() < Date.now();
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

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now(), options);
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
 * > ⚠️ Please note that this function is not present in the FP submodule as
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

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


const container = document.querySelector("#container");
function render(obj) {
  // Create the Div and its contents
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  switch (obj.priority) {
    case "low":
      newTask.classList.add("low-priority-task");
      break;
    case "medium":
      newTask.classList.add("medium-priority-task");
      break;
    case "high":
      newTask.classList.add("high-priority-task");
      break;
  }
  if (obj.checklist === "done") newTask.classList.add("done");
  let checkbox = document.createElement("input");
  if (obj.checklist === "done") checkbox.checked = true;
  checkbox.type = "checkbox";
  checkbox.name = "done";
  checkbox.id = "toggleDoneBox";
  let title;
  if (obj.checklist === "done") {
    title = document.createElement("del");
    title.textContent = obj.title;
  } else {
    title = document.createElement("p");
    title.textContent = obj.title;
  }
  let detailsBtn = document.createElement("button");
  detailsBtn.textContent = "DETAILS";
  detailsBtn.classList.add("task-btns");
  detailsBtn.id = "detailsBtn";
  let dueDate = document.createElement("p");
  dueDate.textContent = obj.dueDate;
  let editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.classList.add("task-btns");
  editBtn.id = "editBtn";
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("task-btns");
  delBtn.id = "deleteBtn";
  // Append all contents to the div and div to the container
  newTask.append(checkbox, title, detailsBtn, dueDate, editBtn, delBtn);
  container.append(newTask);
}

// Control Modal
document.getElementById("addNew").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
// Toggle between add task and add project forms
document
  .querySelector("#project-form-btn")
  .addEventListener("click", function () {
    document.querySelector("#new-task-form").style.display = "none";
    document.querySelector("#new-project-form").style.display = "block";
  });
document.querySelector("#task-form-btn").addEventListener("click", function () {
  document.querySelector("#new-project-form").style.display = "none";
  document.querySelector("#new-task-form").style.display = "block";
});
// Add the projects to nav
function renderProjects(obj) {
  const ul = document.querySelector("#project-list");
  let li = document.createElement("li");
  let span = document.createElement("span");
  if (obj.title === "Home") return;
  span.textContent = obj.title;
  li.append(span);
  ul.append(li);
}
// Event listener for home button
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  document.querySelector("#container").innerHTML = "";
  _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
});
// Event Listener to render the array in each project.
// Method of class Project was giving me problem so I moved it here.
const projectList = document.querySelector("#project-list");
projectList.addEventListener("click", addEventToProject);
function addEventToProject(e) {
  // Next line is to fix bug of empty spaces calling the function
  if (e.target.nodeName !== "SPAN") return;
  document.querySelector("#container").innerHTML = "";
  let theProject = e.target.outerText.toLowerCase();
  for (let project of _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects) {
    if (project.title.toLowerCase() === theProject) {
      project.myArray.map(render);
    }
  }
}
// Event Listener to delete a Task
container.addEventListener("click", deleteTask);
function deleteTask(e) {
  if (e.target.id !== "deleteBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Delete from the Home array and Project if task is also in a project
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
    for (let j = 0; j < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length; j++) {
      // Conditional statement to delete the target task
      if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].title) {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.splice(j, 1);
        (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
        container.innerHTML = "";
        if (_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length !== 0) {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.map(render);
        } else {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
        }
      }
      // Conditional statement to delete the project if it is not home
      // and that is the last task to be deleted
      if (
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].title !== "Home" &&
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length === 0
      ) {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(i, 1);
      }
      (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
      document.querySelector("#project-list").innerHTML = "";
      _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.map(renderProjects);
    }
  }
}
// Event Listener for the checkBox for marking done
container.addEventListener("click", toggleDone);
function toggleDone(e) {
  if (e.target.id !== "toggleDoneBox") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Loop through all Home array and Project if task is also in a project
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      if (_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist === "done") {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist = undefined;
      } else {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist = "done";
      }
      (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
      container.innerHTML = "";
      _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
    }
  }
}
// Event Listener for detailsBtn
container.addEventListener("click", getTaskDetails);
function getTaskDetails(e) {
  if (e.target.id !== "detailsBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      let targetTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i];
      let title = targetTask.title;
      let project = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].title;
      // Convoluted conditionals and loop to reset value of project if the task
      // belongs to another project apart from home
      for (let j = 0; j < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; j++) {
        for (let k = 0; k < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].myArray.length; k++) {
          if (
            _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].title !== "Home" &&
            _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].myArray[k].title === targetTitle
          ) {
            project = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].title;
          }
        }
      }
      let priority = targetTask.priority;
      let dueDate = targetTask.dueDate;
      let details = targetTask.description;
      renderDetailsPopUp(title, project, priority, dueDate, details);
    }
  }
}
function renderDetailsPopUp(title, project, priority, dueDate, details) {
  let body = document.querySelector("body");
  // Create div for modal bg and modal content
  let bgModal = document.createElement("div");
  bgModal.classList.add("bg-modal");
  bgModal.style.display = "flex";
  let modalContents = document.createElement("div");
  modalContents.classList.add("details-pop-up");
  // Start Creating the details within the task object
  // Close
  let close = document.createElement("div");
  close.textContent = "+";
  close.classList.add("close");
  close.addEventListener("click", function () {
    bgModal.style.display = "none";
  });
  // Title
  let titleDiv = document.createElement("div");
  let titleP = document.createElement("p");
  titleP.textContent = title;
  titleDiv.append(titleP);
  // Project
  let projectDiv = document.createElement("div");
  let projectT = document.createElement("span");
  projectT.textContent = "Project:";
  let projectC = document.createElement("span");
  projectC.textContent = project;
  projectDiv.append(projectT, projectC);
  // Priority
  let priorityDiv = document.createElement("div");
  let priorityT = document.createElement("span");
  priorityT.textContent = "Priority:";
  let priorityC = document.createElement("span");
  priorityC.textContent = priority;
  priorityDiv.append(priorityT, priorityC);
  // Due Date
  let dueDateDiv = document.createElement("div");
  let dueDateT = document.createElement("span");
  dueDateT.textContent = "Due Date:";
  let dueDateC = document.createElement("span");
  dueDateC.textContent = dueDate;
  dueDateDiv.append(dueDateT, dueDateC);
  // Details
  let detailsDiv = document.createElement("div");
  let detailsT = document.createElement("span");
  detailsT.textContent = "Details:";
  let detailsC = document.createElement("span");
  detailsC.textContent = details;
  detailsDiv.append(detailsT, detailsC);
  // Append all to modalContents
  modalContents.append(
    close,
    titleDiv,
    projectDiv,
    priorityDiv,
    dueDateDiv,
    detailsDiv
  );
  bgModal.append(modalContents);
  body.append(bgModal);
}
// Event Listener for editBtn
let edittedTaskIndex;
container.addEventListener("click", editTask);
function editTask(e) {
  if (e.target.id !== "editBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      edittedTaskIndex = i; // saved value of current iterated attribute for editing later
      let targetTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i];
      let title = targetTask.title;
      let priority = targetTask.priority;
      let dueDate = targetTask.dueDate;
      let details = targetTask.description;
      renderEditForm(title, priority, dueDate, details);
    }
  }
}
// Render Edit Form Function
function renderEditForm(title, priority, dueDate, details) {
  let body = document.querySelector("body");
  //Remove the DOM created edit form
  if (document.contains(document.querySelector(".edit-bg-modal"))) {
    document.querySelector(".edit-bg-modal").remove();
  }
  // Create div for modal bg and modal content
  let bgModal = document.createElement("div");
  bgModal.classList.add("bg-modal");
  bgModal.style.display = "flex";
  bgModal.classList.add("edit-bg-modal");
  let modalContents = document.createElement("div");
  modalContents.classList.add("modal-contents");
  modalContents.classList.add("edit-form-pop-up");
  // Start Creating the details within the Edit container
  // Close
  let close = document.createElement("div");
  close.textContent = "+";
  close.classList.add("close");
  close.addEventListener("click", function () {
    bgModal.style.display = "none";
  });
  // Form
  let form = document.createElement("form");
  form.action = "#";
  form.classList.add("edit-task-form");
  // Title
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.classList.add("edit-task-title");
  titleInput.value = title;
  titleInput.required = true;
  // Details
  let detailsInput = document.createElement("input");
  detailsInput.type = "text";
  detailsInput.name = "details";
  detailsInput.classList.add("edit-task-details");
  detailsInput.value = details;
  detailsInput.required = true;
  // Labels for Due Date
  let dueDateLabel = document.createElement("label");
  dueDateLabel.for = "due-date";
  // DueDate
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "due-date";
  dueDateInput.classList.add("edit-task-due-date");
  dueDateInput.value = dueDate;
  dueDateInput.required = true;
  // Labels for Priority
  let priorityLabel = document.createElement("label");
  priorityLabel.for = "priority";
  // Radio for Priority Low
  let lowPriorityRadio = document.createElement("input");
  lowPriorityRadio.type = "radio";
  lowPriorityRadio.name = "edit-priority";
  lowPriorityRadio.classList.add("edit-task-low");
  lowPriorityRadio.value = "low";
  // Radio for Priority Medium
  let mediumPriorityRadio = document.createElement("input");
  mediumPriorityRadio.type = "radio";
  mediumPriorityRadio.name = "edit-priority";
  mediumPriorityRadio.classList.add("edit-task-medium");
  mediumPriorityRadio.value = "medium";
  // Radio for Priority High
  let highPriorityRadio = document.createElement("input");
  highPriorityRadio.type = "radio";
  highPriorityRadio.name = "edit-priority";
  highPriorityRadio.classList.add("edit-task-high");
  highPriorityRadio.value = "high";
  // Logic to specify which radio is checked
  switch (priority) {
    case lowPriorityRadio.value:
      lowPriorityRadio.checked = true;
      break;
    case mediumPriorityRadio.value:
      mediumPriorityRadio.checked = true;
      break;
    case highPriorityRadio.value:
      highPriorityRadio.checked = true;
  }
  // Confirm Edit Button
  let confirmEditBtn = document.createElement("input");
  confirmEditBtn.type = "submit";
  confirmEditBtn.value = "CONFIRM EDIT";
  confirmEditBtn.classList.add("confirmEditBtn");
  // Append all to form
  form.append(
    titleInput,
    detailsInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    lowPriorityRadio,
    mediumPriorityRadio,
    highPriorityRadio,
    confirmEditBtn
  );
  // Append close and form to modal content
  modalContents.append(close, form);
  bgModal.append(modalContents);
  body.append(bgModal);
  // Add Event Listener to confirmEditBtn
  confirmEditBtn.addEventListener("click", confirmEdit);
}
// Event Listener for Confirm Edit Btn
function confirmEdit(e) {
  e.preventDefault();
  let newTitle = document.querySelector(".edit-task-title").value;
  let newDescription = document.querySelector(".edit-task-details").value;
  let newDueDate = document.querySelector(".edit-task-due-date").value;
  let newPriority = document.querySelector(
    'input[name="edit-priority"]:checked'
  ).value;
  let edittedTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[edittedTaskIndex];
  // Call a method that set the right details using the above as parameters/ argumets
  setEdittedTask(
    edittedTask,
    newTitle,
    newDescription,
    newDueDate,
    newPriority
  );
  (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
  // The next line of code was added because the contents of the homeArray kept duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector("#container").innerHTML = "";
  _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
  document.querySelector(".edit-bg-modal").style.display = "none";
  document.querySelector(".edit-task-form").reset();
}
// Function to set the new details into the target object
function setEdittedTask(
  edittedTask,
  newTitle,
  newDescription,
  newDueDate,
  newPriority
) {
  edittedTask.title = newTitle;
  edittedTask.description = newDescription;
  edittedTask.dueDate = newDueDate;
  edittedTask.priority = newPriority;
}

// Event Listener for Today's task
const todayTaskBtn = document.querySelector("#today");
todayTaskBtn.addEventListener("click", renderTodaysTasks);
function renderTodaysTasks() {
  let todaysTasks = [];
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    let parsedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].dueDate);
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(parsedDueDate) || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(parsedDueDate)) {
      todaysTasks.push(_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i]);
    }
  }
  document.querySelector("#container").innerHTML = "";
  todaysTasks.map(render);
}
// Event Listener for This Week's Tasks
const thisWeekTaskBtn = document.querySelector("#this-week");
thisWeekTaskBtn.addEventListener("click", renderThisWeeksTasks);
function renderThisWeeksTasks() {
  let thisWeekTasks = [];
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    let parsedDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].dueDate);
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(parsedDueDate)) {
      thisWeekTasks.push(_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i]);
    }
  }
  document.querySelector("#container").innerHTML = "";
  thisWeekTasks.map(render);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/project-class.js":
/*!******************************!*\
  !*** ./src/project-class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "saveLocalProjects": () => (/* binding */ saveLocalProjects),
/* harmony export */   "sortProject": () => (/* binding */ sortProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// eslint-disable-next-line import/no-cycle


class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  // Add logic to remove the projects once all the tasks added are deleted
}
const home = new Projects('Home');
const chores = new Projects('Chores');
// Had to do this because it will be mutated in save and load local function
// eslint-disable-next-line import/no-mutable-exports
let allProjects = [home, chores];

// Local Storage
function saveLocalProjects() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
}
function restoreLocalProjects() {
  allProjects = JSON.parse(localStorage.getItem('allProjects'));
  if (allProjects === null) allProjects = [home, chores];
  allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);
}
// Use event listener to call projects class to create new array
const addProjectBtn = document.querySelector('#addProject');
function createProject() {
  // Used this to get value of title either I am creating a new project from
  // project form or from task form.
  const title = document.querySelector('#new-project-title').value;
  const newProject = new Projects(title);
  allProjects.push(newProject);
}
function addNewProject() {
  createProject();
  // display projects and hide modals
  document.querySelector('#project-list').innerHTML = '';
  allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);
  document.querySelector('.bg-modal').style.display = 'none';
  document.querySelector('#new-project-form').reset();
  saveLocalProjects();
}
addProjectBtn.addEventListener('click', addNewProject);

function sortProject(newTask) {
  const projectName = document.querySelector('#project-name').value;
  if (projectName === '') return;
  for (let i = 0; i < allProjects.length; i += 1) {
    if (allProjects[i].title === projectName) {
      // Push the same object, so that by reference, any change to one is a change to all
      for (let j = 0; j < allProjects[0].myArray.length; j += 1) {
        if (newTask.title === allProjects[0].myArray[j].title) {
          allProjects[i].myArray.push(allProjects[0].myArray[j]);
        }
      }
    }
  }
}

// Call this function everytime my app is revisited or reloaded
restoreLocalProjects();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class */ "./src/project-class.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



class Task {
  constructor(title, description, dueDate, priority, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }

  // getDetails() {
  //   // Call the DOM Manipulation that will get details here
  // }
  // setDetails() {
  //   // Call the DOM Manipulation that will show form and allow entries to be entered
  // }
  // deleteTask() {
  //   // Remove the Object from the Arrays it is located
  // }
  addToHomeArray() {
    _project_class__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.push(this);
    // If belongs to a project, push to project array too
  }
  // toggleCheck() {
  //   // Check on or off to show completion of task
  // }
}

// TODO: Move this away from here once you find a solution to webpack messing with imported classes
// Form Submit Button
const addTaskBtn = document.querySelector('#addTodo');
function addNewTask(e) {
  e.preventDefault();
  const title = document.querySelector('#new-task-title').value;
  const description = document.querySelector('#new-task-details').value;
  const dueDate = document.querySelector('#new-task-due-date').value;
  const priority = document.querySelector(
    // eslint-disable-next-line comma-dangle
    'input[name="priority"]:checked'
  ).value;
  const checklist = undefined;
  const newTask = new Task(title, description, dueDate, priority, checklist);
  newTask.addToHomeArray();
  (0,_project_class__WEBPACK_IMPORTED_MODULE_0__.sortProject)(newTask);
  (0,_project_class__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
  // The next line of code was added because the contents of the homeArray kept
  // duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector('#container').innerHTML = '';
  _project_class__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(_dom__WEBPACK_IMPORTED_MODULE_1__.default);
  document.querySelector('.bg-modal').style.display = 'none';
  document.querySelector('#new-task-form').reset();
}
addTaskBtn.addEventListener('click', addNewTask);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-class */ "./src/project-class.js");
// eslint-disable-next-line no-unused-vars




let userName = localStorage.getItem('userName');
if (!userName && userName === null) {
  // eslint-disable-next-line no-alert
  userName = prompt('Welcome, please enter your name...');
  localStorage.setItem('userName', userName);
}
const welcomeMessage = document.querySelector('#welcome-msg');
welcomeMessage.textContent = `Welcome back, ${userName}`;
// Call this function everytime my app is revisited or reloaded
_project_class__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].myArray.map(_dom__WEBPACK_IMPORTED_MODULE_1__.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQjtBQUNDO0FBQ21COztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0Esc0VBQTBCLENBQUMseUNBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIHZhciByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMDtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG52YXIgREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA9IDI7XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gREVGQVVMVF9BRERJVElPTkFMX0RJR0lUUyA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoaXNOYU4oZGF0ZSkgfHwgIWRhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSB8fCB0aW1lID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gbnVsbDtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdICYmIHBhcnNlSW50KGNhcHR1cmVzWzFdKTtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSAmJiBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG51bGw7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUiArIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGFsbFByb2plY3RzLCBzYXZlTG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmltcG9ydCB7IHBhcnNlSVNPLCBpc1Bhc3QsIGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuZnVuY3Rpb24gcmVuZGVyKG9iaikge1xuICAvLyBDcmVhdGUgdGhlIERpdiBhbmQgaXRzIGNvbnRlbnRzXG4gIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgc3dpdGNoIChvYmoucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHktdGFza1wiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eS10YXNrXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHktdGFza1wiKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChvYmouY2hlY2tsaXN0ID09PSBcImRvbmVcIikgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpZiAob2JqLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5uYW1lID0gXCJkb25lXCI7XG4gIGNoZWNrYm94LmlkID0gXCJ0b2dnbGVEb25lQm94XCI7XG4gIGxldCB0aXRsZTtcbiAgaWYgKG9iai5jaGVja2xpc3QgPT09IFwiZG9uZVwiKSB7XG4gICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGVsXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIH1cbiAgbGV0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXRhaWxzQnRuLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XG4gIGRldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgZGV0YWlsc0J0bi5pZCA9IFwiZGV0YWlsc0J0blwiO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIGVkaXRCdG4uaWQgPSBcImVkaXRCdG5cIjtcbiAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgZGVsQnRuLmlkID0gXCJkZWxldGVCdG5cIjtcbiAgLy8gQXBwZW5kIGFsbCBjb250ZW50cyB0byB0aGUgZGl2IGFuZCBkaXYgdG8gdGhlIGNvbnRhaW5lclxuICBuZXdUYXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRldGFpbHNCdG4sIGR1ZURhdGUsIGVkaXRCdG4sIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQobmV3VGFzayk7XG59XG5cbi8vIENvbnRyb2wgTW9kYWxcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcbi8vIFRvZ2dsZSBiZXR3ZWVuIGFkZCB0YXNrIGFuZCBhZGQgcHJvamVjdCBmb3Jtc1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWJ0blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuLy8gQWRkIHRoZSBwcm9qZWN0cyB0byBuYXZcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhvYmopIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAob2JqLnRpdGxlID09PSBcIkhvbWVcIikgcmV0dXJuO1xuICBzcGFuLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsaS5hcHBlbmQoc3Bhbik7XG4gIHVsLmFwcGVuZChsaSk7XG59XG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgaG9tZSBidXR0b25cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG59KTtcbi8vIEV2ZW50IExpc3RlbmVyIHRvIHJlbmRlciB0aGUgYXJyYXkgaW4gZWFjaCBwcm9qZWN0LlxuLy8gTWV0aG9kIG9mIGNsYXNzIFByb2plY3Qgd2FzIGdpdmluZyBtZSBwcm9ibGVtIHNvIEkgbW92ZWQgaXQgaGVyZS5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRUb1Byb2plY3QpO1xuZnVuY3Rpb24gYWRkRXZlbnRUb1Byb2plY3QoZSkge1xuICAvLyBOZXh0IGxpbmUgaXMgdG8gZml4IGJ1ZyBvZiBlbXB0eSBzcGFjZXMgY2FsbGluZyB0aGUgZnVuY3Rpb25cbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIlNQQU5cIikgcmV0dXJuO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgdGhlUHJvamVjdCA9IGUudGFyZ2V0Lm91dGVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGhlUHJvamVjdCkge1xuICAgICAgcHJvamVjdC5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgIH1cbiAgfVxufVxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gZGVsZXRlIGEgVGFza1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwiZGVsZXRlQnRuXCIpIHJldHVybjtcbiAgbGV0IHRhcmdldFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5vdXRlclRleHQ7XG4gIC8vIERlbGV0ZSBmcm9tIHRoZSBIb21lIGFycmF5IGFuZCBQcm9qZWN0IGlmIHRhc2sgaXMgYWxzbyBpbiBhIHByb2plY3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgLy8gQ29uZGl0aW9uYWwgc3RhdGVtZW50IHRvIGRlbGV0ZSB0aGUgdGFyZ2V0IHRhc2tcbiAgICAgIGlmICh0YXJnZXRUaXRsZSA9PT0gYWxsUHJvamVjdHNbaV0ubXlBcnJheVtqXS50aXRsZSkge1xuICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5LnNwbGljZShqLCAxKTtcbiAgICAgICAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmIChhbGxQcm9qZWN0c1tpXS5teUFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkubWFwKHJlbmRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQ29uZGl0aW9uYWwgc3RhdGVtZW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCBpZiBpdCBpcyBub3QgaG9tZVxuICAgICAgLy8gYW5kIHRoYXQgaXMgdGhlIGxhc3QgdGFzayB0byBiZSBkZWxldGVkXG4gICAgICBpZiAoXG4gICAgICAgIGFsbFByb2plY3RzW2ldLnRpdGxlICE9PSBcIkhvbWVcIiAmJlxuICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5Lmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIGFsbFByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICAgIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgYWxsUHJvamVjdHMubWFwKHJlbmRlclByb2plY3RzKTtcbiAgICB9XG4gIH1cbn1cbi8vIEV2ZW50IExpc3RlbmVyIGZvciB0aGUgY2hlY2tCb3ggZm9yIG1hcmtpbmcgZG9uZVxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEb25lKTtcbmZ1bmN0aW9uIHRvZ2dsZURvbmUoZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwidG9nZ2xlRG9uZUJveFwiKSByZXR1cm47XG4gIGxldCB0YXJnZXRUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0ub3V0ZXJUZXh0O1xuICAvLyBMb29wIHRocm91Z2ggYWxsIEhvbWUgYXJyYXkgYW5kIFByb2plY3QgaWYgdGFzayBpcyBhbHNvIGluIGEgcHJvamVjdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzWzBdLm15QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFyZ2V0VGl0bGUgPT09IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV0udGl0bGUpIHtcbiAgICAgIGlmIChhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS5jaGVja2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmNoZWNrbGlzdCA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgICAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICB9XG4gIH1cbn1cbi8vIEV2ZW50IExpc3RlbmVyIGZvciBkZXRhaWxzQnRuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFRhc2tEZXRhaWxzKTtcbmZ1bmN0aW9uIGdldFRhc2tEZXRhaWxzKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkICE9PSBcImRldGFpbHNCdG5cIikgcmV0dXJuO1xuICBsZXQgdGFyZ2V0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLm91dGVyVGV4dDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLnRpdGxlKSB7XG4gICAgICBsZXQgdGFyZ2V0VGFzayA9IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV07XG4gICAgICBsZXQgdGl0bGUgPSB0YXJnZXRUYXNrLnRpdGxlO1xuICAgICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1swXS50aXRsZTtcbiAgICAgIC8vIENvbnZvbHV0ZWQgY29uZGl0aW9uYWxzIGFuZCBsb29wIHRvIHJlc2V0IHZhbHVlIG9mIHByb2plY3QgaWYgdGhlIHRhc2tcbiAgICAgIC8vIGJlbG9uZ3MgdG8gYW5vdGhlciBwcm9qZWN0IGFwYXJ0IGZyb20gaG9tZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFByb2plY3RzW2pdLm15QXJyYXkubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tqXS50aXRsZSAhPT0gXCJIb21lXCIgJiZcbiAgICAgICAgICAgIGFsbFByb2plY3RzW2pdLm15QXJyYXlba10udGl0bGUgPT09IHRhcmdldFRpdGxlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gYWxsUHJvamVjdHNbal0udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgcHJpb3JpdHkgPSB0YXJnZXRUYXNrLnByaW9yaXR5O1xuICAgICAgbGV0IGR1ZURhdGUgPSB0YXJnZXRUYXNrLmR1ZURhdGU7XG4gICAgICBsZXQgZGV0YWlscyA9IHRhcmdldFRhc2suZGVzY3JpcHRpb247XG4gICAgICByZW5kZXJEZXRhaWxzUG9wVXAodGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXRhaWxzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbmRlckRldGFpbHNQb3BVcCh0aXRsZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUsIGRldGFpbHMpIHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgLy8gQ3JlYXRlIGRpdiBmb3IgbW9kYWwgYmcgYW5kIG1vZGFsIGNvbnRlbnRcbiAgbGV0IGJnTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZ01vZGFsLmNsYXNzTGlzdC5hZGQoXCJiZy1tb2RhbFwiKTtcbiAgYmdNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGxldCBtb2RhbENvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1wb3AtdXBcIik7XG4gIC8vIFN0YXJ0IENyZWF0aW5nIHRoZSBkZXRhaWxzIHdpdGhpbiB0aGUgdGFzayBvYmplY3RcbiAgLy8gQ2xvc2VcbiAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGJnTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgLy8gVGl0bGVcbiAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZVAudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlUCk7XG4gIC8vIFByb2plY3RcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcHJvamVjdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJvamVjdFQudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gIGxldCBwcm9qZWN0QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcm9qZWN0Qy50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RULCBwcm9qZWN0Qyk7XG4gIC8vIFByaW9yaXR5XG4gIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcmlvcml0eVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHlULnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgbGV0IHByaW9yaXR5QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eUMudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5VCwgcHJpb3JpdHlDKTtcbiAgLy8gRHVlIERhdGVcbiAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZHVlRGF0ZVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZVQudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICBsZXQgZHVlRGF0ZUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZUMudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlVCwgZHVlRGF0ZUMpO1xuICAvLyBEZXRhaWxzXG4gIGxldCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRldGFpbHNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRldGFpbHNULnRleHRDb250ZW50ID0gXCJEZXRhaWxzOlwiO1xuICBsZXQgZGV0YWlsc0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGV0YWlsc0MudGV4dENvbnRlbnQgPSBkZXRhaWxzO1xuICBkZXRhaWxzRGl2LmFwcGVuZChkZXRhaWxzVCwgZGV0YWlsc0MpO1xuICAvLyBBcHBlbmQgYWxsIHRvIG1vZGFsQ29udGVudHNcbiAgbW9kYWxDb250ZW50cy5hcHBlbmQoXG4gICAgY2xvc2UsXG4gICAgdGl0bGVEaXYsXG4gICAgcHJvamVjdERpdixcbiAgICBwcmlvcml0eURpdixcbiAgICBkdWVEYXRlRGl2LFxuICAgIGRldGFpbHNEaXZcbiAgKTtcbiAgYmdNb2RhbC5hcHBlbmQobW9kYWxDb250ZW50cyk7XG4gIGJvZHkuYXBwZW5kKGJnTW9kYWwpO1xufVxuLy8gRXZlbnQgTGlzdGVuZXIgZm9yIGVkaXRCdG5cbmxldCBlZGl0dGVkVGFza0luZGV4O1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG5mdW5jdGlvbiBlZGl0VGFzayhlKSB7XG4gIGlmIChlLnRhcmdldC5pZCAhPT0gXCJlZGl0QnRuXCIpIHJldHVybjtcbiAgbGV0IHRhcmdldFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5vdXRlclRleHQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXJnZXRUaXRsZSA9PT0gYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS50aXRsZSkge1xuICAgICAgZWRpdHRlZFRhc2tJbmRleCA9IGk7IC8vIHNhdmVkIHZhbHVlIG9mIGN1cnJlbnQgaXRlcmF0ZWQgYXR0cmlidXRlIGZvciBlZGl0aW5nIGxhdGVyXG4gICAgICBsZXQgdGFyZ2V0VGFzayA9IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV07XG4gICAgICBsZXQgdGl0bGUgPSB0YXJnZXRUYXNrLnRpdGxlO1xuICAgICAgbGV0IHByaW9yaXR5ID0gdGFyZ2V0VGFzay5wcmlvcml0eTtcbiAgICAgIGxldCBkdWVEYXRlID0gdGFyZ2V0VGFzay5kdWVEYXRlO1xuICAgICAgbGV0IGRldGFpbHMgPSB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uO1xuICAgICAgcmVuZGVyRWRpdEZvcm0odGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXRhaWxzKTtcbiAgICB9XG4gIH1cbn1cbi8vIFJlbmRlciBFZGl0IEZvcm0gRnVuY3Rpb25cbmZ1bmN0aW9uIHJlbmRlckVkaXRGb3JtKHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGV0YWlscykge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAvL1JlbW92ZSB0aGUgRE9NIGNyZWF0ZWQgZWRpdCBmb3JtXG4gIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYmctbW9kYWxcIikpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJnLW1vZGFsXCIpLnJlbW92ZSgpO1xuICB9XG4gIC8vIENyZWF0ZSBkaXYgZm9yIG1vZGFsIGJnIGFuZCBtb2RhbCBjb250ZW50XG4gIGxldCBiZ01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYmctbW9kYWxcIik7XG4gIGJnTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBiZ01vZGFsLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJnLW1vZGFsXCIpO1xuICBsZXQgbW9kYWxDb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudHMuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRzXCIpO1xuICBtb2RhbENvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvcm0tcG9wLXVwXCIpO1xuICAvLyBTdGFydCBDcmVhdGluZyB0aGUgZGV0YWlscyB3aXRoaW4gdGhlIEVkaXQgY29udGFpbmVyXG4gIC8vIENsb3NlXG4gIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBiZ01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIC8vIEZvcm1cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWZvcm1cIik7XG4gIC8vIFRpdGxlXG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stdGl0bGVcIik7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIERldGFpbHNcbiAgbGV0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGV0YWlsc0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgZGV0YWlsc0lucHV0Lm5hbWUgPSBcImRldGFpbHNcIjtcbiAgZGV0YWlsc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZGV0YWlsc1wiKTtcbiAgZGV0YWlsc0lucHV0LnZhbHVlID0gZGV0YWlscztcbiAgZGV0YWlsc0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgLy8gTGFiZWxzIGZvciBEdWUgRGF0ZVxuICBsZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkdWVEYXRlTGFiZWwuZm9yID0gXCJkdWUtZGF0ZVwiO1xuICAvLyBEdWVEYXRlXG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWUtZGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1kdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZTtcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgLy8gTGFiZWxzIGZvciBQcmlvcml0eVxuICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5mb3IgPSBcInByaW9yaXR5XCI7XG4gIC8vIFJhZGlvIGZvciBQcmlvcml0eSBMb3dcbiAgbGV0IGxvd1ByaW9yaXR5UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxvd1ByaW9yaXR5UmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgbG93UHJpb3JpdHlSYWRpby5uYW1lID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gIGxvd1ByaW9yaXR5UmFkaW8uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1sb3dcIik7XG4gIGxvd1ByaW9yaXR5UmFkaW8udmFsdWUgPSBcImxvd1wiO1xuICAvLyBSYWRpbyBmb3IgUHJpb3JpdHkgTWVkaXVtXG4gIGxldCBtZWRpdW1Qcmlvcml0eVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBtZWRpdW1Qcmlvcml0eVJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIG1lZGl1bVByaW9yaXR5UmFkaW8ubmFtZSA9IFwiZWRpdC1wcmlvcml0eVwiO1xuICBtZWRpdW1Qcmlvcml0eVJhZGlvLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stbWVkaXVtXCIpO1xuICBtZWRpdW1Qcmlvcml0eVJhZGlvLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgLy8gUmFkaW8gZm9yIFByaW9yaXR5IEhpZ2hcbiAgbGV0IGhpZ2hQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBoaWdoUHJpb3JpdHlSYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBoaWdoUHJpb3JpdHlSYWRpby5uYW1lID0gXCJlZGl0LXByaW9yaXR5XCI7XG4gIGhpZ2hQcmlvcml0eVJhZGlvLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2staGlnaFwiKTtcbiAgaGlnaFByaW9yaXR5UmFkaW8udmFsdWUgPSBcImhpZ2hcIjtcbiAgLy8gTG9naWMgdG8gc3BlY2lmeSB3aGljaCByYWRpbyBpcyBjaGVja2VkXG4gIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICBjYXNlIGxvd1ByaW9yaXR5UmFkaW8udmFsdWU6XG4gICAgICBsb3dQcmlvcml0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBtZWRpdW1Qcmlvcml0eVJhZGlvLnZhbHVlOlxuICAgICAgbWVkaXVtUHJpb3JpdHlSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaGlnaFByaW9yaXR5UmFkaW8udmFsdWU6XG4gICAgICBoaWdoUHJpb3JpdHlSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICAvLyBDb25maXJtIEVkaXQgQnV0dG9uXG4gIGxldCBjb25maXJtRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uZmlybUVkaXRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1FZGl0QnRuLnZhbHVlID0gXCJDT05GSVJNIEVESVRcIjtcbiAgY29uZmlybUVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImNvbmZpcm1FZGl0QnRuXCIpO1xuICAvLyBBcHBlbmQgYWxsIHRvIGZvcm1cbiAgZm9ybS5hcHBlbmQoXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXRhaWxzSW5wdXQsXG4gICAgZHVlRGF0ZUxhYmVsLFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUxhYmVsLFxuICAgIGxvd1ByaW9yaXR5UmFkaW8sXG4gICAgbWVkaXVtUHJpb3JpdHlSYWRpbyxcbiAgICBoaWdoUHJpb3JpdHlSYWRpbyxcbiAgICBjb25maXJtRWRpdEJ0blxuICApO1xuICAvLyBBcHBlbmQgY2xvc2UgYW5kIGZvcm0gdG8gbW9kYWwgY29udGVudFxuICBtb2RhbENvbnRlbnRzLmFwcGVuZChjbG9zZSwgZm9ybSk7XG4gIGJnTW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudHMpO1xuICBib2R5LmFwcGVuZChiZ01vZGFsKTtcbiAgLy8gQWRkIEV2ZW50IExpc3RlbmVyIHRvIGNvbmZpcm1FZGl0QnRuXG4gIGNvbmZpcm1FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtRWRpdCk7XG59XG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgQ29uZmlybSBFZGl0IEJ0blxuZnVuY3Rpb24gY29uZmlybUVkaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLXRpdGxlXCIpLnZhbHVlO1xuICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1kZXRhaWxzXCIpLnZhbHVlO1xuICBsZXQgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICBsZXQgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICdpbnB1dFtuYW1lPVwiZWRpdC1wcmlvcml0eVwiXTpjaGVja2VkJ1xuICApLnZhbHVlO1xuICBsZXQgZWRpdHRlZFRhc2sgPSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2VkaXR0ZWRUYXNrSW5kZXhdO1xuICAvLyBDYWxsIGEgbWV0aG9kIHRoYXQgc2V0IHRoZSByaWdodCBkZXRhaWxzIHVzaW5nIHRoZSBhYm92ZSBhcyBwYXJhbWV0ZXJzLyBhcmd1bWV0c1xuICBzZXRFZGl0dGVkVGFzayhcbiAgICBlZGl0dGVkVGFzayxcbiAgICBuZXdUaXRsZSxcbiAgICBuZXdEZXNjcmlwdGlvbixcbiAgICBuZXdEdWVEYXRlLFxuICAgIG5ld1ByaW9yaXR5XG4gICk7XG4gIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gIC8vIFRoZSBuZXh0IGxpbmUgb2YgY29kZSB3YXMgYWRkZWQgYmVjYXVzZSB0aGUgY29udGVudHMgb2YgdGhlIGhvbWVBcnJheSBrZXB0IGR1cGxpY2F0aW5nIGR1cmluZyByZW5kZXJpbmcuIEEgdGVtcG9yYXJ5IGZpeCwgZmluZCBwZXJtYW5lbnQgZml4IGxhdGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm1cIikucmVzZXQoKTtcbn1cbi8vIEZ1bmN0aW9uIHRvIHNldCB0aGUgbmV3IGRldGFpbHMgaW50byB0aGUgdGFyZ2V0IG9iamVjdFxuZnVuY3Rpb24gc2V0RWRpdHRlZFRhc2soXG4gIGVkaXR0ZWRUYXNrLFxuICBuZXdUaXRsZSxcbiAgbmV3RGVzY3JpcHRpb24sXG4gIG5ld0R1ZURhdGUsXG4gIG5ld1ByaW9yaXR5XG4pIHtcbiAgZWRpdHRlZFRhc2sudGl0bGUgPSBuZXdUaXRsZTtcbiAgZWRpdHRlZFRhc2suZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgZWRpdHRlZFRhc2suZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIGVkaXR0ZWRUYXNrLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG59XG5cbi8vIEV2ZW50IExpc3RlbmVyIGZvciBUb2RheSdzIHRhc2tcbmNvbnN0IHRvZGF5VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG50b2RheVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRvZGF5c1Rhc2tzKTtcbmZ1bmN0aW9uIHJlbmRlclRvZGF5c1Rhc2tzKCkge1xuICBsZXQgdG9kYXlzVGFza3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBhcnNlZER1ZURhdGUgPSBwYXJzZUlTTyhhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmR1ZURhdGUpO1xuICAgIGlmIChpc1Bhc3QocGFyc2VkRHVlRGF0ZSkgfHwgaXNUb2RheShwYXJzZWREdWVEYXRlKSkge1xuICAgICAgdG9kYXlzVGFza3MucHVzaChhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldKTtcbiAgICB9XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kYXlzVGFza3MubWFwKHJlbmRlcik7XG59XG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgVGhpcyBXZWVrJ3MgVGFza3NcbmNvbnN0IHRoaXNXZWVrVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhpcy13ZWVrXCIpO1xudGhpc1dlZWtUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUaGlzV2Vla3NUYXNrcyk7XG5mdW5jdGlvbiByZW5kZXJUaGlzV2Vla3NUYXNrcygpIHtcbiAgbGV0IHRoaXNXZWVrVGFza3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBhcnNlZER1ZURhdGUgPSBwYXJzZUlTTyhhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmR1ZURhdGUpO1xuICAgIGlmIChpc1RoaXNXZWVrKHBhcnNlZER1ZURhdGUpKSB7XG4gICAgICB0aGlzV2Vla1Rhc2tzLnB1c2goYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXSk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIHRoaXNXZWVrVGFza3MubWFwKHJlbmRlcik7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4vZG9tJztcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm15QXJyYXkgPSBbXTtcbiAgfVxuICAvLyBBZGQgbG9naWMgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0cyBvbmNlIGFsbCB0aGUgdGFza3MgYWRkZWQgYXJlIGRlbGV0ZWRcbn1cbmNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdHMoJ0hvbWUnKTtcbmNvbnN0IGNob3JlcyA9IG5ldyBQcm9qZWN0cygnQ2hvcmVzJyk7XG4vLyBIYWQgdG8gZG8gdGhpcyBiZWNhdXNlIGl0IHdpbGwgYmUgbXV0YXRlZCBpbiBzYXZlIGFuZCBsb2FkIGxvY2FsIGZ1bmN0aW9uXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuXG4vLyBMb2NhbCBTdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsUHJvamVjdHMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5mdW5jdGlvbiByZXN0b3JlTG9jYWxQcm9qZWN0cygpIHtcbiAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcbiAgaWYgKGFsbFByb2plY3RzID09PSBudWxsKSBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuICBhbGxQcm9qZWN0cy5tYXAocmVuZGVyUHJvamVjdHMpO1xufVxuLy8gVXNlIGV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgcHJvamVjdHMgY2xhc3MgdG8gY3JlYXRlIG5ldyBhcnJheVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAvLyBVc2VkIHRoaXMgdG8gZ2V0IHZhbHVlIG9mIHRpdGxlIGVpdGhlciBJIGFtIGNyZWF0aW5nIGEgbmV3IHByb2plY3QgZnJvbVxuICAvLyBwcm9qZWN0IGZvcm0gb3IgZnJvbSB0YXNrIGZvcm0uXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LXRpdGxlJykudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufVxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICAvLyBkaXNwbGF5IHByb2plY3RzIGFuZCBoaWRlIG1vZGFsc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0JykuaW5uZXJIVE1MID0gJyc7XG4gIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1mb3JtJykucmVzZXQoKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbn1cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9qZWN0KG5ld1Rhc2spIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhbGxQcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIC8vIFB1c2ggdGhlIHNhbWUgb2JqZWN0LCBzbyB0aGF0IGJ5IHJlZmVyZW5jZSwgYW55IGNoYW5nZSB0byBvbmUgaXMgYSBjaGFuZ2UgdG8gYWxsXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFByb2plY3RzWzBdLm15QXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKG5ld1Rhc2sudGl0bGUgPT09IGFsbFByb2plY3RzWzBdLm15QXJyYXlbal0udGl0bGUpIHtcbiAgICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5LnB1c2goYWxsUHJvamVjdHNbMF0ubXlBcnJheVtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSBteSBhcHAgaXMgcmV2aXNpdGVkIG9yIHJlbG9hZGVkXG5yZXN0b3JlTG9jYWxQcm9qZWN0cygpO1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgc2F2ZUxvY2FsUHJvamVjdHMsIHNvcnRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LWNsYXNzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9kb20nO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgfVxuXG4gIC8vIGdldERldGFpbHMoKSB7XG4gIC8vICAgLy8gQ2FsbCB0aGUgRE9NIE1hbmlwdWxhdGlvbiB0aGF0IHdpbGwgZ2V0IGRldGFpbHMgaGVyZVxuICAvLyB9XG4gIC8vIHNldERldGFpbHMoKSB7XG4gIC8vICAgLy8gQ2FsbCB0aGUgRE9NIE1hbmlwdWxhdGlvbiB0aGF0IHdpbGwgc2hvdyBmb3JtIGFuZCBhbGxvdyBlbnRyaWVzIHRvIGJlIGVudGVyZWRcbiAgLy8gfVxuICAvLyBkZWxldGVUYXNrKCkge1xuICAvLyAgIC8vIFJlbW92ZSB0aGUgT2JqZWN0IGZyb20gdGhlIEFycmF5cyBpdCBpcyBsb2NhdGVkXG4gIC8vIH1cbiAgYWRkVG9Ib21lQXJyYXkoKSB7XG4gICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5wdXNoKHRoaXMpO1xuICAgIC8vIElmIGJlbG9uZ3MgdG8gYSBwcm9qZWN0LCBwdXNoIHRvIHByb2plY3QgYXJyYXkgdG9vXG4gIH1cbiAgLy8gdG9nZ2xlQ2hlY2soKSB7XG4gIC8vICAgLy8gQ2hlY2sgb24gb3Igb2ZmIHRvIHNob3cgY29tcGxldGlvbiBvZiB0YXNrXG4gIC8vIH1cbn1cblxuLy8gVE9ETzogTW92ZSB0aGlzIGF3YXkgZnJvbSBoZXJlIG9uY2UgeW91IGZpbmQgYSBzb2x1dGlvbiB0byB3ZWJwYWNrIG1lc3Npbmcgd2l0aCBpbXBvcnRlZCBjbGFzc2VzXG4vLyBGb3JtIFN1Ym1pdCBCdXR0b25cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9kbycpO1xuZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stdGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stZGV0YWlscycpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWR1ZS1kYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tbWEtZGFuZ2xlXG4gICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICApLnZhbHVlO1xuICBjb25zdCBjaGVja2xpc3QgPSB1bmRlZmluZWQ7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuICBuZXdUYXNrLmFkZFRvSG9tZUFycmF5KCk7XG4gIHNvcnRQcm9qZWN0KG5ld1Rhc2spO1xuICBzYXZlTG9jYWxQcm9qZWN0cygpO1xuICAvLyBUaGUgbmV4dCBsaW5lIG9mIGNvZGUgd2FzIGFkZGVkIGJlY2F1c2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBob21lQXJyYXkga2VwdFxuICAvLyBkdXBsaWNhdGluZyBkdXJpbmcgcmVuZGVyaW5nLiBBIHRlbXBvcmFyeSBmaXgsIGZpbmQgcGVybWFuZW50IGZpeCBsYXRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1mb3JtJykucmVzZXQoKTtcbn1cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdUYXNrKTtcbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QtY2xhc3MnO1xuXG5sZXQgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKTtcbmlmICghdXNlck5hbWUgJiYgdXNlck5hbWUgPT09IG51bGwpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gIHVzZXJOYW1lID0gcHJvbXB0KCdXZWxjb21lLCBwbGVhc2UgZW50ZXIgeW91ciBuYW1lLi4uJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIHVzZXJOYW1lKTtcbn1cbmNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWUtbXNnJyk7XG53ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9IGBXZWxjb21lIGJhY2ssICR7dXNlck5hbWV9YDtcbi8vIENhbGwgdGhpcyBmdW5jdGlvbiBldmVyeXRpbWUgbXkgYXBwIGlzIHJldmlzaXRlZCBvciByZWxvYWRlZFxuYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==