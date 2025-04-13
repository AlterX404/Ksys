export const keys: Record<string, string> = {}

export default function handler(req, res) {
  const { userid, key } = req.query

  if (!userid || !key)
    return res.status(400).json({ error: 'Missing userid or key' })

  if (keys[userid] === key) {
    return res.json({ success: true })
  }

  return res.status(401).json({ success: false })
}
