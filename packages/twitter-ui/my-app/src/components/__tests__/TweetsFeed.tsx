import { render, screen } from "@testing-library/react";
import TweetsFeed from "../TweetsFeed";

test("should render a list of tweets", () => {
  const props = [
    {
      user: {
        fullName: "Christoper Francisco",
        username: "christopher",
      },
      message: "I like coding",
      favoriteCount: 3,
      replyCount: 2,
      retweetCount: 1,
    },
    {
      user: {
        fullName: "Jaun García",
        username: "juank",
      },
      message: "I like coding",
      favoriteCount: 3,
      replyCount: 2,
      retweetCount: 1,
    },
    {
      user: {
        fullName: "Daniel Fernando",
        username: "dani",
      },
      message: "I like coding",
      favoriteCount: 3,
      replyCount: 2,
      retweetCount: 1,
    },
  ];
  render(<TweetsFeed tweets={props} />);

  const tweets = screen.getAllByTestId("tweet");

  expect(tweets).toHaveLength(3);
});
