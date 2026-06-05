const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions) => {
        postcssLoaderOptions.postcssOptions = postcssLoaderOptions.postcssOptions || {};
        const existing = postcssLoaderOptions.postcssOptions.plugins || [];
        postcssLoaderOptions.postcssOptions.plugins = [
          tailwindcss("./tailwind.config.js"),
          autoprefixer,
          ...existing,
        ];
        return postcssLoaderOptions;
      },
    },
  },
};
