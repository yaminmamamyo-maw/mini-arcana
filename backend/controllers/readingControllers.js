const pool = require('../database/db/db');

// Create reading

const createReading = async(req, res) => {

    try{

        const {
            question,
            card_name,
            interpretation
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO readings
            (question, card_name, interpretation)

            VALUES ($1, $2, $3)

            RETURNING *
            `,
            [
                question,
                card_name,
                interpretation
            ]
        );

        res.json(result.rows[0]);
    }
    catch(error){
        console.log(error);

        res.status(500).json({
            error:"Server error"
        });
    }
};

// READ all readings

const getReadings = async(req, res) => {
    try{
        const result = await pool.query(
            `
            SELECT *
            FROM readings
            ORDER BY created_at DESC
            `
        );
        res.json(result.rows);
    }
    catch(error){
        console.log(error);

        res.status(500).json({
            error: "Server error"
        });
    }
};

module.exports = {
    createReading,
    getReadings
}