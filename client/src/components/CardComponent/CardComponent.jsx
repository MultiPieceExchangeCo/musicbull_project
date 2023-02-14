import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from '@mui/material/Grid';
import './styles.css';

const CardComponent = (props) => {
  const {title} = props;

  return (
   
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
    <Card className="cardLayout">
      <CardContent>
        <Typography
          style={{ fontSize: 16,fontWeight: '850' }}
          color="textSecondary"
          gutterBottom
        >
          <img src="" />
        </Typography>
        <div className="heightComp">
        <Typography  className="typo-border">
         {title}
        </Typography>
       </div>
       <div className="subheightComp">
        <Typography variant="body2" component="p">
          {props.description}
         <div class="line"> <hr className="hrline"/></div>
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
        
      </CardActions>
    </Card>
    </Grid>
);

  
}

export default CardComponent;