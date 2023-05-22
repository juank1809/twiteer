import { TweetContextProvider } from "@/app/context/TweetContext";
import { Tweet } from "../../features/tweet";
import { tweetsData } from "../../tweetsData";

function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <TweetContextProvider>
      <Tweet tweet={tweetsData[0]} />
    </TweetContextProvider>
  );
}

export default Page;
