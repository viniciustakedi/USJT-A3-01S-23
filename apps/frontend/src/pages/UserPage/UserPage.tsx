import { useCurrentUser } from '../../hooks/use-current-user'

export default function UserPage() {
  const { user, tracks } = useCurrentUser()
  return (
    <>
      <div>{user.name}</div>
      {tracks.map(track => (
        <div>{track.name}</div>
      ))}
    </>
  )
}
