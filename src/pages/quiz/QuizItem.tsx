import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";

import images from "../../images";

import HandImage, { HandImagePropType } from "../../components/HandImage";

export interface ListItemPropType {
  id: number;
  title: string;
  content: string;
  drawn: string;
  round: number;
  wind: number;
  around: number;
  dora: string;
  point: number;
  answer: string;
  description: string;
}

export const rounds = [
  "東1局",
  "東2局",
  "東3局",
  "東4局",
  "南1局",
  "南2局",
  "南3局",
  "南4局",
];

export const winds = ["東", "南", "西", "北"];

const ListItem = (props: ListItemPropType): JSX.Element => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const paiWidth = "30px";

  const drawn = (
    <img src={images[parseInt(props.drawn, 10)]} alt="drawn" width={paiWidth} />
  );
  const dora = (
    <img src={images[parseInt(props.dora, 10)]} alt="dora" width={paiWidth} />
  );

  const handImageProps: HandImagePropType = {
    content: props?.content,
    imageWidth: "30px",
  };

  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <Link to={`/quiz/${props.id}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {props.title}
            </Typography>
            <HandImage {...handImageProps} />
            ツモ：{drawn} ドラ：{dora} <br />
            <Typography component="p">
              {rounds[props.round]} {props.around}巡目 {props.point}点
              {winds[props.wind]}家
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
