import axios from 'axios';
import fs from 'fs';
import tress from 'tress';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

var q = tress(function (payload, done) {
  console.log('hello ' + payload.name);
  axios
    .get(payload)
    .then((data) => {
      const dom = new JSDOM(data.data);
      const tree = {};
      tree.price =
        dom.window.document.querySelector('.price')?.textContent ?? 0;
      tree.name =
        dom.window.document.querySelector('h1.main-title')?.textContent ?? '';
      tree.desc =
        dom.window.document.querySelector('div.desc div.text')?.textContent ??
        '';
      const container = Array.from(
        dom.window.document.querySelectorAll(
          'div.characteristics table tbody tr'
        )
      );
      const characteristics = {};
      container.forEach((tr) => {
        const tds = Array.from(tr.querySelectorAll('td'));
        characteristics.push({property: tds[0]?.textContent.trim(),value: tds[1]?.textContent.trim()});
      });
      tree.characteristics = characteristics;
      tree.images = Array.from(dom.window.document.querySelectorAll('.swiper-slide img')).map((img) => {img.src})
      done(null, tree);
    })
    .catch((e) => done(e, 'error'));
}, 2);

q.drain = function () {
  console.log('Finished');
};

q.error = function (err) {
  console.log('Job ' + this + ' failed with error ' + err);
};

q.success = function (data) {
  fs.writeFileSync('./data.json', JSON.stringify(data) + ',\n', {
    flag: 'a+',
  });

  console.log('Job ' + this + ' successfully finished. Result is ' + data);
};

let links = fs.readFileSync('./links.json', 'utf8');
links = links.split('\n');
links.forEach( link => q.push(link));
// q.push(links[0]);
