import Slider from './Slider.js';
export default function SliderList(props) {
  return props.slides.map((slide, index) => {
    return <Slider key={index} slideImage={slide.img} slideText={slide.text} />;
  });
}
