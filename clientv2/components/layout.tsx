import Footer from "./Footer";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header viewport={768} />
      {children}
      <Footer>{""}</Footer>
    </>
  );
};

export default Layout;
