# Lazy loading of React components with Webpack

Simple demo app for presentation about Lazy loading of React components with Webpack. 

## Installation

```sh
yarn install
yarn run build
```

Run a webserver that serves all files and defaults to `index.php` for all files not found. In Nginx, this is usually very effective.

```
location / {
  try_files $uri /index.php?$query_string;
}
```

## Running

```sh
yarn run watch
```