import { Compass, Share2, Users } from "lucide-react"

import BrandingPannelCard from "../../components/auth/BrandingPannelCard";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="w-full flex justify-between">
      <div className="w-[50%] hidden bg-secondary min-h-screen md:flex flex-col justify-center gap-4 text-surface">
        <div className="font-bold text-3xl flex flex-col gap-2 items-center">
          <h2>Share moments.</h2>
          <h2>Find your people.</h2>
        </div>
        <div className="flex justify-center text-center">
          <h3 className="w-[50%]">
            Post, connect and explore what your friends are up to — all in one place.
          </h3>
        </div>
        <div className="flex gap-2 px-2">
          <BrandingPannelCard title="Share" text="Post your moments, your way" icon={<Share2 />} />
          <BrandingPannelCard title="Connect" text="Find friends who get your vibe" icon={<Users />} />
        </div>
        <div className="w-full flex justify-center">
          <BrandingPannelCard title="Explore" text="Discover what's trending today" icon={<Compass />} />

        </div>
      </div>
      <RegisterForm />
    </section>
  );
}
