import { render, screen } from "@testing-library/react";
import Tweet, { TweetProps } from "../Tweet";
import getUserInitials from "../utils/getUserInitials";
import { TweetContextProvider } from "../../context/TweetContext";

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
};

function renderTweet() {
  return render(
    <TweetContextProvider>
      <Tweet {...props} />
    </TweetContextProvider>
  );
}

test("should render a tweet with mock data", () => {
  renderTweet();
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
