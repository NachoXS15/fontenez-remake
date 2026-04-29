import Layout from "@/components/Layout";
import Image from "next/image";
const DiamondDivider = () => (
	<div className="flex items-center gap-3">
		<div className="h-px w-10 bg-amber-600/40" />
		<svg width="10" height="10" viewBox="0 0 10 10" className="text-amber-600/60 fill-current rotate-45">
			<rect x="2" y="2" width="6" height="6" />
		</svg>
		<div className="h-px w-10 bg-amber-600/40" />
	</div>
);
export default function Index() {
	return (
		<Layout>
			<section
				className="relative w-full h-162.5 bg-cover bg-center overflow-hidden"
				style={{ backgroundImage: `url(/assets/anillo.jpg)` }}
			>
				{/* Overlay con degradado sofisticado */}
				<div className="absolute inset-0 bg-linear-to-b from-black/60 via-purplemain/50 to-black/70" />

				{/* Textura grain sutil */}
				<div className="absolute inset-0 opacity-20 pointer-events-none"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
					}}
				/>

				<div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
					<Image src="/assets/logo.png" width={260} height={104} alt="Fonteñez Joyas" className="drop-shadow-2xl" />
					<DiamondDivider />
					<p className="text-white/70 text-center text-xl tracking-[0.45em] uppercase mt-2" style={{ fontFamily: 'jubilat' }}>
						Artesanía & Excelencia
					</p>
				</div>

				{/* Borde dorado inferior */}
				<div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
			</section>
			<article className="w-full h-96 bg-white px-5" style={{ fontFamily: 'quador' }}>
				<h2 className="h-96 text-darkblue text-4xl lg:text-5xl flex justify-center items-center tracking-widest text-center">100 años celebrando la belleza en cada joya.</h2>
			</article>
			<section className="w-full h-fit md:px-10 mb-10">
				<div className="w-full h-125 px-10 bg-no-repeat bg-cover bg-center transition" style={{ backgroundImage: `url(/assets/banners/banner3.jpg)` }}>
				</div>
			</section>
			<hr className="m-auto w-40 border border-blue-800" />
			<section className="w-full h-fit md:px-10 mt-10">
				<div className="flex flex-col md:flex-row gap-5 mb-5">
					<div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner1.jpg)` }}></div>
					<div className="w-full md:w-1/4 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner4.jpg)` }}></div>
				</div>
				<div className="flex flex-col md:flex-row gap-5">
					<div className="w-full md:w-2/5 h-72 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner2.jpg)` }}></div>
					<div className="w-full md:w-3/4 h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/assets/banners/banner5.jpg)` }}></div>
				</div>
			</section>
			<hr className="my-15 m-auto w-40 border border-blue-800" />

		</Layout>
	)
}
