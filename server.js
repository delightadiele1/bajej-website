const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const port = process.env.PORT || 6000;
console.log(`Environment: ${process.env.NODE_ENV}`);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
