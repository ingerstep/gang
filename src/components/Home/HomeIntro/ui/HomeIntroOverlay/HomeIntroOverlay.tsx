import { EColor, Typography } from '@ui/Typography';
import { Container } from '@ui/Container';
import { Button } from '@ui/Button';
import gsap from 'gsap';
import styles from './styles.module.scss';

enum SERVICE_TYPE {
  MARKETING = 'marketing',
  WEB = 'web',
  COMPLEX = 'complex',
  CONTEXT = 'context',
  TARGET = 'target',
}

export const HomeIntroOverlay = () => {
  const onHover = (type: SERVICE_TYPE) => {
    gsap.to(`#${type}`, {
      color: '#fff',
    });
  };

  const onLeave = (type: SERVICE_TYPE) => {
    gsap.to(`#${type}`, {
      color: '#444',
    });
  };

  return (
    <div id="overlay" className={styles.overlay}>
      <Container>
        <div className={styles.overlay__inner}>
          <div></div>
          <div id="overlay_content" style={{ opacity: 0 }} className={styles.center}>
            <Typography size={120} font="rostov" color={EColor.white}>
              Услуги
            </Typography>
            <div className={styles.column}>
              <div className={styles.overlay__shadow} />
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Дистрибуция
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Аудит
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Позиционирование
                </Typography>
              </div>
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Каналы продвижения
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Анализ конкурентов
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Медиаплан
                </Typography>
              </div>
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Email-маркетинг
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  SWOT
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  STEP
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  4D поле
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Анализ
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  SPACE
                </Typography>
                <Typography id={SERVICE_TYPE.MARKETING} size={14} font="montserrat" color={EColor.black2}>
                  Воронка продаж
                </Typography>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <Typography style={{ textAlign: 'right' }} id={SERVICE_TYPE.WEB} size={14} font="montserrat" color={EColor.black2}>
                    Вёрстка
                  </Typography>
                  <Typography id={SERVICE_TYPE.WEB} size={14} font="montserrat" color={EColor.black2}>
                    Прототип
                  </Typography>
                </div>
                <Button
                  onMouseEnter={() => onHover(SERVICE_TYPE.MARKETING)}
                  onMouseLeave={() => onLeave(SERVICE_TYPE.MARKETING)}
                  typography={{ size: 20 }}
                  mode="black"
                >
                  Маркетинговая стратегия
                </Button>
                <div className={styles.column}>
                  <div className={styles.row} style={{ justifyContent: 'flex-start' }}>
                    <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                      Аудит
                    </Typography>
                    <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                      СММ
                    </Typography>
                  </div>
                  <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                    Диаграмма Ганта
                  </Typography>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <Typography id={SERVICE_TYPE.WEB} size={14} font="montserrat" color={EColor.black2}>
                    Интерфейсы
                  </Typography>
                  <Typography id={SERVICE_TYPE.WEB} size={14} font="montserrat" color={EColor.black2}>
                    Архитектура
                  </Typography>
                </div>
                <Button onMouseEnter={() => onHover(SERVICE_TYPE.WEB)} onMouseLeave={() => onLeave(SERVICE_TYPE.WEB)} typography={{ size: 20 }} mode="black">
                  Веб-разработка
                </Button>
                <Button
                  onMouseEnter={() => onHover(SERVICE_TYPE.COMPLEX)}
                  onMouseLeave={() => onLeave(SERVICE_TYPE.COMPLEX)}
                  typography={{ size: 20 }}
                  mode="black"
                >
                  Комплекс
                </Button>
                <div className={styles.column}>
                  <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                    Контент план
                  </Typography>
                  <div className={styles.row}>
                    <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                      CRM
                    </Typography>
                    <Typography id={SERVICE_TYPE.COMPLEX} size={14} font="montserrat" color={EColor.black2}>
                      Call tracking
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <Typography style={{ textAlign: 'right' }} id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                    Продвижение
                  </Typography>
                  <div className={styles.row}>
                    <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                      Лиды
                    </Typography>
                    <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                      Подписка
                    </Typography>
                  </div>
                </div>
                <Button
                  onMouseEnter={() => onHover(SERVICE_TYPE.TARGET)}
                  onMouseLeave={() => onLeave(SERVICE_TYPE.TARGET)}
                  typography={{ size: 20 }}
                  mode="black"
                >
                  Таргет
                </Button>
                <Button
                  onMouseEnter={() => onHover(SERVICE_TYPE.CONTEXT)}
                  onMouseLeave={() => onLeave(SERVICE_TYPE.CONTEXT)}
                  typography={{ size: 20 }}
                  mode="black"
                >
                  Контекст
                </Button>
                <div className={styles.column}>
                  <div className={styles.row}>
                    <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                      Ретаргетинг
                    </Typography>
                    <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                      Трафик
                    </Typography>
                  </div>
                  <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                    Вовлеченность
                  </Typography>
                </div>
              </div>
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Охваты
                </Typography>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Конверсия
                </Typography>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Узнаваемость
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Поиск
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  РСЯ
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Конверсия
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Семантика
                </Typography>
              </div>
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Показы
                </Typography>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  CTR
                </Typography>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Заявка
                </Typography>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Переход
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Заявка
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Клик
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Медийная реклама
                </Typography>
              </div>
              <div className={styles.row}>
                <Typography id={SERVICE_TYPE.TARGET} size={14} font="montserrat" color={EColor.black2}>
                  Социальные сети
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Яндекс Директ
                </Typography>
                <Typography id={SERVICE_TYPE.CONTEXT} size={14} font="montserrat" color={EColor.black2}>
                  Атрибутация
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
