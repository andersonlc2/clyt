import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));


export default function Area(props) {

    return (
        <div>
            <Toolbar />
            <Grid container style={{ padding: 10 }}>
                {props.video.map((item, index) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box p={1} style={{ marginBottom: 30 }}>
                            <img 
                                style={{ width: '100%', maxHeight: 200, minHeight: 190, marginBottom: 10 }}
                                src={ item.thumb }
                                alt={ item.title }
                            />
                            <Box display='flex'>
                                <Box>
                                    <Avatar alt={ item.channel } src={ item.avatar }/>
                                </Box>
                                <Box style={{ marginLeft: 15 }}>
                                    <Typography
                                        style={{ fontWeight: 600 }}
                                        variant='body1'
                                        color='textPrimary'
                                    >
                                        { item.title }
                                    </Typography>
                                    <Typography
                                        display='block'
                                        variant='body1'
                                        color='textSecondary'
                                    >
                                        { item.channel }
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        color='textSecondary'
                                    >
                                        { item.views } • { item.date }
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Grid>
                ))}
            </Grid>
            <Divider />
        </div>

    )
}