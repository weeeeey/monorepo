"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type FormSubmitData<T extends z.ZodType> = SubmitHandler<z.infer<T>>;

const basicFormSchema = {
  email: z.string().email().nonempty("이메일을 입력해주세요"),
  username: z.string().nonempty("이름을 입력해주세요"),
  password: z
    .string()
    .nonempty("비밀번호를 입력해주세요")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      "영문+숫자+특수문자(! @ # $ % & * ?) 조합 8~15자리를 입력해주세요",
    ),
  passwordCheck: z.string().nonempty("비밀번호를 다시 입력해주세요"),
};

// 스키마를 받아서 타입을 정의하는 방법

const useCustomForm = <T>(opionalSchema?: T) => {
  const formSchema = z.object({
    ...basicFormSchema,
    ...opionalSchema,
  }) as z.ZodObject<typeof basicFormSchema & T>;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return {
    ...form,
    formSchema,
  };
};

export { type FormSubmitData, useCustomForm };

/**
 * @example
 * "use client";

import { type FormSubmitData, useCustomForm } from "@repo/shared-core/hooks";
import { z } from "zod";

const optionalSchema = {
  aaaa: z.string().nonempty("aaaa"),
  bbbb: z.string().nonempty("bbbb"),
};
type optionalSchema = typeof optionalSchema;

export default function Home() {
  const { handleSubmit, register, formSchema } =
    useCustomForm<optionalSchema>(optionalSchema);

  const onSubmit: FormSubmitData<typeof formSchema> = (data) => {
    console.log(data);
  };
  const invalid = (e: unknown) => {
    console.log(e);
  };

  return (
    <div className="h-[200vh] space-y-4">
      <form onSubmit={handleSubmit(onSubmit, invalid)}>
        aaa
        <input className="border" {...register("email")} type="text" />
        <input className="border" {...register("password")} type="text" />
        <input className="border" {...register("passwordCheck")} type="text" />
        <input className="border" {...register("username")} type="text" />
        <button type="submit">bb</button>
      </form>
    </div>
  );
}

 */
