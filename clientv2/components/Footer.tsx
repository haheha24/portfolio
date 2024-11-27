const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <p className="text-center text-dynamic-md bg-purple-primary w-full mt-7 py-2.5 shadow-[0_10px_10px_hsl(216,7%,14%)]">
        COPYRIGHT 2024
      </p>
    </>
  );
};

export default Footer;
