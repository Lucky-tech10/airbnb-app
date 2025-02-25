import { fetchProfileImage } from "@/utils/actions";
import { LuCircleUser } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="profile"
        className="w-6 h-6 object-cover rounded-full"
      />
    );
  }

  return (
    <LuCircleUser className="w-6 h-6 bg-primary rounded-full text-white" />
  );
}
export default UserIcon;
