import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { registerSchema } from "../../schemas/auth";
import { register as registerApi } from "../../api/auth";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { isPending, isError, error, mutate } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      console.log("Created");
    },
  });

  const handleSubmitForm = (data) => {
    mutate(data);
  };

  return (
    <form
      className="py-8 px-8 w-xl rounded-md flex-1"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="first-name" className="font-medium">
          First Name <span className="text-error font-bold">*</span>
        </label>
        <input
          type="text"
          id="first-name"
          {...register("firstName")}
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
        />
        {errors.firstName && (
          <p className="text-sm italic text-error font-medium">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="last-name" className="font-medium">
          Last Name <span className="text-error font-bold">*</span>
        </label>
        <input
          type="text"
          id="last-name"
          {...register("lastName")}
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
        />
        {errors.lastName && (
          <p className="text-sm italic text-error font-medium">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="email" className="font-medium">
          Email <span className="text-error font-bold">*</span>
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
        />
        {errors.email && (
          <p className="text-sm italic text-error font-medium">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="age" className="font-medium">
          Age <span className="text-error font-bold">*</span>
        </label>
        <input
          type="number"
          id="age"
          {...register("age")}
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
        />
        {errors.age && (
          <p className="text-sm italic text-error font-medium">
            {errors.age.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="gender" className="font-medium">
          Gender <span className="text-error font-bold">*</span>
        </label>
        <select
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
          id="gender"
          {...register("gender")}
          name="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        {errors.gender && (
          <p className="text-sm italic text-error font-medium">
            {errors.gender.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="password" className="font-medium">
          Password <span className="text-error font-bold">*</span>
        </label>
        <input
          type="text"
          id="password"
          {...register("password")}
          className="border border-gray-400 rounded-md py-2 focus:border-secondary focus:outline-none px-3 focus:border-2"
        />
        {errors.password && (
          <p className="text-sm italic text-error font-medium">
            {errors.password.message}
          </p>
        )}
      </div>
      <button className="bg-cta text-cta-text hover:bg-cta-hover transition-all w-full py-3 rounded-md">
        Register
      </button>
      <Link
        to="/auth/login"
        className="flex items-center justify-center mt-4 text-sm"
      >
        Already have an account?{" "}
        <span className="italic text-primary font-medium"> Login Now</span>
      </Link>
    </form>
  );
}
