const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
