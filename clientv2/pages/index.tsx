import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div style={{height: 500}} id={"about"}>about</div>
      <div style={{height: 500}} id={"projects"}>project</div>
      <div style={{height: 500}} id={"contact"}>contact</div>
    </>
  );
};

export default Home;
