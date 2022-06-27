import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TweetTextArea from "../TweetTextArea";
import { tweetsData } from "../TweetsFeed";

test("should change text in the text area", () => {
  const setTweets = jest.fn();

  render(<TweetTextArea tweets={tweetsData} setTweets={setTweets} />);
  const textArea = screen.getByLabelText(/what are you thinking today?/);
  user.type(textArea, "My first tweet");

  expect(textArea).toHaveValue("My first tweet");
  expect(screen.getByRole("textbox")).toHaveValue("My first tweet");
});
