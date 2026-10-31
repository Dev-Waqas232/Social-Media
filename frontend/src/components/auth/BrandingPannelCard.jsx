export default function BrandingPannelCard({ icon, title, text }) {
    return (
        <div
            className="w-full max-w-xs rounded-2xl border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/25"
        >
            <div className="mb-3 flex items-center gap-4">
                <p className="rounded-xl bg-white/25 text-xl w-10 h-10 flex items-center justify-center ">{icon}</p>
            <h2 className="font-heading text-xl font-bold">{title}</h2>
            </div>
            <p className="mt-1 text-sm text-white">{text}</p>
        </div>
    );
}