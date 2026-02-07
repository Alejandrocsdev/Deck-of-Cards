const asyncHandler = (fn) => {
  return (req, res, next) =>
    Promise.resolve()
      .then(() => fn(req, res, next))
      .catch(next);
};

module.exports = asyncHandler;


// (1) fn(req, res, next).catch(next);
// - .catch() only exists on Promises
// - If fn throws synchronously, .catch() cannot be called
// - Relies on Express to catch sync errors

// (2) Promise.resolve(fn(req, res, next)).catch(next);
// - fn executes IMMEDIATELY
// - If fn throws synchronously, it happens BEFORE Promise.resolve
// - Relies on Express to catch sync errors

// (3) Promise.resolve().then(() => fn(req, res, next)).catch(next);
// - Promise.resolve() creates an asynchronous boundary BEFORE fn executes
// - If fn throws synchronously, the throw becomes a rejected Promise
// - Does NOT rely on Express for error catching

// Note:
// - All 3 work for async / await or Promises

// Reference:
// https://expressjs.com/en/guide/error-handling.html