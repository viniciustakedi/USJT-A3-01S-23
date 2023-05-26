export type AvatarProps = {
  imageUrl?: string
  href?: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <a href={props.href || undefined}>
      <div className='group'>
        <img src={props.imageUrl} className='rounded-full w-16 h-16 object-cover shadow-md'/>
      </div>
    </a>
  )
}
