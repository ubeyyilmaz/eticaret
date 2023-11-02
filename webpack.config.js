const path = require("path");

module.exports = {
  entry: "./src/index.js", // Giriş noktası
  output: {
    filename: "bundle.js", // Çıktı dosyasının adı
    path: path.resolve(__dirname, "dist"), // Çıktı dizini
  },
  resolve: {
    fallback: {
      "vm": require.resolve("vm-browserify"),
    },
  },
};
