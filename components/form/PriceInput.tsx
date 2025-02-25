// import { Prisma } from "@prisma/client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// Prisma.PropertyScalarFieldEnum.price;

const PriceInput = ({ defaultValue }: { defaultValue?: number }) => {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
