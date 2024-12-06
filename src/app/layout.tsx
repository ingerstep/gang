import { AppLayout, Header, Footer, Preloader } from '@components/AppLayout';
import { interMontserrat } from '@utils/fonts';

import '../styles/index.scss';

export const metadata = {
  title: 'Маркетинговое агентство Gang',
  description: 'Покажем ваш бизнес вашей целевой аудитории. Увеличьте свою прибыль с качественной контекстной рекламой, звоните.',
  keywords: 'маркетинг, маркетинговое агентство, контекстная реклама, настройка контекстной рекламы, реклама',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${interMontserrat.variable}`}>
        <AppLayout>
          <Preloader />
          <Header />
          <div id="content">{children}</div>
          <Footer />
        </AppLayout>
      </body>
    </html>
  );
}
