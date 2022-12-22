import React, { useState } from "react";
import { Container, Button, TextField, Grid } from '@mui/material'
import ToDo from './components/toDo'
function App() {

	let [taskList, setTasklist] = useState([]);
	let [txt, setTxt] = useState('');

	return (

		<Container>
			<Grid container spacing={0} justifyContent="center"
				alignItems="center">
				<TextField value={txt} onChange={(event) => { setTxt(event.target.value) }} id="outlined-basic" label="Task" variant="outlined" />
				<Button onClick={() => { setTasklist((prev) => { return [{ id: (Math.random() * 1122), value: txt }, ...prev] }) }} sx={{ margin: 1 }} variant="contained">Add</Button>
			</Grid>
			<Grid container spacing={0} justifyContent="center"
				alignItems="center">
				<ToDo data={taskList} >
					<p>child</p>
				</ToDo>
			</Grid>

		</Container>
88
	);
}

export default App;
