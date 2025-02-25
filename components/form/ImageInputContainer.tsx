"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";
import { type actionFunction } from "@/utils/types";
import { LuCircleUser } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  text: string;
  action: actionFunction;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, text, action } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuCircleUser className="w-24 h-24 bg-primary rounded-lg text-white mb-4" />
  );

  return (
    <div>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-md object-cover mb-4 w-24 h-24"
          alt={name}
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        className="capitalize"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
