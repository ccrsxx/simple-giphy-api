import type { IconType } from '../common';

interface InfoIconProps {
  Icon: IconType;
  text: string;
  color: string;
  spin?: boolean;
}

export function InfoIcon({ Icon, text, color, spin }: InfoIconProps) {
  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <i className={`${spin && 'animate-spin'} ${color} text-8xl`}>
        <Icon />
      </i>
      <p className='break-all text-center text-xl text-black'>{text}</p>
    </div>
  );
}
