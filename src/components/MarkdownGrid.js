import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Remarkable } from 'remarkable';
import { Button } from '@material-ui/core';
import Pdf from 'react-to-pdf';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function MarkdownGrid() {
	const classes = useStyles();
	const [value, setValue] = React.useState('');

	const ref = React.createRef();

	const handleMarkdownChange = (event) => {
		setValue(event.target.value);
		console.log(value);
	};

	const md = new Remarkable({ html: true, breaks: true });

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={6}>
					<TextField
						id="outlined-multiline-static"
						label="Markdown"
						multiline
						fullWidth
						defaultValue={value}
						variant="outlined"
						onChange={handleMarkdownChange}
					/>
				</Grid>
				<Grid item xs={6}>
					<Typography align="left" fullWidth>
						<div
							ref={ref}
							dangerouslySetInnerHTML={{
								__html: md.render(value),
							}}
						></div>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Pdf targetRef={ref} filename="markdown-pdf-download.pdf">
						{({ toPdf }) => (
							<Button
								variant="contained"
								color="primary"
								onClick={toPdf}
							>
								Download as PDF
							</Button>
						)}
					</Pdf>
					;
				</Grid>
			</Grid>
		</div>
	);
}
