import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';


type Props = {
    // Define your component props here
};

const MyComponent: React.FC<Props> = (props) => {
    // Component logic goes here
    const matches = useMediaQuery('(max-width:600px)');


    return (
        <div className="mt-10 flex mx-auto" style={{
            marginLeft: matches ? "12px" : "",
            marginRight: matches ? "12px" : "",
            maxWidth: matches ? "100%" : "70%",
            alignContent: "center",
        }

        }>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Alex Walls - Software Engineer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        I am a graduate Software Engineer, specialising in web design and development.

I use modern technologies to deliver bespoke solutions to my clients.

Below is a brief introduction to some of the projects I have been working on recently.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        className="w-full h-64 object-cover"
                        image="images/profile.jpeg" // Your portrait image URL here
                        alt="Alex Walls"
                    />
                </Card>
            </Grid>
        </Grid>
    </div>
    );
};

export default MyComponent;