import React, {useEffect} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    incrementAsync
} from './mainSlice';
import {Loader} from "../../components/loader/Loader";
import {IServerListDataItem} from "../../app/interfaces/interfaces";
import List from '@mui/material/List';
import {CoursesListItem} from "../../components/list/CoursesListItem";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

import ListItem from '@mui/material/ListItem';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

export function Main() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(incrementAsync())
    }, []);

    const isLoading = useAppSelector(state => state.main.showLoading);
    const list = useAppSelector(state => state.main.list);
    let renderList: React.ReactElement[] = [];
    if (list.data) {
        renderList = list?.data.map((item: IServerListDataItem) =>
            <Grid item xl={"auto"}>
                <CoursesListItem name={item.direction.title}></CoursesListItem>
            </Grid>
        )
    }

    return (
        <div>
            {isLoading && <Loader/>}
            <Container maxWidth="sm" sx={{border: 4}}>
                <Grid container spacing={2}>
                    <List>
                        <ListItem divider disableGutters>
                            <Typography sx={{wordBreak: "break-word", maxWidth: 250}} variant="h6" component="h2">
                                Изучайте <span style={{color: 'blue'}}>актуальные темы</span>
                            </Typography>
                        </ListItem>
                        {renderList}
                    </List>
                </Grid>
                <TextsmsOutlinedIcon
                    sx={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px'
                    }}
                    color="primary"></TextsmsOutlinedIcon>
            </Container>
        </div>
    );
}
