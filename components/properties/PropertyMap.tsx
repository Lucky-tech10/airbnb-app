"use client";

import { findCountryByCode } from "@/utils/countries";
import CountryFlagAndName from "../card/CountryFlagAndName";
import Title from "./Title";
import LeafletMapComponent from "./LeafletMapComponent";

function PropertyMap({ countryCode }: { countryCode: string }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location =
    (findCountryByCode({ code: countryCode })?.location as [number, number]) ||
    defaultLocation;

  return (
    <div className="mt-4">
      <div className="mb-4">
        <Title text="Where you will be staying" />
        <CountryFlagAndName countryCode={countryCode} />
      </div>
      <LeafletMapComponent location={location} />
    </div>
  );
}

export default PropertyMap;
