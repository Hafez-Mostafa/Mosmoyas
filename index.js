import express from 'express';
import cors from 'cors'
import routerUser from './src/modules/users/user.route.js';

import connectionDB from './db/connection.js';
import routerPost from './src/modules/posts/post.route.js';
import routerComments from './src/modules/comments/comment.route.js';


const app = express();
const port =process.env.APP_PORT || 3000;

const corsConfig = {
    origin: "*", Credential:true, methods:["GET","POST","PATCH","DELETE"]
}
app.use(express())
app.use(express.json());
app.use(cors(corsConfig))
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