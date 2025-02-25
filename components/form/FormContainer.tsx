"use client";

// import { useFormState } from "react-dom";
import { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
