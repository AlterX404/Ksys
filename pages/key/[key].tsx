import { useRouter } from 'next/router'

export default function KeyPage() {
  const router = useRouter()
  const { key } = router.query

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Your Key</h1>
      <p style={{ fontSize: '24px' }}>{key}</p>
      <p>Copy this key and paste it into your Roblox script.</p>
    </div>
  )
}
