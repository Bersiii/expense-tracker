import SettingsHeader from "@/components/userUI/SettingsHeader";
import ProfileSettings from "@/components/userUI/ProfileSettings";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import PasswordSettings from "@/components/userUI/PasswordSettings";


 export default async function SettingsPage () {
  const currentUser = await getCurrentUser();

  const user = currentUser
    ? await prisma.user.findUnique({
        where: {
          id: currentUser.userId,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      })
    : null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      

      <div className="mx-auto  max-w-5xl space-y-8">
       
        <ProfileSettings name={user?.name || ""} email={user?.email || ""} />

        <PasswordSettings />
      </div>
    </div>
  );
};


