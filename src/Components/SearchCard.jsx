/** @format */

import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { getDistance } from 'geolib'

const ExpandMore = styled((props) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

export default function SearchCard(props) {
	const [expanded, setExpanded] = React.useState(false)
	const [longitude, setLongitude] = React.useState(0)
	const [latitude, setLatitude] = React.useState(0)

	const hospitals = props.hospitals

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	//  Calculating the distance
	const distance = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLongitude(position.coords.longitude)
			setLatitude(position.coords.latitude)
		})
	}
	distance()

	return hospitals.map((hospital) => {
		const dist = getDistance(
			{
				latitude: latitude,
				longitude: longitude,
			},
			{ latitude: hospital.location[0], longitude: hospital.location[1] }
		)

		return (
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					// avatar={
					//   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
					//     R
					//   </Avatar>
					// }
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title={hospital.name}
					subheader={`Type: ${hospital.type} - Contact ${hospital.contact}`}
				/>
				{/* <CardMedia
				component="img"
				height="194"
				image="/static/images/cards/paella.jpg"
				alt="Paella dish"
			/> */}

				<CardContent>
					<Typography>
						Distance: = {dist / 1000}
						<br />
						Facilities: {hospital.facilities}
						<br />
						Timing: {hospital.openTime} - {hospital.closeTime}
						<br />
						Days: {hospital.weekStart} - {hospital.weekEnd}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					{/* <IconButton aria-label="add to favorites">
			<FavoriteIcon />
		 </IconButton>
		 <IconButton aria-label="share">
			<ShareIcon />
		 </IconButton> */}
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography paragraph>
							Doctors: {hospital.doctors}
							<br />
							Email: {hospital.email}
							<br />
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		)
	})
}
