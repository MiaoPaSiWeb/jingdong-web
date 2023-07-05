const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-web/main/jdweb/src/mock",
//       },

//     },
//   },
// };
//https://raw.githubusercontent.com/MiaoPaSiWeb/jingdong-web/main/jdweb/src/mock/home/jsonpHotWords.json