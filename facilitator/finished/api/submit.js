export default function handler(req, res) {
  const body = req.body;
  console.log('body: ', body);

  // Both of these are required.
  if (!body.first || !body.last) {
    return res.json({ data: 'First or last name not found' });
  }

  // Found the name, so return a HTTP response
  res.send(`Hey ${body.first} ${body.last}!`);

  // there are a few different options for here as well
  // we could return a JSON response:
  // res.json({ data: `${body.first} ${body.last}` });
  // or we could reirect the user to a thank you page
  // res.redirect(307, '/thank-you');
  // all options available here:
  // https://nextjs.org/docs/api-routes/response-helpers
}
