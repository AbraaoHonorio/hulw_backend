'use strict';

module.exports = function(message, status, next) {
    const err = new Error(message);
    err.status = status;
    next(err);
};