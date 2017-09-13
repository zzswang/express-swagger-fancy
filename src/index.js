import serveStatic from 'serve-static';
import path from 'path';


/**
 * create a middleware to display swagger-ui with fancy look.
 *
 * @param {string} swaggerFile - filepath to swagger file
 */
export default function createMiddleware(swaggerFile) {
  const serve = serveStatic(path.join(__dirname, '../public'));
  return (req, res, next) => {
    if (req.path == '/swagger.json') {
      return res.sendFile(swaggerFile);
    }

    return serve(req, res, next);
  };
}