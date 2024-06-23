import RootLayout from "../components/Rootlayout";// import the server layout
import ServerLayout from "../components/Serverlayout";

export default function Layout({ children }) {
  return (
    <ServerLayout>
      <RootLayout>{children}</RootLayout>
    </ServerLayout> // nested Layout
  );
}
