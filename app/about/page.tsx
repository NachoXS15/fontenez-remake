import Layout from "@/components/Layout";
 
export default function About() {
    return (
        <Layout>
            <section className="w-full h-150 flex gap-1 overflow-hidden">
                <div className="flex flex-col gap-1 w-2/5">
                    <div className="flex gap-1 h-1/2">
                        <div
                            className="w-1/2 h-full bg-center bg-cover transition-transform duration-700 overflow-hidden"
                            style={{ backgroundImage: `url(/assets/banners/banner1.jpg)` }}
                        />
                        <div
                            className="w-1/2 h-full bg-center bg-cover transition-transform duration-700 overflow-hidden"
                            style={{ backgroundImage: `url(/assets/banners/banner4.jpg)` }}
                        />
                    </div>
                    <div
                        className="h-1/2 w-full bg-center bg-cover transition-transform duration-700 overflow-hidden"
                        style={{ backgroundImage: `url(/assets/banners/banner3.jpg)` }}
                    />
                </div>
                <div
                    className="w-3/5 h-full bg-center bg-cover transition-transform duration-700 overflow-hidden relative"
                    style={{ backgroundImage: `url(/assets/banners/banner3.jpg)` }}
                >
                    {/* Overlay dorado sutil */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/30" />
                </div>
            </section>
 
            {/* Título Nuestra Historia */}
            <section
                className="w-full py-10 flex flex-col items-center justify-center bg-white relative overflow-hidden"
                style={{ fontFamily: 'jubilat' }}
            >
                {/* Ornamento decorativo arriba */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-16 bg-amber-700/40" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-700 opacity-60">
                        <path d="M12 2L13.5 9H21L15 13.5L17.5 21L12 16.5L6.5 21L9 13.5L3 9H10.5L12 2Z" fill="currentColor" />
                    </svg>
                    <div className="h-px w-16 bg-amber-700/40" />
                </div>
 
                <p
                    className="text-xs tracking-[0.4em] uppercase text-amber-700 mb-3"
                    style={{ fontFamily: 'jubilat', letterSpacing: '0.35em' }}
                >
                    Desde 1924
                </p>
                <h2
                    className="text-5xl md:text-6xl text-center text-blue-900 font-bold"
                    style={{ fontFamily: 'jubilat', letterSpacing: '0.04em', lineHeight: 1.1 }}
                >
                    Nuestra Historia
                </h2>
                <p
                    className="text-lg text-blue-800/60 mt-4 tracking-widest"
                    style={{ fontFamily: 'jubilat' }}
                >
                    Conocé un poco más
                </p>
 
                {/* Ornamento decorativo abajo */}
                <div className="flex items-center gap-4 mt-6">
                    <div className="h-px w-32 bg-blue-900/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-700/50" />
                    <div className="h-px w-32 bg-blue-900/20" />
                </div>
            </section>
 
            {/* Sección Historia - fondo púrpura con clip-path */}
            <section
                className="w-full pb-20 pt-8 px-6 lg:px-28 bg-purplemain flex flex-col items-center"
                style={{
                    fontFamily: 'jubilat',
                    clipPath: 'polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0)',
                }}
            >
                {/* Texto introductorio */}
                <div className="max-w-3xl mx-auto mt-40 text-center">
                    <p className="text-white text-xl lg:text-2xl leading-relaxed tracking-wide">
                        Fonteñez Joyas es una empresa familiar, fundada por Pedro Fonteñez, comenzó
                        abriendo un taller de orfebrería en el año 1924. Un hombre apasionado del arte,
                        y del trabajo, que pudo inculcar ese amor por la platería a sus hijos.
                    </p>
 
                    {/* Divisor ornamental */}
                    <div className="flex items-center justify-center gap-4 my-12">
                        <div className="h-px w-12 bg-white/30" />
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/60">
                            <path d="M12 2L13.5 9H21L15 13.5L17.5 21L12 16.5L6.5 21L9 13.5L3 9H10.5L12 2Z" fill="currentColor" />
                        </svg>
                        <div className="h-px w-12 bg-white/30" />
                    </div>
                </div>
 
                {/* Bloque generacional - dos columnas */}
                <div className="w-full max-w-5xl flex gap-4 h-137.5 mx-auto">
                    <div className="w-1/2 h-full flex flex-col gap-4">
                        <div className="relative bg-white/5 border border-white/10 rounded-sm px-5 py-4 backdrop-blur-sm">
                            {/* Comilla decorativa */}
                            <span className="absolute -top-4 left-4 text-5xl text-amber-400/30 font-serif leading-none select-none"></span>
                            <p className="text-white text-sm md:text-base leading-relaxed relative z-10">
                                En la línea generacional, es Domingo Fonteñez quien continúa con su oficio,
                                honrando el trabajo de su padre.
                            </p>
                        </div>
                        <div
                            className="flex-1 bg-center bg-cover rounded-sm overflow-hidden"
                            style={{ backgroundImage: `url(/assets/banners/banner1.jpg)` }}
                        />
                    </div>
 
                    <div
                        className="w-1/2 h-full bg-cover bg-center rounded-sm overflow-hidden"
                        style={{ backgroundImage: `url(/assets/banners/banner6.jpg)` }}
                    />
                </div>
 
                {/* Bloque final con imagen de fondo */}
                <div className="w-full max-w-5xl mx-auto mt-6">
                    <div
                        className="w-full h-80 flex items-end bg-center bg-cover rounded-sm overflow-hidden relative"
                        style={{ backgroundImage: `url(/assets/banners/banner7.jpg)` }}
                    >
                        {/* Overlay degradado desde abajo */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="relative z-10 px-8 py-7 w-full">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-px w-8 bg-amber-400/60" />
                                <div className="w-1 h-1 rounded-full bg-amber-400/60" />
                            </div>
                            <p className="text-white text-lg md:text-2xl leading-snug max-w-2xl" style={{ fontFamily: 'jubilat' }}>
                                El mismo enseña a su hijo Pedro, el cual sigue sus pasos creando, innovando,
                                y trabajando con pasión y dedicación para continuar esa línea de plateros-orfebres.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}