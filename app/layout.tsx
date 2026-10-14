// app/layout.tsx
import { Fredoka, Caveat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

// 1. Display / Headline Font
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['400', '600', '700'],
  display: 'swap',
});

// 2. Handwritten / Cursive Overlay Font
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
  display: 'swap',
});

// 3. Clean Body & Interface Font
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${caveat.variable} ${jakarta.variable}`}
    >
      <body className="bg-bg-dark text-text-primary font-sans antialiased selection:bg-accent-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}