import "tailwindcss/tailwind.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const Cards = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-3/4 max-w-4xl text-center shadow-lg h-96">
        <CardHeader className="flex items-center justify-center px-4 py-6 bg-gray-200 rounded-t-lg">
          <h4 className="py-6 mt-4 font-bold text-large">Upload Image</h4>
        </CardHeader>
        <CardBody className="py-2 overflow-visible ">
          <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center mt-4">
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />} // Upload icon
              >
                Upload files
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(event) => console.log(event.target.files)}
                />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
