const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Application listenting on PORT ${PORT}`);
});
