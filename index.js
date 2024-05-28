import express from 'express';
import routerUser from './src/modules/users/user.route.js';

import connectionDB from './db/connection.js';
import routerPost from './src/modules/posts/post.route.js';
import routerComments from './src/modules/comments/comment.route.js';


const app = express();
const port =process.env.port || 3000;

app.use(express())
app.use(express.json());
connectionDB()
app.use("/users", routerUser)
app.use("/posts", routerPost)
app.use("/comments", routerComments)




app.get('/', (req, res, next) => {
    res.status(200).send('Hello Mosmoyas!');
});

app.get('*', (req, res, next) => {
    res.status(404).send('Page is not Found');
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});