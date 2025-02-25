import { fetchProperty } from "@/utils/actions";
import EmptyList from "./EmptyList";
import { PropertyCardProps } from "@/utils/types";
import PropertiesList from "./PropertiesList";

const PropertiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: PropertyCardProps[] = await fetchProperty({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }
  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
