import Avatar from '../Avatar'

type UserCardProps = {
  name: string
  imageUrl: string
  id?: number
  variant: 'redirect' | 'static'
  dark?: boolean
  redirectUrl?: string
  isHeader?: boolean
}

export default function UserCard(props: UserCardProps) {
  const isRedirect = props.variant === 'redirect'

  return (
    <>
      <a href={isRedirect ? props.redirectUrl : undefined} className='no-underline w-full'>
        <div className={`py-2 px-4 rounded-lg ${ props.isHeader ? 'bg-baseBlack' : 'bg-baseHigh'} ${isRedirect && 'hover:bg-neutral-600 transition-all shadow-md'}`}>
          <div className='flex items-center gap-6'>
            <Avatar imageUrl={props.imageUrl} />
            <h3 className={`text-2xl font-medium text-white`}>
              {props.name}
            </h3>
          </div>
        </div>
      </a>
    </>
  )
}
