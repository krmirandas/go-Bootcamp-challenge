/**
 * 201 (Created) Response
 */
const log = sails.hooks.ohmylog.log('responses:created');

module.exports = function created(response)
{
  const res = this.res;
  const req = this.req;

  res.status(201);
  const fullResponse = response;

  log.info(req.method + ' ' + req.path + ' responded with', fullResponse);

  return res.json(fullResponse);
};
