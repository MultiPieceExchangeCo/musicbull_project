
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import CardComponent from '../.././components/CardComponent/CardComponent'
import './style.css';
//import data from './data.json'

const DashboardPage = () => {
//  const title = data.title;

    return (  
        <div className="mainComp">
          <div className="mainContent">

          <div className="headingTxt"> 
              <Typography style={{ fontSize: 24,fontWeight: 'bolder' }} align="center"> 
              What type of Listing would you like to transfer?
              </Typography>
              <Typography  style={{ fontSize: 15}} align="center">
              In order to transfer for your listing you will need your contracts rights ready for upload?
                </Typography>
            </div>

          <div className="content">
           
            <Grid container columnSpacing={3} columns={24}>
              <Grid  xs={8}>
            <CardComponent title="A Single" description="Can have Mulitple Contract Rights"/>
              </Grid>
              <Grid  xs={8}>
              <CardComponent title="Songs from an Album" description="Can have Mulitple Contract Rights"/>
              </Grid>
              <Grid  xs={8}>
              <CardComponent title="Songs from a Catalog" description="Can have Mulitple Contract Rights"/>
              </Grid>
            </Grid>

            <Grid container columnSpacing={3} columns={24} rowSpacing={2}>
              <Grid  xs={8}>
            <CardComponent  title="A Complete Album" description="One Bundled contract Rights"/>
              </Grid>
              <Grid  xs={8}>
              <CardComponent title="A Complete Catalog" description="One Bundled contract Rights"/>
              </Grid>
              <Grid  xs={8}>
              <CardComponent title="Create your Own Catalog" description="One Bundled contract Rights"/>
              </Grid>
           </Grid>
           
        </div>
    </div>
    </div>
    
       
    );
}

export default DashboardPage;