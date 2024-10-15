import { Control, FieldValues, Path } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface InputFormProps<TFormValues extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  showIcon?: boolean;
  control: Control<TFormValues> | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  showPassword?: boolean;
  setShowPassword?: () => void;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  inputClassName?: string;
  bgColor?: boolean;
  inputWrapperClassName?: string;
}

export const InputForm = <TFormValues extends FieldValues>({
  label,
  placeholder,
  name,
  showIcon = true,
  control,
  type,
  showPassword = false,
  props,
  className,
  inputClassName,
  setShowPassword,
  inputWrapperClassName,
  bgColor = false,
}: InputFormProps<TFormValues>) => {
  const passwordOrConfirmPassword =
    name === "password" || name === "confirmPassword";
  const error = control?._formState.errors[name]?.message;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          <FormLabel className="text-black text-[16px]" htmlFor={name}>
            {label}
          </FormLabel>
          <FormControl>
            <div
              className={cn(
                "flex items-center rounded-lg",
                error && "border border-red-500 px-1",
                !bgColor && "bg-gray-100",
                inputWrapperClassName
              )}
            >
              {showIcon && (
                <div className={cn(showIcon && "px-3")}>
                  {showIcon && (
                    <ShowIcon name={name} error={error?.toString()} />
                  )}
                </div>
              )}

              <div
                className={cn(
                  "flex w-full rounded-lg border-none border ",
                  !bgColor && "bg-gray-100"
                )}
              >
                <Input
                  id={name}
                  type={
                    passwordOrConfirmPassword && showPassword ? "text" : type
                  }
                  placeholder={placeholder}
                  className={cn(
                    "outline-none rounded-r-md w-full py-6 pr-2 rounded-lg ring-0 focus-visible:ring-0 border-none  focus:outline-none focus:border-none focus-visible:ring-offset-0 placeholder:text-gray-500",
                    !showIcon && "pl-3",
                    !bgColor && "bg-gray-100",
                    inputClassName
                  )}
                  {...field}
                  min={name === "password" ? 1 : undefined}
                  {...props}
                />
                {passwordOrConfirmPassword && (
                  <button
                    type="button"
                    onClick={setShowPassword}
                    className="flex items-center pr-2 bg-gray-100 rounded-lg"
                  >
                    {showPassword ? (
                      <Eye color="black" />
                    ) : (
                      <EyeOff color="black" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ShowIcon = <TFormValues extends FieldValues>({
  name,
  error,
}: {
  name: Path<TFormValues>;
  error?: string;
}) => {
  switch (name) {
    case "email":
      return <Mail size={24} color={error ? "red" : "black"} />;
    case "password":
      return <Lock size={24} color={error ? "red" : "black"} />;
    case "confirmPassword":
      return <Lock size={24} color={error ? "red" : "black"} />;
    case "firstName":
      return <User size={24} color={error ? "red" : "black"} />;
    case "lastName":
      return <User size={24} color={error ? "red" : "black"} />;
    default:
      return null;
  }
};
