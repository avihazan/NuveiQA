const logger = require("../startup/logging");

function request(req, res, next) {
  const { params, query, body, method, originalUrl } = req;
  const log = {
    method: method.toUpperCase(),
    url: originalUrl,
    params: params,
    querystring: query,
    payload: body,
  };
  logger.debug(JSON.stringify(log));
  next();
}

module.exports = request;
