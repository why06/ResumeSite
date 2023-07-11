import { asset, Head } from "$fresh/runtime.ts";
import TitleCard from "./components/TitleCard.tsx";
import ProfileCard from "./components/ProfileCard.tsx";

const Resume = () => (
  <>
    <Head>
      <title>Shaun J. Carter</title>
      <meta name="keywords" content="shaun carter resume software engineer" />
      <link rel="stylesheet" href={asset("index.css")} />
    </Head>
    <body>
      <div
        class={`flex flex-wrap relative height-adjustment`}
      >
        <div
          class={"sm:w-64 sm:fixed sm:top-0 sm:right-0 sm:border sm:m-2 sm:h-3/4 border-black sm:border sm:rounded-md overflow-hidden"}
        >
          <ProfileCard />
        </div>
        <div class={"flex w-full sm:m-2 sm:h-1/4"}>
          <TitleCard />
          {/** spacer for profile card */}
          <div class={"sm:inline hidden w-64 h-full ml-2"} />
        </div>
        <div class={"flex w-full sm:h-1/2 sm:m-2 sm:mt-0"}>
          <div class="h-full flex-1 bg-gray-200 p-2">Job History</div>
          {/** spacer for profile card */}
          <div class={"sm:inline hidden w-64 h-full ml-2"} />
        </div>
        <div class="h-96 w-full bg-gray-200 m-2">Education</div>
        <div class="h-48 w-full bg-gray-200 m-2">Hobbies & Interests</div>
      </div>
    </body>
  </>
);

export default Resume;
