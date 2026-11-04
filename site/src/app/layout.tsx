import type { Metadata } from 'next';
import '@/styles/globals.scss';
import Navigation from '@/components/layout/Navigation';
import SmoothScroll from '@/components/layout/SmoothScroll';

export const metadata: Metadata = {
  title: 'Arun Sanyasi — Engineer, Creator, Entrepreneur',
  description:
    'Instrumentation and Control Engineer based in Bhutan. Automation, content creation, and entrepreneurial services.',
  metadataBase: new URL('https://arunsanyasi2786.github.io'),
  openGraph: {
    title: 'Arun Sanyasi — Engineer, Creator, Entrepreneur',
    description:
      'Instrumentation and Control Engineer based in Bhutan. Automation, content creation, and entrepreneurial services.',
    url: 'https://arunsanyasi2786.github.io/arun-portfolio',
    siteName: 'Arun Sanyasi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Sanyasi — Engineer, Creator, Entrepreneur',
    description:
      'Instrumentation and Control Engineer based in Bhutan. Automation, content creation, and entrepreneurial services.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#060606" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Arun Sanyasi',
              jobTitle: 'Instrumentation & Control Engineer',
              url: 'https://arunsanyasi2786.github.io/arun-portfolio',
              sameAs: [
                'https://github.com/ArunSanyasi2786',
                'https://www.linkedin.com/in/arun-sanyasi-469ba8272/',
                'https://www.youtube.com/@aaronZ-z8k',
                'https://www.instagram.com/man_on_a_protocol/',
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'College of Science and Technology, Royal University of Bhutan',
              },
              knowsAbout: [
                'PLC Programming',
                'SCADA',
                'Industrial Automation',
                'Video Editing',
                'Content Creation',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BT',
              },
            }),
          }}
        />
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
