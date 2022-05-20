interface ControlProps {
  getGif: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function Control({ getGif, handleChange, handleSubmit }: ControlProps) {
  return (
    <div className='grid gap-4 border-t-2 p-4'>
      <button
        className='rounded-md bg-red-400 px-4 py-2 transition hover:brightness-110
                   focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2'
        type='button'
        onClick={getGif}
      >
        New Gif
      </button>
      <div className='w-full'>
        <form
          className='grid grid-rows-main gap-4 sm:grid-cols-form'
          onSubmit={handleSubmit}
        >
          <input
            className='rounded-md border-2 border-pink-400 p-2 text-black 
                       transition focus:outline-none sm:p-[unset] sm:px-2.5'
            type='text'
            name='query'
            id='query'
            placeholder='Search a gif'
            onChange={handleChange}
          />
          <button
            className='rounded-md bg-blue-400 px-4 py-2 transition hover:brightness-110
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
