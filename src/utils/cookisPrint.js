const cookiePrint = (req, res, next) => {
  console.log('COOKIES:', JSON.stringify(req.cookies, null, 2));
  next();
};

export default cookiePrint;
