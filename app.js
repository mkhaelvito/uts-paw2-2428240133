require('dotenv').config();
const mongoose = require('mongoose'); 
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');

const donasiRoutes = require('./routes/donasiRoutes.js');
// const fakultasRoutes = require('./routes/fakultasRoutes');
// const prodiRoutes = require('./routes/prodiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server Express.js berjalan!');
});

app.use('/ebook', ebookRoutes);
// app.use('/fakultas', fakultasRoutes);
// app.use('/prodi', prodiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server berjalan di http://localhost:${PORT}`);
// });

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('Terhubung ke MongoDB');
    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Gagal terhubung:', err.message);
    process.exit(1);
  });