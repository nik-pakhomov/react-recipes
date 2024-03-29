# Sass support with compilation to one css file

In this boilerplate all scss-files will be compiled into one _style.css_ file. Unfortunately sourcemaps doesn't work on this approach.

## How to work with it

Run next command to build project in "development" environment with file-watcher:

```bash
> npm start
```

To build project in "production" environment run:

```bash
> npm run build
```

### Note

[It's not recomended to use `mini-css-extract-plugin` with `style-loader`](https://github.com/webpack-contrib/mini-css-extract-plugin#recommend), so it's used only for production build in this boilerplate.

### References

- [Как с нуля создать проект на React, используя Webpack 4 и Babel (RUS)](https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-react-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-webpack-4-%D0%B8-babel-172c256d228)
- [Some solutions was taken from 'webpack-react-boilerplate' repo of HashemKhalifa](https://github.com/HashemKhalifa/webpack-react-boilerplate)
