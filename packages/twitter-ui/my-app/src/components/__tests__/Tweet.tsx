import { render, screen, waitFor } from "@testing-library/react";
import Tweet, { TweetProps } from "../Tweet";
import getUserInitials from "../utils/getUserInitials";
import user from "@testing-library/user-event";

const props: TweetProps = {
  tweet: {
    id: 1,
    user: {
      fullName: "Christoper Francisco",
      username: "@christopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
  },
  tweets: [
    {
      id: 1,
      user: {
        fullName: "Christoper Francisco",
        username: "@christopher",
      },
      message: "I like coding",
      favoriteCount: 3,
      replyCount: 2,
      retweetCount: 1,
    },
  ],
  setTweets: jest.fn(),
};

test("should render a tweet with mock data", () => {
  render(<Tweet {...props} />);
  //counts
  expect(screen.getByTitle(/favorite count/)).toBeInTheDocument();
  expect(screen.getByTitle(/reply count/)).toBeInTheDocument();
  expect(screen.getByTitle(/retweet count/)).toBeInTheDocument();

  //user info
  expect(screen.getByText(props.tweet.user.username)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

  expect(screen.getByText(props.tweet.message)).toBeInTheDocument();

  //This acts as our user image for now.
  expect(screen.getByRole("figure")).toBeInTheDocument();

  expect(
    screen.getByText(getUserInitials(props.tweet.user.fullName))
  ).toBeInTheDocument();
});

test("should aument and decrease favorite count", async () => {
  render(<Tweet {...props} />);

  const favoriteCountButton = screen.getByTitle(/favorite count/);
  user.click(favoriteCountButton);

  await waitFor(() => expect(favoriteCountButton.textContent).toMatch(/4/));

  user.click(favoriteCountButton);

  expect(favoriteCountButton.textContent).toMatch(/3/);
});
