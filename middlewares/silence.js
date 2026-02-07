const silentPaths = new Set([
  '/favicon.ico',
  '/.well-known/appspecific/com.chrome.devtools.json',
]);

const silence = (req, res, next) => {
  if (silentPaths.has(req.path)) {
    return res.sendStatus(204);
  }
  next();
};

module.exports = silence;
