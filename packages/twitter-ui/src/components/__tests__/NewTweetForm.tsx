import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TweetContextProvider } from "../../context/TweetContext";
import { TweetsFeed } from "../TweetsFeed";
import { NewTweetForm } from "../Form";

function renderNewTweetForm() {
  return render(
    <TweetContextProvider>
      <NewTweetForm />
    </TweetContextProvider>
  );
}

const TweetsFeedWithTextArea = () => (
  <TweetContextProvider>
    <div>
      <NewTweetForm />
      <TweetsFeed />
    </div>
  </TweetContextProvider>
);

function renderNewTweetFormAndTweetsFeed() {
  return render(<TweetsFeedWithTextArea />);
}

test("should change text in the text area", () => {
  renderNewTweetForm();
  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  user.type(textArea, "My first tweet");

  expect(textArea).toHaveValue("My first tweet");
  expect(screen.getByRole("textbox")).toHaveValue("My first tweet");
});

test("should add a tweet from textbox", async () => {
  renderNewTweetFormAndTweetsFeed();

  const textArea = screen.getByLabelText(/what are you thinking today?/i);
  const button = screen.getByRole("button", {
    name: /tweet/i,
  });

  user.type(textArea, "Tweet from textbox");
  user.click(button);

  await waitFor(() => expect(screen.getAllByTestId("tweet")).toHaveLength(4));
});
