# API REST WITH TYPESCRIPT
## Description

This repository is a Application software with TypeScript, Nodejs, Express, and MySQL, this application contains an API REST created with TypeScript.

## Installation
Using TypeScript, Nodejs, Express, MySQL, etc preferably.

## DataBase
Using MySQL preferably.

## Apps
Using Postman or RestEasy to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/api-rest-typescript.git [NAME APP] 

$ npm install

$ npm run dev (DEVELOPMENT)

$ npm run build (PRODUCTION)
```
Follow the following steps and you're good to go! Important:


![alt text](https://media2.giphy.com/media/RF5mb1srv4ALu/source.gif)


## Coding

### DATABASE

```sql
...
CREATE DATABASE api_rest_typescript;

CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128) NOT NULL, 
    description VARCHAR(256) NOT NULL,
    body TEXT NOT NULL,
    picture VARCHAR(512),
    state BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE post;
...
```

### Controllers

```typescript
...
const getPosts = async (req: Request,res: Response): Promise<Response> => {
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");
    return res.json(posts[0])
}

const createPost = async (req: Request,res: Response) => {
    const newPost: Post = req.body;
    console.log(newPost);
    const conn = await connect();
    await conn.query("INSERT INTO posts SET ?", [newPost]);
    return res.json({
        msg: "Post saved successfully!"
    });
}
...
```

### Models

```typescript
... 
export interface Post {
    id?: string;
    title: string;
    description: string;
    body: string;
    picture: string;
    state: boolean;
    created_at: Date;
}
...
```

### Routes

```typescript
... 
import {Router} from 'express';
import postCTRL from '../controllers/posts.controller';
const router = Router();
router.route('/')
    .get(postCTRL.getPosts)
    .post(postCTRL.createPost);
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/api-rest-typescript. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
