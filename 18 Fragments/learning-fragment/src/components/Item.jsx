import styles from "./Item.module.css";
const Item = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
