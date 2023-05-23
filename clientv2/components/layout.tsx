import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header viewport={768} />
      {children}
      <footer style={{ height: 200 }}>FOOTER</footer>
    </>
  );
};

export default Layout;
