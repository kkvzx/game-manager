import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QuizApp } from "../QuizApp";
import { StartGameButton } from "../WelcomePage/WelcomePageElements";
import {
  Forms,
  Label,
  QuestionGeneratorWrapper,
  Select,
  Option,
  Submit,
} from "./QuestionGenerator";

const categories: string[] = [
  "General knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals and Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Game",
  "Science and Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
];
const difficulty: string[] = ["any", "easy", "medium", "hard"];

// Choose of the difficulty level and category
const QuestionGenerator = () => {
  const [difficultyLevel, setDifficultyLevel] = React.useState<string>();
  const [qCategory, setQCategory] = React.useState<string>();
  const [startGame, setStartGame] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const startGameToggle = () => {
    setStartGame((prev) => !prev);
  };

  const handleSubmit = (event: any) => {
    startGameToggle();
    event.preventDefault();
  };
  const backToMenu = () => {
    navigate("/");
  };
  return (
    <>
      {startGame ? (
        <QuizApp
          difficultyLevel={difficultyLevel}
          questionsCategory={qCategory}
          startGameToggle={startGameToggle}
        />
      ) : (
        <QuestionGeneratorWrapper>
          <Forms onSubmit={handleSubmit}>
            <Label>
              Choose difficulty level:
              <Select
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
              >
                <Option></Option>
                {difficulty.map((singleOption, index) => (
                  <Option key={nanoid()} value={singleOption}>
                    {singleOption}
                  </Option>
                ))}
              </Select>
            </Label>
            <Label>
              Choose questions category:
              <Select
                value={qCategory}
                onChange={(e) => setQCategory(e.target.value)}
              >
                <Option></Option>
                {categories.map((singleOption, index) => (
                  <Option key={nanoid()} value={index + 9}>
                    {singleOption}
                  </Option>
                ))}
              </Select>
            </Label>
            <Submit type="submit" value="Submit" />
            <StartGameButton onClick={() => backToMenu()}>
              Back to menu
            </StartGameButton>
          </Forms>
        </QuestionGeneratorWrapper>
      )}
    </>
  );
};

export default QuestionGenerator;
