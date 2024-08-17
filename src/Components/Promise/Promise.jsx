import styles from "./Promise.module.css";
import img from '../../assets/second-img.jpg';

const Promise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>
          O pack para Terapeutas veio para facilitar na hora de criar suas artes.
        </h1>
        <ul>
          <li>
            <p>Para todos os Terapeutas e Oraculistas que busca qualidade em artes prontas criativas para o seu negócio.</p>
          </li>
          <li>
            <p>Não sabe como criar as artes? Ou até mesmo não tem tempo de fazer suas artes para postar nas suas redes sociais?</p>
          </li>
          <li>
            <p>Com o Canva para Terapeutas você vai ter conteúdo de alto nível para aproveitar ao máximo mesmo não sabendo usar o Aplicativo Canva.</p>
          </li>
          <li>
            <p>Confira abaixo as principais Vantagens!</p>
          </li>
        </ul>
      </div>
      <div>
        <img src={img} />
        </div>
    </div>
  );
};

export default Promise;
