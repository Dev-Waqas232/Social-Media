import { Bell, Heart, MessageCircle } from "lucide-react";
import BrandingPannel from "../../components/auth/BrandingPannel";
import BrandingPannelCard from "../../components/auth/BrandingPannelCard";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
    return <section className="w-full flex justify-between">
        <BrandingPannel heading={"Welcome back."} subheading={"Your people missed you."}
            subtext={"Log in to catch up on posts, messages and everything you missed."}
            Card1={<BrandingPannelCard title="Catch up" text="See what your friends posted" icon={<Bell />} />}
            Card2={<BrandingPannelCard title="Chat" text="Pick up your conversations" icon={<MessageCircle />} />}
            Card3={<BrandingPannelCard title="	Stay close" text="Your community is waiting" icon={<Heart />} />}
        />
        <div className="flex-1 h-screen flex justify-center items-center">
        <LoginForm />
        </div>
    </section>
}