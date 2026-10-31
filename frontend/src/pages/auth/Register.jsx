import { Compass, Share2, Users } from "lucide-react"

import BrandingPannel from "../../components/auth/BrandingPannel";
import BrandingPannelCard from "../../components/auth/BrandingPannelCard";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <section className="w-full flex justify-between">

      <BrandingPannel heading="Share moments." subheading="Find your people."
        subtext="Post, connect and explore what your friends are up to — all in one place."
        Card1={<BrandingPannelCard title="Share" text="Post your moments, your way" icon={<Share2 />} />}
        Card2={<BrandingPannelCard title="Connect" text="Find friends who get your vibe" icon={<Users />} />}
        Card3={<BrandingPannelCard title="Explore" text="Discover what's trending today" icon={<Compass />} />} />
      <RegisterForm />
    </section>
  );
}
