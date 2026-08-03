const dns = require("dns");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,

    lookup: (hostname, options, callback) => {
        dns.lookup(
            hostname,
            {
                family: 4,
            },
            callback
        );
    },

    connectionTimeoutMillis: 10000,
});

module.exports = pool;