# Info Tech Blog

>Info tech blog posts application.

## Usage 
Rename 'env.env' to '.env', fill the fields with your own data, in particular only the mongodb string connection field 'MONGO_URI='.
You need to change the ip address inside the package.json react client directory, for the image upload.
```
"proxy": "http://your.ip.address",
```
and, inside the routes node directory, inside index.js, this line with your ip address:
```
await upload(req, res, (err) => {
    let url = '';
    if (req.file !== undefined) {
      url = `http://your.ip.address/uploads/${req.file.filename}`;
    } else {
      url = 'http://your.ip.address/uploads/not-found.jpg';
    };

```


## Install dependencies
```
npm i --verbose

```

## Run app
```
node app.js

```

## Version 1.3.0

### License: MIT

#### auth @paper