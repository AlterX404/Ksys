import { v4 as uuidv4 } from 'uuid'

const keys: Record<string, string> = {}

export default function handler(req, res) {
  const { userid } = req.query

  if (!userid) return res.status(400).json({ error: 'No userid provided' })

  if (keys[userid]) {
    return res.json({
      key: keys[userid],
      url: `https://your-vercel-name.vercel.app/key/${keys[userid]}`,
    })
  }

  const newKey = uuidv4().replace(/-/g, '').slice(0, 16)
  keys[userid] = newKey

  res.json({
    key: newKey,
    url: `https://your-vercel-name.vercel.app/key/${newKey}`,
  })
}
