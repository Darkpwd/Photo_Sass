import express from 'express'
import cors from 'cors'
import axios from 'axios'


const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = '57e4bbe0-c066-11ef-a77c-bf148b3dcb18'

app.post("/process-image", async (req, res) => {
  try {
    const response = await axios.post(
      "https://deep-image.ai/rest_api/process_result",
      req.body,
      {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao processar imagem:", error.message);
    res.status(500).send({ error: error.message });
  }
});

const port = 3001;
app.listen(port, () => console.log(`Server running... ${port}`));