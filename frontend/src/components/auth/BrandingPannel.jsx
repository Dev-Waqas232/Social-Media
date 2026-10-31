export default function BrandingPannel({ heading, subheading, subtext, Card1, Card2, Card3 }) {
    return <div className="w-[50%] hidden bg-secondary min-h-screen md:flex flex-col justify-center gap-4 text-surface">
        <div className="font-bold text-3xl flex flex-col gap-2 items-center">
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
        </div>
        <div className="flex justify-center text-center">
            <h4 className="w-[50%]">
                {subtext}
            </h4>
        </div>
        <div className="flex gap-2 px-2">
            {Card1}
            {Card2}
        </div>
        <div className="w-full flex justify-center">
            {Card3}

        </div>
    </div>
}