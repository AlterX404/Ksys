
// pages/api/verify_key.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, key } = req.body;

        if (!userId || !key) {
            return res.status(400).json({ error: 'User ID and key are required' });
        }

        const storedKey = keysDatabase[userId];  // Get the key stored for this user

        if (storedKey === key) {
            return res.status(200).json({ status: 'valid' });  // Key is valid
        } else {
            return res.status(401).json({ error: 'Invalid key' });  // Key is invalid
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });  // Only allow POST requests
}
