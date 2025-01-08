import Link from "next/link";

const FloatingButton = () => {
    return (
        <Link href="/get-quote"
            className="fixed right-0 top-[45%] -translate-y-1/2 z-50 
                transform transition-all duration-300
                bg-logoColor text-white 
                shadow-lg group overflow-hidden
                before:absolute before:inset-0 
                before:bg-black/10 before:translate-x-[100%]
                hover:before:translate-x-0 before:transition-transform
                before:duration-300"
            style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
            }}
        >
            <div className="relative flex flex-col items-center py-6 px-2 space-y-2 
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                after:w-8 after:h-[2px] after:bg-white/0
                after:transition-all after:duration-300
                group-hover:after:bg-white/50">
                <span className="relative z-10 font-medium tracking-wide transition-all duration-300 
                    group-hover:-translate-y-1 group-hover:text-white">
                    Get Quote
                </span>
              
            </div>
        </Link>
    );
};

export default FloatingButton;