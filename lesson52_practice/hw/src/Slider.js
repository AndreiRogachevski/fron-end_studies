export default function Slider(props) {
  return (
    <div>
      <img style={{ width: '98vw' }} src={props.slideImage} alt="img" />
      <p>{props.slideText}</p>
    </div>
  );
}
