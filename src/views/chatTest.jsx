import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';

function Message({props}) {

    const [alignment, setalignment] = useState(props.align == 0 ? "left" : "right");
    console.log(alignment);

    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align={alignment} primary={props.message}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align={alignment} secondary={props.sender}></ListItemText>
                        </Grid>
                    </Grid>
                </List>
            </Box>
        </div>
    )

}


// After message we create a conversation component that will basically consist of several messages one after another
// Conversation->message->{sender, data}
// vetic sector gurgaon 45 

function Chat({props}) {

    return (
        <div>
            <List>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Message props={{message: "Hello Human", sender: "robot", align:0}}></Message>
                    </Grid>
                    <Grid item xs={12}>
                        <Message props={{message: "Hello Robot", sender: "human", align:1}}></Message>
                    </Grid>
                </Grid>
            </List>
        </div>
    )
}


export const ChatTest = () => {
    return (
        <div>
          {/* <Title />
          <MessageList />
          <SendMessageForm /> */}
          {/* <Message props={{message: "Hello World"}}></Message> */}
          <Chat></Chat>
       </div>
    )
}