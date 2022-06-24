import { render, screen } from "@testing-library/react";
import Tweet, { TweetProps } from "../Tweet";
import getUserInitials from "../utils/getUserInitials";

test("should render a tweet with mock data", () => {
  const props: TweetProps = {
    user: {
      fullName: "Christoper Francisco",
      username: "crhistopher",
    },
    message: "I like coding",
    favoriteCount: 3,
    replyCount: 2,
    retweetCount: 1,
  };
  render(<Tweet {...props} />);
  //counts
  expect(screen.getByTitle(/favorite count/)).toBeInTheDocument();
  expect(screen.getByTitle(/reply count/)).toBeInTheDocument();
  expect(screen.getByTitle(/retweet count/)).toBeInTheDocument();

  //user info
  expect(screen.getByText(props.user.username)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

  expect(screen.getByText(props.message)).toBeInTheDocument();

  //This acts as our user image for now.
  expect(screen.getByRole("figure")).toBeInTheDocument();

  expect(
    screen.getByText(getUserInitials(props.user.fullName))
  ).toBeInTheDocument();
});