const validateCredits = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    const min = parseInt(minCredits);
    const max = parseInt(maxCredits);

    if (minCredits && isNaN(min)) {
        return res.status(400).send({ message: 'minCredits must be an integer' });
    }

    if (maxCredits && isNaN(max)) {
        return res.status(400).send({ message: 'maxCredits must be an integer' });
    }

    if (!isNaN(min) && !isNaN(max) && min > max) {
        return res.status(400).send({ message: 'Invalid credit range: minCredits cannot be greater than maxCredits' });
    }

    next();
};

export default validateCredits;
