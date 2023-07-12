const ProfileCard = () => (
  <div class="bg-gray-200 p-2 w-full sm:h-full flex justify-left flex-wrap">
    <div class="flex justify-center w-full mb-4">
      <img
        src="/DrMario64.webp"
        class="h-64 w-48 object-cover object-top bg-white drop-shadow-lg rounded-md"
      />
    </div>
    <h4 class="w-full text-2xl">Shaun J. Carter</h4>
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

export default ProfileCard;
