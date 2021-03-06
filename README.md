# geolocLang - react, redux, react-redux, immutable

* baseline - https://github.com/alicoding/react-webpack-babel

* To Build - npm run watch (https://www.npmjs.com/package/npm-watch)

* Config - Add /src/config.jsx with "export const config = {whatThreeWordsKey: 'yourkeygoeshere'};"

## Decisions
### React.createClass vs extends React.Component
* https://toddmotto.com/react-create-class-versus-component/

### Options of how to make an API call
* https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1

## Tools
* https://github.com/zalmoxisus/redux-devtools-extension#usage










# (Based On) react-webpack-babel
Simple React Webpack Babel Starter Kit

Tired of complicated starters with 200MB of dependencies which are hard to understand and modify?

Try this is a simple [React](https://facebook.github.io/react/), [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/) application with nothing else in it.

### What's in it?

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* CSS module loading, so you can include your css by ```import styles from './path/to.css';```.
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/alicoding/react-webpack-babel.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```

### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* other styles are considered global styles used by many components and are included in the css bundle directly.

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
