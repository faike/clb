var Heading = require('mongoose').model('Heading');

exports.create = function(req, res, next) {
    var heading = new Heading(req.body);
    heading.save(function(err) {
        if (err) {
            return res.status(500).json({
              err: 'Could Create Letter'
            });
          }

        res.status(200).json({
            status: 'Letter Creation successful!',
            id: heading._id
        });

    });


};

exports.list = function(req, res, next) {
    Heading.find({}, function(err, heading) {
        if (err) {
            return next(err);
        }
        else {
            res.status(200).json(heading);

        }
    });
};


exports.docByID = function(req, res, next, id) {
    Heading.findOne({
            _id: id
        },
        function(err, heading) {
            if (err) {
                return next(err);
            }
            else {
                req.heading = heading;
                next();
            }
        }
    );
};

exports.read = function(req, res) {
    res.json(req.heading);
};


exports.update = function(req, res, next) {
    Heading.findByIdAndUpdate(req.heading.id, req.body, function(err, heading) {
        if (err) {
            return next(err);
        }
        else {
            res.status(200).json({status: 'Letter Creation successful!'});

        }
    });
};

