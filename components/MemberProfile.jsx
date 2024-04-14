import { UserButton, auth, currentUser } from '@clerk/nextjs';

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <span>{user.emailAddresses[0].emailAddress}</span>
    </div>
  );
};
export default MemberProfile;
