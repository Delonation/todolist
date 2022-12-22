import React, { useState } from "react";
import { Container, Button, TextField } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material/';


const ToDo = (props) => {
    let { data, } = props
    return (<>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                // console.log(data)
                data.map((d) => {
                    return (<ListItem
                        key="Asd"
                        disableGutters
                        secondaryAction={
                            <Container>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                                <IconButton color="error">
                                    <Delete />
                                </IconButton>
                            </Container>

                        }
                    >
                        <ListItemText primary={<TextField value={d.value} id="outlined-basic" label="Task" variant="outlined" />} />
                    </ListItem>)

                })
            }
            {/* <ListItem
                key="Asd"
                disableGutters
                secondaryAction={
                    <Container>
                        <Button sx={{ margin: 1 }} variant="contained">Edit</Button>
                        <Button sx={{ margin: 1 }} variant="contained" color="error">Delete</Button>
                    </Container>

                }
            >
                <ListItemText primary={`Line item 1`} />
            </ListItem>
            <Divider variant="inset" component="li" /> */}
        </List>
    </>
    );
}

export default ToDo