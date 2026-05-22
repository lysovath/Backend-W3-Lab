

const log = (req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    console.log(req.query);
    console.log(new Date().toISOString());
    next();
}

export default log;