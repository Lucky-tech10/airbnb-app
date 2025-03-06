import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import {
  fetchRentalDetails,
  updatePropertyAction,
  updatePropertyImageAction,
} from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import { redirect } from "next/navigation";

const EditRentalPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const resolvedParams = await params;
  const property = await fetchRentalDetails(resolvedParams.id);
  if (!property) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">edit property</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text "
              label="Tagline (30 limit)"
              defaultValue={property.tagline}
            />
            {/* price */}
            <PriceInput defaultValue={property.price} />
            {/* categories */}
            <CategoryInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>
          {/* text area / description */}
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 Words)"
            defaultValue={property.description}
          />
          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="baths" defaultValue={property.baths} />
          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <AmenitiesInput
            defaultValue={JSON.parse(property.amenities as string)}
          />
          <SubmitButton text="edit property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditRentalPage;
