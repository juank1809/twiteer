import { Layout } from "design-system";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div id="modals" />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
