const isAdmin = (req, res, next) => {
    if (req.headers.role && req.headers.role === 'admin') {
        next();
    } else {
        res.status(403).json({error: "forbidden"});
    }
}

module.exports = {isAdmin}