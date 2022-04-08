/**
 * 200 (OK) Response
 */
const log = sails.hooks.ohmylog.log('responses:ok');

module.exports = function ok(response)
{
  const req = this.req;
  const res = this.res;
  const resp = {};

  res.status(200);
  log.info(` ${req.method}  ${req.path}  responded with: \n `);
  const stringifiedResponse = JSON.stringify(resp, null, 4);

  log.info(JSON.parse(stringifiedResponse));
  return res.json(response);
};
