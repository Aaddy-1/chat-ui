import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import { TextField } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Send } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import outerMostDiv from '/Users/aadeesh/Programming/chat-ui/src/css/chatWindow.css';
import chatDiv from '/Users/aadeesh/Programming/chat-ui/src/css/chatWindow.css';
import boxStyle from '../css/styles.jsx';
import { textBoxStyle } from '../css/styles.jsx';

function Message({props}) {

    const [alignment, setalignment] = useState(props.align == 0 ? "left" : "right");
    const [sender, setSender] = useState(props.sender == 0 ? "robot" : "human");
    // console.log(alignment);

    return (
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
                <List>
                    <ListItem>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align={alignment} primary={props.content}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align={alignment} secondary={sender}></ListItemText>
                        </Grid>
                    </Grid>
                    </ListItem>
                </List>
            </Box>
        </div>
    )

}


function ChatWindow({props}) {
    const [messageList, setMessageList] = useState(props);
    const endRef = useRef();

    const scrollToBottom = () => {
        endRef.current?.scrollIntoView({behavior: "smooth"})
    }
    
    useEffect(() => {
        scrollToBottom();
    });

    function message(message) {
        return (
            <Grid item xs={12}>
                <Message props={message}></Message>
            </Grid>
        )
    }
    return (
        <div className='chatDiv' props>
            <Box sx={boxStyle}>
                <Grid container spacing={2}>
                    {messageList.map(msg => (
                        message(msg)
                    ))}
                </Grid>
                <div ref={endRef}></div>
            </Box>
            
        </div>
    )
}

// Conversation->message->{sender, data}

export const ChatTest = () => {
    const [sender, setSender] = useState(0);
    const [align, setAlign] = useState(0);
    const [messageList, setMessageList] = useState([{content: "Hello World", sender: sender, align: align}]);
    let messageCopy = messageList;

    // Creating a ref to textbox to access its value
    const textRef = useRef();
    function textKeyHandler(event) {
        if (event.key === 'Enter') {
            submitHandler();
        }
    }
    function submitHandler() {
        let tempSender = (sender == 0 ? 1 : 0);
        let tempAlign = (align == 0 ? 1 : 0);
        let newData = {
            content: textRef.current.value,
            sender: tempSender,
            align: tempAlign,
            
        }
        messageCopy.push(newData);
        // We set the value of text box back to null after hitting enter
        textRef.current.value = '';
        setMessageList(messageCopy);
        console.log(messageList);
        // We used the temp vars before because calling setState would re render the function
        setSender(tempSender);
        setAlign(tempAlign);
    }

    return (
        <div className='outermostDiv'>
          <ChatWindow props={messageList}></ChatWindow>
          <Divider/>
          <div className='inputDiv'>
          <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <TextField style={textBoxStyle} id="outlined-basic-email" label="Type Something" fullWidth />
                </Grid>
                    <Grid xs={1} align="right">
                        <Send/>
                </Grid>
            </Grid>
          </div>
       </div>
    )
}