import SettingsHeader from "@/components/userUI/SettingsHeader";
import ProfileSettings from "@/components/userUI/ProfileSettings";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

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
      <SettingsHeader />

      <div className="mx-auto mt-8 max-w-5xl space-y-8">
        {/* ================= PROFILE ================= */}
        <ProfileSettings name={user?.name || ""} email={user?.email || ""} />

        {/* ================= APPEARANCE ================= */}
      </div>
    </div>
  );
};


