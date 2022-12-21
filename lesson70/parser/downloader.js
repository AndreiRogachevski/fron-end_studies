import axios from 'axios';
import fs from 'fs';

let data = fs.readFileSync('./data.json', 'utf8');
data = JSON.parse(data);
data = data.map((d) => d.img);
data = data.flat();

const image = data[0];
const localFilePath = image.split('/').pop();
axios({
  method: 'GET',
  url: 'https://elki.by' + link,
  responseType: 'stream',
}).then((response) => {
  const w = response.data.pipe(
    fs.createWriteStream('./images/' + localFilePath)
  );
  w.on('finish', () => {
    console.log('Successfully downloaded file!');
  });
});
