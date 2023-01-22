import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Interfaces} from "../../app/interfaces/interfaces";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export function CoursesListItem(props: Interfaces) {
    return (
        <div>
            <ListItem divider disableGutters>
                <ListItemText sx={{mr: 5}} primary={props.name} secondary="XX курсов"/>
                <ListItemAvatar sx={{mr:-2}} >
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        </div>
    );
}
