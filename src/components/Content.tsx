import { InfoIcon } from './InfoIcon';
import { VscLoading, VscWarning } from '../common';

interface ImageContainerProps {
  currentQuery: string;
  isLoaded: boolean;
  isFetching: boolean;
  imageKey: number;
  title?: string;
  url?: string;
}

export function Content({
  currentQuery,
  isLoaded,
  isFetching,
  imageKey,
  title,
  url
}: ImageContainerProps) {
  return (
    <div
      className='flex animate-fade-in flex-col items-center justify-center'
      key={imageKey}
    >
      {isFetching ? (
        <InfoIcon
          Icon={VscLoading}
          text={`Searching for ${!currentQuery ? 'cats' : currentQuery}...`}
          color='text-pink-400'
          spin
        />
      ) : !isLoaded ? (
        <InfoIcon
          Icon={VscWarning}
          text={`No GIF found for ${!currentQuery ? 'cats' : currentQuery}!`}
          color='text-pink-400'
        />
      ) : null}
      <div
        className={`${
          isLoaded && !isFetching ? 'flex' : 'hidden'
        } animate-fade-in flex-col items-center gap-4`}
      >
        <a
          className='transition focus:rounded-md focus:outline-none focus:ring-2
                   focus:ring-green-400 focus:ring-offset-2'
          href={url}
        >
          <img
            className='max-h-52 max-w-full rounded-md sm:max-h-64'
            src={url}
            alt={title}
          />
        </a>
        <div className='text-center text-sm'>
          <p className='rounded-md bg-pink-400 p-1'>{title}</p>
        </div>
      </div>
    </div>
  );
}
