const express = require('express');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
