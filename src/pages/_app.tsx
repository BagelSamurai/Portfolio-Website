import SizeIndicator from '@/components/SizeIndicator';
import { Provider } from '@/components/ui/provider';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Starfield from 'react-starfield';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
      <Starfield
        starCount={300}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
    </Provider>
  );
}
