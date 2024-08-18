import styles from "./Guarantee.module.css";
import img from "../../assets/guarantee.png";

const Guarantee = () => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.text_container}>
        <h3>Garantia de Satisfação</h3>
        <h2>Experimente por 7 Dias!</h2>
        <p>
          Ainda está em dúvida? Não se preocupe. Se o conteúdo mencionado não
          corresponder ao que você receber, você tem <span className={styles.hightlight_text}>7 dias de garantia</span>, e
          devolvemos seu dinheiro sem complicações! Além disso, seu acesso à
          plataforma é vitalício, e estamos constantemente adicionando novos
          materiais.
        </p>
      </div>
    </div>
  );
};

export default Guarantee;
