'use client'

import Layout from "@/components/Layout";
import Image from "next/image";
import ServicesInfo from "@/config/ServicesInfo";
import { useState } from "react";
import { selectedService } from "@/config/definitions";

export default function Services() {

    const [selectedService, setSelectedService] = useState<selectedService>(ServicesInfo[0])

    const pickService = (service: selectedService) => {
        setSelectedService(service)
    }

    return (
        <Layout>
            <section className="w-full h-162.5 bg-cover bg-center" style={{ backgroundImage: `url(/assets/anillo.jpg)` }}>
                <div className="bg-purplemain/40 w-full h-162.5 bg-cover flex items-center justify-center ">
                <Image src="/assets/logo.png" width={300} height={120} alt="" />
                </div>
            </section>
            <main className="w-full h-96 mt-20 px-5 md:px-10">
                <div className="w-full h-full bg-slate-100 border border-gray-200" style={{fontFamily: 'jubilat'}}>
                    <div className="w-full h-full flex flex-col items-center ">
                        <h2 className="px-5 py-2 bg-slate-100 rounded-lg w-fit text-center relative -top-5 text-purplemain text-3xl tracking-widest shadow-md">Nuestros Servicios</h2>
                        <div className="w-full h-full flex overflow-x-auto lg:overflow-x-hidden">
                            {   
                                ServicesInfo.map((service, index) => (
                                    <div key={index} className="h-5/6 flex flex-col items-center justify-center gap-5 px-5 border-r-2 border-r-gray-200 hover:scale-105 transition hover:cursor-pointer" onClick={() => pickService(service)}>
                                        <h2 className="text-3xl text-white bg-purplemain w-fit px-3 py-2">{service.title}</h2>
                                        <p className="text-center text-xl">{service.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
            <section className="w-full h-150 px-5 md:px-10 mt-10 flex gap-10 items-center justify-center">
                <div className="hidden md:block w-full h-4/5 md:w-1/2 bg-slate-200">
                    <img src="/assets/banners/banner2.jpg" className="w-full" alt="" />
                </div>
                <div className="w-full min-h-fit md:h-4/5 md:w-1/2 flex flex-col items-center md:items-end md:justify-center" style={{fontFamily: 'jubilat'}}>
                    <h2 className="text-5xl text-white bg-purplemain text-center w-full md:w-fit px-14 py-2">{selectedService.title}</h2>
                    <p className="text-center md:text-end font-light tracking-wider text-3xl px-2 md:px-0 mt-10">{selectedService.display}</p>
                </div>
            </section>
        </Layout>
    )
}
