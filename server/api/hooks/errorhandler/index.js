class ErrorHandler
{
  /**
   * @param code_string -  Name of HTTP status code
   * @param message     -  Message to send in response
   * @param errors      -  Desglosed errors
   */
  constructor(code_string, message, errors = [])
  {
    this.name = 'ErrorHandler';
    this.code_string = code_string;
    this.message = message || 'unexpected_error';
    this.errors = errors;
    this.details = [];
  }

  status()
  {
    const status =
      typeof this.code_string == 'number'
        ? this.code_string
        : sails.config.errorhandler[this.code_string];

    if (!status)
    {
      sails.hooks.ohmylog
        .log('errorhandler:idex')
        .error('Missing code for ' + this.code_string + ' sending 500');
      return 500;
    }

    return status;
  }
}

module.exports = function ()
{
  return {
    defaults: {
      errorhandler: {
        invalid: 422,
        conflict: 409,
        badRequest: 400,
        forbidden: 403,
        unauthorized: 401,
        notImplemented: 501,
        gone: 410,
        tooManyRequests: 429,
        notFound: 404,
        serverError: 500,
        redirect: 307,
        notAcceptable: 406,
        badGateway: 502
      }
    },

    initialize: function (cb)
    {
      global.ErrorHandler = ErrorHandler;
      cb();
    },

    create: function (status, message, err, customerResponse)
    {
      return new ErrorHandler(status, message, err, customerResponse);
    }
  };
};
