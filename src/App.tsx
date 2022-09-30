import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png'
import { GridItem } from './components/GridItem';
import { levels, calculateImc, Level } from './helpers/imc';
import leftArrowImage from './assets/leftarrow.png'

const App = ()=> {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else {
      alert("Digite todos os campos")
    }
  }

  const hanldeBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Imagem logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.</p>

          <input 
          type="number" 
          placeholder="Digite a sua altura. Ex 1.5 (em metros)"
          value={heightField > 0 ? heightField : ""}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <input 
          type="number" 
          placeholder="Digite a seu peso. Ex 75.3 (em kg)"
          value={weightField > 0 ? weightField : ""}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item,key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={hanldeBackButton}>
                <img src={leftArrowImage} alt="Botão para retornar" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;