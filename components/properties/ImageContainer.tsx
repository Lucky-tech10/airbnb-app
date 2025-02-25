import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  return (
    <section className="relative h-[300px] md:h-[500px] mt-8">
      <Image
        src={mainImage}
        alt={name}
        fill
        sizes="100vw"
        className="rounded-md object-cover"
        priority
      />
    </section>
  );
};

export default ImageContainer;
