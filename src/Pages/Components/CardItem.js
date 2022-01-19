import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardItem = ({ img, name, age }) => {

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {name}, {age}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="primary">
          Nope
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;

// import React from "react";

// import "../Components/Styles/CardItem.css"

// const CardItem = ({ img, name, age }) => {
//   return (
//     <div className="card">
//       <img src={img} className="profile-img" alt={name} />
//       <h4 className="user-info">
//         {name}, {age}
//       </h4>
//     </div>
//   );
// };

// export default CardItem;
