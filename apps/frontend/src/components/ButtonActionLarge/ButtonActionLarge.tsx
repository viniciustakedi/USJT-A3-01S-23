export type ButtonActionLargeProps = {
  href: string
  label: string
}

export default function ButtonActionLarge(props: ButtonActionLargeProps) {
  return (
    <a href={props.href}>
      <div className='h-20 bg-primary rounded-md p-4 hover:bg-green-400 transitionDefault'>
        <p className='text-2xl font-semibold'>{props.label}</p>
      </div>
    </a>
  )
}
