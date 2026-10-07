import './globals.css';

export const metadata = {
  title: 'ILAC | Global Settlement Platform',
  description: 'Global settlement platform by ILAC.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Black+Han+Sans&family=DM+Mono&family=Jost:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Serif+KR:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
