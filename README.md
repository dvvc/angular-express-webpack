# AngularJS + Express + Webpack template

A template for sane back and front-end development using Angular and
Express. The main goal os this template is to reduce magic (code generation,
"convention over configuration", ...) and to use the minimum number of tools.

Since I am mostly a backend developer, I am kind of biased towards npm, and
since that seems to be a pretty decent option, it is the central part of this
workflow.

## Features

- Hot reloading for both the client and the server
- Support for JSHint, ES6 and ng-annotate on the client side
- Only requires webpack and npm
- Generates separate bundles for the app and third-party libraries
- Include bootstrap and Angular templates
- Angular proxy communicates with the Express API on the same origin

## Usage

Clone this repository, then install the dependencies:

`npm install`

Then run the dev script:

`npm run dev`

## Notes

This is still not ready for production deployments!

## Credits

I "borrowed" many ideas from tutorials, articles and Stack Overflow answers
around the web. The main ones are:

- <http://shmck.herokuapp.com/webpack-angular-part-1/>
- <http://www.netinstructions.com/100-days-of-angular-2-day-5/>
- <https://www.phase2technology.com/blog/bundle-your-front-end-with-webpack/>
- <http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/>

## TODO

- Generate a CSS bundle?
- Use `controllerAs` to be able to use this instead of $scope in controllers
- Switch between development and production modes

## License

This program is licensed under the [MIT License](https://opensource.org/licenses/MIT)
