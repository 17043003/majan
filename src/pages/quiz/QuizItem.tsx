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
