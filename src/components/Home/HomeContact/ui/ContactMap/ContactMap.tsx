import styles from './ContactMap.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import location from '@assets/img/location.svg';

export const ContactMap = () => {
    const defaultState = {
        center: [55.97645779415183, 92.85604814418026],
        zoom: 18,
    };

    return (
        <YMaps>
            <Map className={styles.map} defaultState={defaultState} options={{}}>
                <Placemark
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: location.src,
                        iconImageSize: [44, 44],
                        iconImageOffset: [-20, -40],
                    }}
                    geometry={[55.97644049869498,92.85602132209013]}
                />
            </Map>
        </YMaps>
    )
}
