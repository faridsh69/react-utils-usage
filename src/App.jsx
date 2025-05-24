import { GymApp } from "./components/GymApp";
import { MainApp } from "./stories/extra/MainApp/MainApp";
import { Story } from "./stories/Story";

const App = () => {
  return (
    <>
      <MainApp>
        <GymApp />
        <Story />
      </MainApp>
    </>
  );
};

export default App;
