const dns = require("dns");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,

    lookup: (hostname, options, callback) => {
        dns.lookup(hostname, {
            family: 4,
        }, callback);
    },

    connectionTimeoutMillis: 10000,
});

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");

        console.log("✅ Connected to Neon!");
        console.log(result.rows[0]);
    } catch (error) {
        console.error("❌ Database connection failed:");
        console.error(error);
    } finally {
        await pool.end();
    }
}

testConnection();