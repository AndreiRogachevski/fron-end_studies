export default function Image(props) {
  // console.log(props);
  return (
    <img
      src={props.data.urls.thumb}
      alt="img"
      onClick={() => {props.addBig(props.data.urls.small)}}
    />
  );
}
