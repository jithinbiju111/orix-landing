import { ImageResponse } from 'next/og';
import { User, Backpack } from 'lucide-react';

export const runtime = 'edge';

export const alt = 'ORIX - Student Ride Sharing';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '40px', marginBottom: '60px' }}>
                    {/* Student with Backpack */}
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <User size={160} strokeWidth={1.5} color="white" />
                        <Backpack size={70} strokeWidth={1.5} color="white" style={{ position: 'absolute', top: '45px', right: '-15px', background: 'black' }} />
                    </div>

                    {/* Car */}
                    {/* Auto Rickshaw (Tuk-Tuk) SVG */}
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* Roof */}
                        <path d="M7 4h10c1.5 0 3 1 3 2.5V9H4V6.5C4 5 5.5 4 7 4z" />
                        {/* Windshield */}
                        <path d="M5 9h14v5H5z" />
                        {/* Body */}
                        <path d="M4 14h16c1.1 0 2 .9 2 2v3H2v-3c0-1.1.9-2 2-2z" />
                        {/* Headlight */}
                        <circle cx="12" cy="17" r="2" />
                        {/* Side Mirrors */}
                        <path d="M22 10v2" />
                        <path d="M2 10v2" />
                        {/* Wheel Hints */}
                        <path d="M5 21h2" />
                        <path d="M17 21h2" />
                    </svg>
                </div>

                <div style={{ fontSize: 100, fontWeight: 900, fontFamily: 'sans-serif', letterSpacing: '-0.05em' }}>
                    ORIX
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
