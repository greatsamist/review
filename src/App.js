import Styles from "./App.module.scss";
import Review from "./components/review/Review";

function App() {
  return (
    <div>
      <div className={Styles.header}>
        <h1 className={Styles["header__heading"]}>Our Reviews</h1>
        <div className={Styles["header__underline"]}></div>
      </div>
      <div className={Styles.content}>
        <Review />
      </div>
    </div>
  );
}

export default App;
