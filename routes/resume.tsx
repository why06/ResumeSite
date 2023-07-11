import { Head } from "$fresh/runtime.ts";

const TitleCard = () => (
  <div>
    <h2 class="text-xl">Full Stack Software Engineer</h2>
    <h4>Experience: 4 years</h4>
    <h4>Relevant Skills:</h4>
    <p>Javascript, React, Git,</p>
    <h4>Additional Skills:</h4>
    <p>C++, Microservices, AWS Deployment, etc.</p>
  </div>
);

const ProfileCard = () => (
  <div class="bg-gray-200 p-2 w-64 flex justify-center flex-wrap">
    <div class="justify-self-center bg-white w-full">
      <img
        src="/DrMario64.webp"
        class="h-64 w-48 object-cover object-top"
      />
    </div>
    <h4 class="w-full">Shaun J. Carter</h4>
    <div class="justify-left">
      <a
        href="https://www.google.com/maps/search/?api=1&query=7042+Westerly+Winds+Rd,+Knoxville,+TN+37931"
        class="font-bold"
      >
        7042 Westerly Winds Rd
      </a>
      <p class="text-xs text-gray-600">
        7042 Westerly Winds Rd, Knoxville, TN 37931
      </p>
    </div>
  </div>
);

const Resume = () => (
  <>
    <Head>
      <title>Shaun J. Carter</title>
      <meta name="keywords" content="shaun carter resume software engineer" />
    </Head>
    <body>
      <div class={"flex"}>
        <ProfileCard />
        <TitleCard />
      </div>
    </body>
  </>
);

export default Resume;
