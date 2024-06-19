export const metadata = {
  title: "Solving Your Math problem today",
  description: "Open Source Math APP",
};

export default function ServerLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
