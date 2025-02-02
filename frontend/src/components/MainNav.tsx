import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
        {
          isAuthenticated ? (
            <UsernameMenu />
          ) : (
            <Button 
            className="font-bold hover:text-orange-500 hover:bg-white" 
            onClick={async () => await loginWithRedirect()}
            variant={"ghost"} 
            >
                Login
            </Button>
          )
        }
    </span>
  )
}

export default MainNav