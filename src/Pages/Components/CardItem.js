import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
// import No from "../../assets/no.png"
// import Like from "../../assets/like.png"

const CardItem = ({ img, name, age }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt={name} height="140" image={img} />
        <CardContent>
          <h3>
            {name}, {age}
          </h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <img className="match-icons" src={No} alt="Nope"/>        
        <img className="match-icons" src={Like} alt="Yep"/> */}
      </CardActions>
    </Card>
  );
};

export default CardItem;
