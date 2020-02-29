import React from 'react';
import { useDispatch } from 'react-redux';

import { CssBaseline, AppBar, Container, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { addNewForm } from './actions/StudentsActions';
import StudentsTable from './components/StudentsTable';
import './App.sass';

const App: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Container maxWidth="md">
					<Toolbar disableGutters={true}>
						<Typography variant="h6">Students list app - TypeScript + React + Redux</Typography>
					</Toolbar>
				</Container>
			</AppBar>

			<Container maxWidth="md">
				<Grid container justify="space-between" alignItems="center">
					<Grid item>
						<h2>Таблица студентов</h2>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							startIcon={<AddCircleIcon />}
							title="Добавить нового студента"
							onClick={() => dispatch(addNewForm())}
						>
							Добавить
						</Button>
					</Grid>
				</Grid>

				<StudentsTable />
			</Container>
		</>
	);
};

export default App;
