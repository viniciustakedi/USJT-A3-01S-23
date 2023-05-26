import { Tooltip, ButtonBase } from '@mui/material'
import Avatar from '../Avatar'

export type ArtistAvatarTooltipProps = {
  id: number
  name: string
  imageUrl: string
  uri: string
}

export default function ArtistAvatarTooltip(props: ArtistAvatarTooltipProps) {
  return (
    <Tooltip key={props.id} title={props.name}>
      <ButtonBase href={props.uri} sx={{ borderRadius: '100%' }}>
        <Avatar imageUrl={props.imageUrl} />
      </ButtonBase>
    </Tooltip>
  )
}
