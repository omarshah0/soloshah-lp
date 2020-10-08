exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery",
      $: "jQuery",
      "window.jQuery": "jQuery", // important: 'Q' capitalized
    },
  })
}
