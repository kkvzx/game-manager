import React from "react";
import "../GlobalStyling.css";
import { QuizApp } from "../QuizApp/index";
import QuestionGenerator from "../QuestionGenerator";
import { WelcomePage } from "../WelcomePage";
import { AppWrapper, AppSection } from "./AppElements";

// Main file
export const Fungenerator = () => {
  const [start, setStart] = React.useState(false);
  const [difficultyLevel, setDifficultyLevel] = React.useState<string>();
  const [qCategory, setQCategory] = React.useState<number>();

  const startToggle = () => {
    setStart((prev) => !prev);
  };
  const toggleDifficulty = (difficulty: string) => {
    setDifficultyLevel(difficulty);
  };
  const toggleCategory = (category: number) => {
    setQCategory(category);
  };

  return (
    <AppWrapper>
      <AppSection>
        {start ? (
          <QuestionGenerator />
        ) : (
          <WelcomePage startToggle={startToggle} />
        )}
      </AppSection>
    </AppWrapper>
  );
};
