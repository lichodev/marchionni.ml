export default function Hero() {
    const HeroTitle = ({ children }: { children: string }) => (
        <h1 className={`text-4xl md:text-5xl text-primary-500 font-extrabold`}>
            {children}
        </h1>
    );

    return (
        <section className="bg-slate-200 px-10 lg:px-20 py-10 md:py-20">
            <div className="flex flex-col md:flex-row gap-5 justify-between page-content">
                <div className="flex flex-col flex-wrap justify-center max-w-2xl">
                    <span className="text-2xl md:text-4xl">
                        Nos dedicamos a
                    </span>
                    {/* TODO: Hacer animación para los titulos */}
                    <HeroTitle>Soluciones IT en el Cloud</HeroTitle>
                    {/* <HeroTitle>Soluciones IT On-Premise</HeroTitle> */}
                    {/* <HeroTitle>Soluciones IT Híbridas</HeroTitle> */}
                    <ul className="text-xl md:text-2xl mt-4 list-inside list-disc">
                        <li>Despliegue de sistemas informáticos</li>
                        <li>Diseño de redes de datos</li>
                        <li>Conexiones remotas con VPN</li>
                        <li>Proveedores como AWS y DigitalOcean</li>
                    </ul>
                </div>
                <div className="w-full md:w-[350px] mt-6 md:mt-0">
                    <div className="m-auto rounded-full w-[300px] h-[300px] bg-slate-400"></div>
                </div>
            </div>
        </section>
    );
}
