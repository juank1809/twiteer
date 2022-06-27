import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TweetTextArea from "../TweetTextArea";

test("should change text in the text area", () => {
  render(<TweetTextArea />);
  const textArea = screen.getByLabelText(/tweet text area/);

  user.type(textArea, "My first tweet");

  expect(textArea).toHaveValue("My first tweet");
  expect(screen.getByRole("textbox")).toHaveValue("My first tweet");
});
