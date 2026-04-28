import Layout from "@/components/Layout";
import Image from "next/image";

export default function Index() {
	return (
		<Layout>
			<section className="w-full h-162.5 bg-cover bg-center" style={{ backgroundImage: `url(/assets/anillo.jpg)` }}>
				<div className="bg-purplemain/40 w-full h-162.5 bg-cover flex items-center justify-center ">
					<Image src="/assets/logo.png" width={300} height={120} alt="" />
				</div>
			</section>
			<article className="w-full h-96 bg-white px-5" style={{ fontFamily: 'quador' }}>
				<h2 className="h-96 text-darkblue text-5xl flex justify-center items-center tracking-widest text-center">100 años celebrando la belleza en cada joya.</h2>
			</article>
			<section className="w-full h-fit md:px-10 mb-10">
				<div className="w-full h-125 px-10 bg-no-repeat bg-cover bg-center transition" style={{ backgroundImage: `url(/assets/banners/banner3.jpg)` }}>
				</div>
			</section>
			<hr className="m-auto w-40 border border-blue-800" />
			<section className="w-full h-fit md:px-10 my-10">
				<div className="flex flex-col md:flex-row gap-5 mb-5">
					<div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner1.jpg)` }}></div>
					<div className="w-full md:w-1/4 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner4.jpg)` }}></div>
				</div>
				<div className="flex flex-col md:flex-row gap-5">
					<div className="w-full md:w-2/5 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner2.jpg)` }}></div>
					<div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner5.jpg)` }}></div>
				</div>
			</section>
		</Layout>
	)
}
