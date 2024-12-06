import styles from "./styles.module.scss";
import { useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { Checkbox } from "../Icons/Checkbox";
import { Typography } from "@ui/Typography";
import { Button } from "@ui/Button";
import Link from "next/link";
import { SendEmailData } from "@src/services/sendemail.service";
 
type FormProps<TFormValues extends FieldValues> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

export const Form = function <T extends FieldValues>({
  onSubmit,
  children,
  options,
  id,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({ ...options });
  const [showModal, setShowModal] = useState(false);

  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit((data) => {
        onSubmit(data);
        setShowModal(true);

        methods.reset({
          //@ts-ignore
          name: "",
          phone: "",
          descirption: "",
          lastname: "",
          email: "",
        });
      })}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
