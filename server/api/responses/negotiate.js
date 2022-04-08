/**
 * Response Handler
 */
const log = sails.hooks.ohmylog.log('responses:negotiate');

module.exports = function negotiate(error)
{
  const req = this.req;
  const res = this.res;
  const resp = {};

  res.status(400);
  log.info(` ${req.method}  ${req.path}  responded with: \n `);
  const stringifiedResponse = JSON.stringify(resp, null, 4);

  log.info(JSON.parse(stringifiedResponse));
  return res.json(error);
};
