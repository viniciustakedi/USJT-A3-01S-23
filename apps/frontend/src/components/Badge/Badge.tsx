export type BadgeProps = {
  label: string
}

export default function Badge(props: BadgeProps) {
  return (
    <div className='w-auto p-x-2 truncate bg-baseHighest text-gray-300 px-3 py-1 rounded-full'>
      {props.label}
    </div>
  )
}
