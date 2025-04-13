// pages/api/generate_key.js
import { v4 as uuidv4 } from 'uuid'; // Import the UUID package

let keysDatabase = {};  // In-memory store for simplicity (use a real database in production)

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const uniqueKey = uuidv4();  // Generate a unique key
        keysDatabase[userId] = uniqueKey;  // Store it in-memory

        return res.status(200).json({ key: uniqueKey });  // Send back the generated key
    }

    return res.status(405).json({ error: 'Method Not Allowed' });  // Only allow POST requests
}

