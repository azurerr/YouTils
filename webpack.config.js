// const path = require('path');

// module.exports = {
//     // Your Webpack configuration goes here
//     resolve: {
//         fallback: {
//             fs: false,
//             path: false,
//         },
//     },
// };

// const Dotenv = require('dotenv-webpack');

// module.exports = {

//     plugins: [
//         new Dotenv()
//     ]

// };

// const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
// const isDevelopment = process.env.NODE_ENV !== 'production'

// module.exports = {
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': JSON.stringify(dotenv.parsed),
//       'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
//     }),
//   ].filter(Boolean),
// }