export default function sendResponse(res, status, data, error, msg) {
  res.status(status).json({
    error,
    msg,
    data: data,
  });
}