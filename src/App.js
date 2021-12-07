import React from "react";
import Main from "./components/Main/Main";
import Wrapper from "./components/UI/Wrapper";
import HeroSection from "./components/HeroSection/HeroSection";
import FormSection from "./components/FormSection/FormSection";
import css from './App.module.css';

const App = () => {
  return (
    <Main>
      <Wrapper Style={css.Display}>
        <HeroSection />
        <FormSection />
      </Wrapper>
    </Main>
  );
}

export default App;
