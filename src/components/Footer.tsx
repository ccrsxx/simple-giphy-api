export function Footer() {
  return (
    <footer className='mb-6 flex flex-1 items-end text-lg'>
      <p>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>
        with{' '}
        <a
          className='rounded px-0.5 decoration-transparent underline-offset-1
                     transition-all hover:underline hover:decoration-pink-200 
                     focus:outline-none focus:ring-2 focus:ring-white'
          href='https://github.com/ccrsxx'
        >
          ccrsxx
        </a>
      </p>
    </footer>
  );
}
