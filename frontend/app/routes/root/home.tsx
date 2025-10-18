import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PMHub" }, { name: "description", content: "Home" }];
}

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Button asChild className="bg-blue-500 text-white">
        <Link to="/sign-in">Login</Link>
      </Button>
      <Button variant={"outline"} asChild className="bg-blue-500 text-white">
        <Link to="/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
};

export default HomePage;
