import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';

function Message({props}) {

    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 160, bgcolor: 'background.paper' }}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary={props.message}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    )

}

// After message we create a conversation component that will basically consist of several messages one after another
// Conversation->message->{sender, data}


export const ChatTest = () => {
    return (
        <div>
          {/* <Title />
          <MessageList />
          <SendMessageForm /> */}
          <Message props={{message: "Hello World"}}></Message>
       </div>
    )
}