const mongoose = require ('mongoose');
const aggreSchema = new mongoose.Schema(
    {
        aggregation : {
            type : String,
            required : [true, 'please provide aggregation'],
        },
        Hours : [],
    },
);

module.exports = mongoose.model('Aggregation',aggreSchema);