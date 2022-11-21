export default function Image(props) {
  // console.log(props.data);
  return (
    <img
      src={props.data.urls.thumb}
      alt="img"
      onClick={() => {props.addBig(props.data)}}
    />
  );
}
