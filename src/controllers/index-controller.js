'use strict';

exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Node API",
        version: "0.0.1"
    });
};