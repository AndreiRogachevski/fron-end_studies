const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {faker} = require('@faker-js/faker');
const lodash = require('lodash');
const cors = require('cors')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const posts = [];
for (let i = 1; i < 35; i++) {
    posts.push({
        id: i,
        text: faker.lorem.paragraph(),
        image: faker.image.image(),
        title: faker.lorem.words(),
    })
}

app.get('/posts', (req, res) => {
    const page = req.query.page || 1;
    const chunks = lodash.chunk(posts, 10);
    return res.json(chunks[page-1]);
})
app.get('/posts/:id', (req, res) => {
    const id = req.params['id'];
    const post = lodash.cloneDeep(posts.find( p=> p.id == id ));
    post.text = faker.lorem.paragraphs(10, '\n');
    return res.json(post);
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//http://192.168.0.157:3000/posts
//http://192.168.0.157:3000/posts/3