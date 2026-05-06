// import DashboardPage from "./dashboard/page";
// import PostsPage from "./posts/page";

import Skills from "./about/page";
import Contact from "./contact/page";
import Dashboard from "./portfolio/page";
import Projetcs from "./projects/page";

// import UsersPage from "./users/page";

const page = () => {
  return (
    <div className="overflow-y-auto">
      {/* <PostsPage /> */}
      {/* <DashboardPage /> */}
      {/* <UsersPage /> */}
      <Dashboard />
      <Projetcs />
      <Skills />
      <Contact />
    </div>
  );
};

export default page;
