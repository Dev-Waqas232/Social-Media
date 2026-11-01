import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { loginSchema } from "../../schemas/auth"

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    function handleSubmitForm() {
        console.log("I ran")
    }

    return <form
        className="w-xl"
        onSubmit={handleSubmit(handleSubmitForm)}
    >
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
            Login
        </button>
        <Link
            to="/auth/login"
            className="flex items-center justify-center mt-4 text-sm"
        >
            Don't have an account?{" "}
            <span className="italic text-primary font-medium"> Register Now</span>
        </Link>
    </form>
}