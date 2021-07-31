import images from "../../images";

export interface ListItemPropType {
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
  const hands = props?.content?.split(",");
  const handImages = hands?.map((value, index) => {
    return (
      <img
        src={images[parseInt(value, 10)]}
        alt="pai-image"
        width="30px"
        key={index}
      />
    );
  });

  return (
    <div>
      {props.title}
      {handImages}
      {props.point}
    </div>
  );
};

export default ListItem;
