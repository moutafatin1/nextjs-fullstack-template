import { AppRouter } from '@/server/routers';
import { getBaseUrl } from '@/utils/getBaseUrl';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;

    return { url };
  },
  ssr: false,
})(MyApp);
