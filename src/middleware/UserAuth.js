const jwt = require('jsonwebtoken');

exports.VerifyToken = (req, res, next) => {
    try {
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).json({ status: 'error', response: 'Token not provided' });
        }

        jwt.verify(token, 'joy@bangla', (err, decoded) => {
            if (err) {
                return res.status(401).json({ status: 'error', response: 'Invalid token' });
            } else {

                const currentTimestamp = Math.floor(Date.now() / 1000);
                if (decoded.exp && decoded.exp < currentTimestamp) {
                    return res.status(401).json({ status: 'error', response: 'Token has expired. Login once for new token' });
                }

                req.headers = decoded;
                next();
            }
        });
    } catch (error) {
        res.status(500).json({ status: 'error', response: error.message });
    }
};
