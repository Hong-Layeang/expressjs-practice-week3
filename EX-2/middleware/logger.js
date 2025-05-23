const logger = (req, res, next) => {
    const { method, path, query } = req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${path}`);
    console.log('Query Params:', JSON.stringify(query));

    next();
};

export default logger;