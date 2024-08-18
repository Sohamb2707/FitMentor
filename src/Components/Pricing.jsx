import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    const titleStyle = {
        color: 'var(--span-color)', // Color for the main title
    };
    const cardStyle = {
        backgroundColor: 'var(--page-bg)', // Background color for pricing cards
        borderColor: 'var(--div-color)', // Border color for pricing cards
        color: 'var(--span-color)', // Text color inside the cards
    };
    const mostPopularStyle = {
        color: 'var(--anchor-tags)', // Text color for "Most Popular"
    };
    const priceStyle = {
        color: 'var(--div-color)', // Color for the price
    };
    const subtextStyle = {
        color: 'var(--anchor-tags)', // Secondary text color
    };
    const featureTextStyle = {
        color: 'var(--div-color)', // Feature list color
    };
    const btnStyle = {
        backgroundColor: 'var(--button2-bg)', // Button background
        color: 'var(--span-color)', // Button text color
    };

    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wide" style={titleStyle}>
                Pricing
            </h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border rounded-xl" style={cardStyle}>
                            <div className="text-4xl mb-8">
                                <p>
                                    {option.title}
                                    {option.title === "Pro" && (
                                        <span className="text-xl mb-4 ml-2" style={mostPopularStyle}>
                                            (Most Popular)
                                        </span>
                                    )}
                                </p>
                                <p className="mb-8">
                                    <span className="text-4xl mt-6 mr-2" style={priceStyle}>{option.price}</span>
                                    <span className="tracking-tight" style={subtextStyle}>/Month</span>
                                </p>
                                <ul>
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-8 flex items-center" style={featureTextStyle}>
                                            {feature.trim() !== "" && <CheckCircle2 />}
                                            <span className="ml-2 text-2xl">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl rounded-lg transition duration-200" style={btnStyle}>
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
