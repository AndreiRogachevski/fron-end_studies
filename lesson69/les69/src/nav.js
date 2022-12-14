import { useSwiper } from 'swiper/react';

export default function Nav({index}) {
  const swiper = useSwiper();
  return (
    <div className='buttons'>
      <button onClick={() => swiper.slidePrev()}>Previous</button>
      <h1>{index}</h1>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
}
