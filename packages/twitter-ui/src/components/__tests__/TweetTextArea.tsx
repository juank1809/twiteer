import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TweetContextProvider } from "../../context/TweetContext";
import TweetTextArea from "../TweetTextArea";

function renderTweetTextArea() {
  return render(
    <TweetContextProvider>
      <TweetTextArea />
    </TweetContextProvider>
  );
}
test("should change text in the text area", () => {
  renderTweetTextArea();
  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  user.type(textArea, "My first tweet");

  expect(textArea).toHaveValue("My first tweet");
  expect(screen.getByRole("textbox")).toHaveValue("My first tweet");
});
