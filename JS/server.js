const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/HTML/recupera.html');
});

app.post('/verificar', async (req, res) => {
  const token = req.body['g-recaptcha-response'];
  const secret = '6Lc7aWsrAAAAAPMZuNWZTfZwYfH1cIvY_cUDFn08';

  if (!token) {
    return res.status(400).send('❌ Token reCAPTCHA não foi enviado.');
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const resposta = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      params
    );

    if (resposta.data.success) {
      res.send('✅ reCAPTCHA validado com sucesso!');
    } else {
      res.status(400).send('❌ Falha na verificação do reCAPTCHA.');
    }
  } catch (error) {
    console.error('Erro ao verificar reCAPTCHA:', error);
    res.status(500).send('⚠️ Erro ao verificar reCAPTCHA.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
