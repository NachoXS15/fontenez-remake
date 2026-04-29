'use client'
 
import Layout from "@/components/Layout";
import Image from "next/image";
import ServicesInfo from "@/config/ServicesInfo";
import { useState } from "react";
import { selectedService } from "@/config/definitions";
 
// Ornamento SVG reutilizable
const DiamondDivider = () => (
    <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-amber-600/40" />
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-amber-600/60 fill-current rotate-45">
            <rect x="2" y="2" width="6" height="6" />
        </svg>
        <div className="h-px w-10 bg-amber-600/40" />
    </div>
);
 
export default function Services() {
    const [selectedService, setSelectedService] = useState<selectedService>(ServicesInfo[0]);
    const [animating, setAnimating] = useState(false);
 
    const pickService = (service: selectedService) => {
        if (service.title === selectedService.title) return;
        setAnimating(true);
        setTimeout(() => {
            setSelectedService(service);
            setAnimating(false);
        }, 220);
    };
 
    return (
        <Layout>
            {/* Hero */}
            <section
                className="relative w-full h-162.5 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(/assets/anillo.jpg)` }}
            >
                {/* Overlay con degradado sofisticado */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-purplemain/50 to-black/70" />
 
                {/* Textura grain sutil */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                />
 
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
                    <Image src="/assets/logo.png" width={260} height={104} alt="Fonteñez Joyas" className="drop-shadow-2xl" />
                    <DiamondDivider />
                    <p
                        className="text-white/70 text-xl tracking-[0.45em] uppercase mt-2"
                        style={{ fontFamily: 'jubilat' }}
                    >
                        Servicios
                    </p>
                </div>
 
                {/* Borde dorado inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
            </section>
 
            {/* Sección servicios */}
            <main
                className="w-full px-5 md:px-14 py-20"
                style={{ fontFamily: 'jubilat' }}
            >
                {/* Título */}
                <div className="flex flex-col items-center mb-14 gap-4">
                    <p className="text-xs tracking-[0.4em] uppercase text-amber-700">Lo que ofrecemos</p>
                    <h2 className="text-4xl md:text-5xl text-blue-900 font-bold tracking-wide text-center">
                        Nuestros Servicios
                    </h2>
                    <DiamondDivider />
                </div>
 
                {/* Cards de servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {ServicesInfo.map((service, index) => {
                        const isSelected = selectedService.title === service.title;
                        return (
                            <button
                                key={index}
                                onClick={() => pickService(service)}
                                className={`
                                    group relative text-left p-6 border transition-all duration-300 cursor-pointer
                                    ${isSelected
                                        ? 'bg-purplemain border-purplemain text-white shadow-xl shadow-purple-900/20'
                                        : 'bg-white border-gray-200 text-blue-900 hover:border-purplemain/40 hover:shadow-md hover:-translate-y-0.5'
                                    }
                                `}
                            >
                                {/* Acento dorado superior */}
                                <div className={`absolute top-0 left-6 right-6 h-px transition-all duration-300 ${isSelected ? 'bg-amber-400/60' : 'bg-amber-600/20 group-hover:bg-amber-600/40'}`} />
 
                                <h3 className={`text-xl font-bold mb-3 tracking-wide ${isSelected ? 'text-white' : 'text-purplemain'}`}>
                                    {service.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isSelected ? 'text-white/75' : 'text-gray-500'}`}>
                                    {service.desc}
                                </p>
 
                                {/* Indicador seleccionado */}
                                {isSelected && (
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="h-px w-6 bg-amber-400/60" />
                                        <div className="w-1 h-1 bg-amber-400 rotate-45" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </main>
 
            {/* Detalle del servicio seleccionado */}
            <section className="w-full px-5 md:px-14 pb-24 flex flex-col md:flex-row gap-0 items-stretch">
                {/* Imagen */}
                <div className="hidden md:block w-full md:w-1/2 overflow-hidden relative">
                    <Image
                        src="/assets/banners/banner2.jpg"
                        className="w-full h-full object-cover"
                        alt={selectedService.title}
                        width={200}
                        height={200}
                    />
                    {/* Overlay esquina */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-slate-50/10" />
                </div>
 
                {/* Texto */}
                <div
                    className={`
                        w-full md:w-1/2 bg-slate-50 border border-gray-100 p-10 md:p-16
                        flex flex-col justify-center gap-6
                        transition-opacity duration-200
                        ${animating ? 'opacity-0' : 'opacity-100'}
                    `}
                    style={{ fontFamily: 'jubilat' }}
                >
                    <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-amber-600/40" />
                        <p className="text-xs tracking-[0.35em] uppercase text-amber-700">Servicio</p>
                    </div>
 
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                        {selectedService.title}
                    </h2>
 
                    <div className="h-px w-16 bg-purplemain/20" />
 
                    <p className="text-gray-600 text-xl leading-relaxed tracking-wide font-light">
                        {selectedService.display}
                    </p>
 
                    {/* Firma decorativa */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />
                        <svg width="12" height="12" viewBox="0 0 12 12" className="text-amber-600/50 fill-current rotate-45">
                            <rect x="3" y="3" width="6" height="6" />
                        </svg>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
 