const authenticateToken = (req, res, next) => {
    const token = req.query.token;

    if (!token || token !== 'xyz123') {
        return res.status(401).send({ message: 'Unauthorized: Invalid or missing token' });
    }

    next();
};

export default authenticateToken;
