import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        required
        className="max-w-xs"
      />
    </div>
  );
};

export default ImageInput;
