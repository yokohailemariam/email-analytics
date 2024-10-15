import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/components/InputForm";
import { useState } from "react";
import { AuthWrapper } from "@/components/AuthWrapper";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "@/lib/schemas/auth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  };

  return (
    <AuthWrapper>
      <h2 className="text-3xl font-bold text-center  mb-6">Register</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <InputForm
            label={"First Name"}
            placeholder={"Enter your name"}
            name={"firstName"}
            control={form.control}
          />

          <InputForm
            label={"Last Name"}
            placeholder={"Enter your lastname"}
            name={"lastName"}
            control={form.control}
          />

          <InputForm
            label={"Email"}
            placeholder={"example@mail.com"}
            name={"email"}
            control={form.control}
          />

          <InputForm
            label={"Password"}
            placeholder={"********"}
            name={"password"}
            type="password"
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            control={form.control}
          />

          <InputForm
            label={"Confrim password"}
            placeholder={"********"}
            name={"confirmPassword"}
            type="password"
            showPassword={showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            control={form.control}
          />

          <Button className="w-full">Register</Button>
        </form>
      </Form>
      <div className="space-y-4 my-6">
        <p className="text-center font-light">Or continue with</p>
        <Button variant="outline" className="w-full ">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
          </svg>
          Continue with Gmail
        </Button>
      </div>
      <div className="mt-6 text-center flex gap-2 items-center justify-center">
        <p className="font-light">Already have an account?</p>
        <button onClick={() => navigate("/auth/login")}>Login</button>
      </div>
    </AuthWrapper>
  );
};

export default RegisterPage;
