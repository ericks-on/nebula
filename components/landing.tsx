import Link from "next/link";

export default function Landing() {
    return (
        <div className="w-screen h-screen pt-24">
            {/* video */}
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="videos/vid_land.mp4" type="video/mp4" />
            </video>
            {/* content */}
            <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-start">
                <div className="md:w-2/5 md:p-8 flex flex-col gap-4">
                    <h1 className="text-6xl text-white font-semibold md:w-3/5">Data Science Expertise</h1>
                    <p className="text-white text-xl">Providing top-notch data analysis, machine learning, and predictive modeling services for your business needs.</p>
                    <Link href="#contact" className="bg-amber-600 text-white p-4 rounded-md w-1/3 text-center">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}