import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1 className={Styles["header__heading"]}>Our Reviews</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
    </div>
  );
}

export default App;
