import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png'

type Props = {
    item: Level,
}

export const GridItem = ({ item }: Props)=> {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30"></img>}
                {item.icon === 'down' && <img src={downImage} alt="" width="30"></img>}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                IMC está entre <b>{item.imc[0]}</b> e <b>{item.imc[1]}</b>
                </>
            </div>
        </div>
    );
}