import PortfolioProvider from "../contexts/PortfolioContext";
import "../styles/globals.css";
import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";

export default function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <NavComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </PortfolioProvider>
  );
}
