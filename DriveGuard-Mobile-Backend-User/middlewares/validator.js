const { checkSchema, validationResult } = require('express-validator');

module.exports.checkUserBody = async(req, res, next) => {
    await checkSchema({
        name: {
            isEmpty: false,
            errorMessage: 'Name is required'
        },
        email: {
            isEmpty: false,
            isEmail: true,
            errorMessage: 'Email is invalid'
        },
        password: {
            isEmpty: false,
            isLength: {
                options: { min: 6 }
            },
            errorMessage: 'Password must be at least 6 characters'
        },
        role: {
            isIn: {
                options: [['user', 'admin', 'Doctor']]
            },
            optional: true,
            errorMessage: 'Role must be either user or admin'
        }
    }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const msgErrors = errors.array().map((error) => {
            return {
                msg: error.msg,
                field: error.path
            };
        });
        return res.status(400).json(msgErrors);
    }

    next();
};

module.exports.checkLoginBody = async(req, res, next) => {
    await checkSchema({
        email: {
            isEmpty: false,
            isEmail: true,
            errorMessage: 'Email is invalid'
        },
        password: {
            isEmpty: false,
            isLength: {
                options: { min: 6 }
            },
            errorMessage: 'Password must be at least 6 characters'
        }
    }).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const msgErrors = errors.array().map((error) => {
            return {
                msg: error.msg,
                field: error.path
            };
        });
        return res.status(400).json(msgErrors);
    }

    next();
};

