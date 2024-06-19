import RootLayout from "../components/Rootlayout";
import ServerLayout from "../components/Serverlayout";

export default function Layout({ children }) {
  return (
    <ServerLayout>
      <RootLayout>{children}</RootLayout>
    </ServerLayout>
  );
}
