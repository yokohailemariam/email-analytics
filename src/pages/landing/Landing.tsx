import { EmailSyncLoader } from "@/components/EmailSync";
import { useGetEmailSync } from "@/hooks/use-email-sync";

function Landing() {
  // const checkAuthentication = useAuthStore(
  //   (state) => state.checkAuthentication
  // );
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // useEffect(() => {
  //   checkAuthentication();
  //   console.log(
  //     isAuthenticated ? "User is authenticated" : "User is not authenticated"
  //   );
  // }, [checkAuthentication, isAuthenticated]);

  const { isLoading } = useGetEmailSync();

  return <EmailSyncLoader isLoading={isLoading} />;
}

export default Landing;
