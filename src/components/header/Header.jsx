import HeaderStyles from "./Header.module.scss";
const Header = ({ categories, text, setCategory }) => {
  return (
    <div className={HeaderStyles.header}>
      <h1>{text} </h1>
      <div className={HeaderStyles.btns}>
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)}>
            {" "}
            {item}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
