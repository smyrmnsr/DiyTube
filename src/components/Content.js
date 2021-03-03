import { useState, useEffect } from "react";
import{ makeStyles } from "@material-ui/core/styles";
import mokData from './mokData';
import axios from 'axios';
import{AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography} from "@material-ui/core";
import Carousel from "./Carousel";
import { VIDEOS } from "../data/CarouselData"



const useStyles = makeStyles({
    dataContainer: {
        paddingTop:"20px",
        paddingLeft:"50px",
        paddingRight:"50px"    
    },
    cardMedia:{
        margin:'auto',
    },
    cardContent:{
        textAlign:'center',
    },
});


const Content = () => {
    const classes= useStyles();
    const [myData, setMyData]= useState({});
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=handmade&key=AIzaSyBZcR7FMia8yNqsOMnNtbZ3mcKz8b3E5AY'

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=handmade&key=AIzaSyASbJ6CZpdnkjyG2L0gCMbhBf_tpP9-UEw')
        .then(function(data){
            const newData = {};

            let foo = data.data.items;
                foo.forEach((item, index) => {
                    newData[index + 1] = {
                        nume: item.kind
                    }
                })
                setMyData(newData);
                console.log(newData);
            });
        
    },[])


    const displayData=(dataId)=>{
        const {title, image} = myData[`${dataId}`];
        return(
            <Grid item xs={12} sm={4} key={dataId}>
                <Card>
                    <CardMedia  className="media" >
                        <img src={image} alt="" />
                    </CardMedia>
                    <CardContent>{title}</CardContent>
                </Card>
            </Grid>
        )
    
    }
    
    return ( 
        <div>
            <div className = 'celibatozaur'>
            {/* <Carousel myData = {myData} /> */}
            </div>
            {myData ? (
            <Grid container spacing={2} className={classes.dataContainer}>
                {Object.keys(myData).map(dataId=>displayData(dataId))}

            </Grid>
            ):(
                <CircularProgress />
            )}

        </div>
     );
}
 
export default Content;