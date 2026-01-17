/* eslint-disable @next/next/no-img-element */
export default function HeroIllustration() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-end justify-center">
            <img
                src="/hero-background.png"
                alt="Car and Hills Background"
                className="w-full h-auto object-cover opacity-20 invert mix-blend-lighten"
                style={{
                    maxWidth: '100%',
                    maskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
                }}
            />
        </div>
    );
}
