/**
 * 404 (Not Found) Response
 */
module.exports = function notFound() {
  const res = this.res;
  const error = sails.hooks.errorhandler.create('notFound', 'routeNotFound');

  return res.negotiate(error);
};
