import "tailwindcss/tailwind.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import axios from "axios";

const Cards = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePreview) {
      alert("Por favor, envie uma imagem primeiro!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/process-image", {
        url: imagePreview,
        enhancements: ["denoise", "deblur", "light"],
        width: 2000,
      });

      setGeneratedImage(response.data.generatedImageUrl); // Atualize conforme o formato de resposta da API
    } catch (error) {
      console.error("Erro ao gerar imagem:", error.message);
      alert("Erro ao gerar imagem. Tente novamente mais tarde.");
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Card className=" max-w-lg text-center shadow-lg h-[500px]">
        <CardHeader className="flex items-center justify-center bg-gray-200 rounded-t-lg h-[350px]">
          {generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <h4 className="font-bold text-lg">Upload Image</h4>
          )}
        </CardHeader>
        <CardBody className="py-4 flex items-center justify-center">
          <div className="flex items-center flex-col justify-center">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </Button>
            <button
              className="bg-red-400 py-2 mt-3 rounded w-40 text-white font-medium font-sans text-sm hover:bg-red-300 transition ease-in-out"
              onClick={handleGenerateImage}
            >
              GENERATE IMAGE
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
