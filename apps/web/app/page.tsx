"use client";

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
