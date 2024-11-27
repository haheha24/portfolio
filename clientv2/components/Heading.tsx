const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2 className="text-center text-dynamic-3xl bg-purple-primary w-full mb-7 py-2.5 shadow-[0_10px_10px_hsl(216,7%,14%)]">
        {children}
      </h2>
    </>
  );
};

export { H2 };
