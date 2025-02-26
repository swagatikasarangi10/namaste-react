import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React About Page</h2>
      <User />
      <UserClass name={"swagatika from class"} location={"Odisha class"} />
    </div>
  );
};
export default About;
