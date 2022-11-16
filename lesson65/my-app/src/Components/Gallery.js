import { useEffect, useState } from 'react';
import Image from './Image';
import closeIcon from './close (3).png';
import leftIcon from './left-arrow.png';
import rightIcon from './right-arrow.png';

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [big, setBig] = useState(false);
  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.unsplash.com/photos?page=1', {
        headers: {
          'Authorization':
            'Client-ID RA32yJXfBHGO2J0irARnkBXuZes485Mv_U0ylgw3Irc',
        },
      });
      const json = await response.json();
      setPhotos(json);
    })();
  }, [setPhotos]);
  function changeImg(index) {
    let currentImg = photos.indexOf((img) => img.urls.small === big);
    if (currentImg + index < 0) {
      setBig(photos[photos.length - 1].urls.small);
    } else if (currentImg + index >= photos.length) {
      setBig(photos[0].urls.small);
    } else {
      setBig(photos[currentImg + index].urls.small);
    }
    console.log(index);
    console.log('cur', currentImg);
    console.log(currentImg + index);
  }
  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Image key={photo.id} data={photo} addBig={(url) => setBig(url)} />
      ))}
      {big && (
        <div className="bigImgWrapper">
          <img
            onClick={() => {
              changeImg(-1);
            }}
            className="leftArrow"
            src={leftIcon}
            alt="previous"
          />
          <img className="bigImg" src={big} alt="bigImg" />
          <img
            className="close"
            onClick={() => {
              setBig(false);
            }}
            src={closeIcon}
            alt="close"
          />
          <img
            onClick={() => {
              changeImg(1);
            }}
            className="rightArrow"
            src={rightIcon}
            alt="next"
          />
        </div>
      )}
    </div>
  );
}
