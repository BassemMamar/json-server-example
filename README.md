# json-server Example
 With [json-server](https://github.com/typicode/json-server) you can simply make a mock server with any json file you want and start test your front end quickly.

# Example Usage

 

### Command line:

`npm run json:server` hosts the db.json file in the port `3000`, you jsut go to http://localhost:3000/

`npm run json:server:random` hosts random data generated by executing `generator.js` script and host it in the port `3004`, you jsut go to http://localhost:3004/

# Installation

Just install `json-server` package and that's it

```sh
npm install json-server
```
OR
```sh
npm install 
```
For use on the command line, use the flag `npm install json-server -g`.

# Note
* As a benifit  i recommend to install `json-server` globally, then you can run the command
 `json-server --watch <data-json-file-name>.json` in any repository that contains your json data and have a server ready to use.

* For generating a dummy json data you may use 
    * [json-generator](https://www.json-generator.com/) to generate json dummy data online.
    * [faker.js](https://github.com/Marak/faker.js) to generate json dummy data by coding.