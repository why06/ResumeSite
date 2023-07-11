import { Head } from "$fresh/runtime.ts";
import TitleCard from "./components/TitleCard.tsx";
import ProfileCard from "./components/ProfileCard.tsx";

const Resume = () => (
  <>
    <Head>
      <title>Shaun J. Carter</title>
      <meta name="keywords" content="shaun carter resume software engineer" />
    </Head>
    <body>
      <div class={"flex flex-wrap"}>
        <ProfileCard />
        <TitleCard />
        <div class="h-96 w-full bg-gray-200 m-2">Job History</div>
        <div class="h-96 w-full bg-gray-200 m-2">Education</div>
        <div class="h-48 w-full bg-gray-200 m-2">Hobbies & Interests</div>
      </div>
    </body>
  </>
);

export default Resume;
