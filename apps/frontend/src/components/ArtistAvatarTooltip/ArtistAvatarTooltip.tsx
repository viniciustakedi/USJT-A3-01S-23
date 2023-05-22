import { Tooltip, ButtonBase, Avatar } from '@mui/material'

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
        <Avatar src={props.imageUrl} />
      </ButtonBase>
    </Tooltip>
  )
}
