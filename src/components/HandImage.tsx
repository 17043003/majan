import images from "../images";

export interface HandImagePropType {
  content: string;
  imageWidth: string;
}

const HandImage = (props: HandImagePropType): JSX.Element => {
  const hands = props?.content?.split(",");
  const handImages = hands?.map((value, index) => {
    return (
      <img
        src={images[parseInt(value, 10)]}
        alt="pai-image"
        width={props.imageWidth}
        key={index}
      />
    );
  });
  return <>{handImages}</>;
};

export default HandImage;
