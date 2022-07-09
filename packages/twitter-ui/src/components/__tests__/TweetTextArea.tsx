import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TweetContextProvider } from "../../context/TweetContext";
import { TweetsFeed } from "../TweetsFeed";
import TweetTextArea from "../TweetTextArea/TweetTextArea";

function renderTweetTextArea() {
  return render(
    <TweetContextProvider>
      <TweetTextArea />
    </TweetContextProvider>
  );
}

const TweetsFeedWithTextArea = () => (
  <TweetContextProvider>
    <div>
      <TweetTextArea />
      <TweetsFeed />
    </div>
  </TweetContextProvider>
);

function renderTweetTextAreaAndTweetsFeed() {
  return render(<TweetsFeedWithTextArea />);
}
test("should change text in the text area", () => {
  renderTweetTextArea();
  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  user.type(textArea, "My first tweet");

  expect(textArea).toHaveValue("My first tweet");
  expect(screen.getByRole("textbox")).toHaveValue("My first tweet");
});

test("should add a tweet from textbox", async () => {
  renderTweetTextAreaAndTweetsFeed();

  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  user.type(textArea, "Tweet from textbox");
  user.click(button);

  await waitFor(() => expect(screen.getAllByTestId("tweet")).toHaveLength(4));
});
