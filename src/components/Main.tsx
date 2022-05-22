interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main
      className='grid min-h-[500px] w-[90vw] grid-rows-main gap-2 rounded-xl bg-white px-6 py-4
                 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:max-w-md'
    >
      {children}
    </main>
  );
}
