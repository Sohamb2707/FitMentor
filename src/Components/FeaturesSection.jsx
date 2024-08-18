import { features } from "../constants";

const FeaturesSection = () => {

    const divStyle = {
        color: 'var(--div-color)',
    };
    const spanStyle = {
        color: 'var(--span-color)',
    };
    const pStyle = {
        color: 'var(--anchor-tags)',
    };
    const btn1 = {
        color: 'var(--span-color)',
        background: 'var(--header-bg)',
    };
    const btn2 = {
        background: 'var(--span-color)',
        color: 'var(--page-bg)',
    };

    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className=" rounded-full h-6 text-lg font-medium px-3 py-2 uppercase" style={btn1}>Feature</span>
                <h2 className="text-3xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking-wide" style={divStyle}>
                    Expert Coaching, Customized Plans,
                    <span className="bg-gradient-to {header-bg} text-transparent bg-clip-text" style={spanStyle}>
                        {" "}Real Results
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10  justify-center items-center rounded-full" style={spanStyle}>
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-2 mb-6 text-xl font-medium tracking-wide" style={spanStyle}>{feature.text}</h5>
                                <p className="text-md p-2 mb-20 " style={divStyle}>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturesSection;
