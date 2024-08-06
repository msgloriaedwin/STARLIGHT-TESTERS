import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import React from 'react'
import f1stTropy from '@/public/1st-tropy.svg';
import secondTropy from '@/public/2nd-tropy.svg';
import thirdTropy from '@/public/3rd-tropy.svg';
import Image from 'next/image';


type  XpRanking={
    rank: number;
    xp: number;
    name: string;
    avatarUrl: string;
  }

export function Leaderboard({xpRankings}: {xpRankings: XpRanking[]}) {
  const toppers= xpRankings.slice(0, 3);
    const rest = xpRankings.slice(3);
    
    return (
    <div className=' flex flex-col gap-2 justify-center  items-center '>
        <h1>Leaderboard</h1>
        <div className=' flex flex-col gap-10 xl:flex-row justify-center items-end relative'>
               {toppers.map((player, index) => (
                <div key={player.rank}
                className={cn(`w-[382px] relative p-6 flex flex-col items-center justify-center 
                gap-3 rounded-xl bg-primary-A-200  border-l-[3px] border-primary-A-500 
                border-b-[3px]`,
               player.rank === 1 ? '  xl:min-w-[300px] xl:order-2' : ' xl:w-[272px]',
               player.rank === 2 && ' xl:order-1    bottom-0',
               player.rank === 3 && 'xl:order-3',
              )}
                >
                  <div
                  className={cn(
                    `leader-sticker absolute w-[120px] h-[120px] z-[99999] bg-primary-B-600 rounded-full 
                    border-2 border-primary-B-401 gap-[10px]
                    -right-[30px] -top-[30px] flex  justify-center items-center
                    `,
                    player.rank==2 && " border-neutral-400 bg-neutral-400 ",
                    player.rank==3 && " border-secondary-B-400 bg-secondary-B-400",
                  )}
                  >
                    {player.rank===1 && (<p className=' text-[60px] text-primary-B-200 font-bold'>{player.rank}st</p>)}
                    {player.rank===2 && (<p className=' text-[60px] font-bold text-neutral-700-200 '>{player.rank}nd</p>)}
                    {player.rank===3 && (<p className=' text-[60px] font-bold text-primary-B-800'>{player.rank}rd</p>)}

                    </div>
                    <Avatar className={cn(
                      player.rank === 1 ? 'w-[224px] h-[224px] ' : 'w-[160px] h-[160px]',
                  
                    )} >
                      <AvatarImage 
                      src={player.avatarUrl}
                       alt={player.name} 
                       />
                       <AvatarFallback>{player.name}</AvatarFallback>
                    </Avatar >
                    <p className=' text-primary-A-600 text-small'>{player.name}</p>
                    
                    <p className=' text-[50px] text-primary-A-800 font-normal'>{player.xp}xp</p>

                    <Image src={index === 0 ? f1stTropy : index === 1 ? secondTropy : thirdTropy} alt='trophy' />
                </div>
               ))}     
        </div>

       {rest && <div  className=' flex  flex-wrap justify-center 3 gap-3' >
              {rest.map((player, index) => (
                  <div key={player.rank}
                  className='w-[382px] border-[3px] rounded-md  md:w-[411px] flex
                   justify-between items-center
                  border-l-primary-A-500 border-b-primary-A-500
                  bg-primary-A-200  p-4 gap-3              
                  '
                  >
                   <div className='flex gap-5 justify-center items-center'>
                    <Image src={player.avatarUrl}
                     width={60}
                     height={60}
                     className='h-[66px] w-[66px] rounded-md'
                     alt='player avatar'/>
                   <span className=' line-clamp-1 text-primary-A-600'>{player.name}</span>
                    </div> 

                    <div
                    className='flex p-2 justify-end items-center rounded-md
                    gap-2 bg-primary-A-300 border-[1px] border-primary-A-800   text-primary-A-800
                    '
                    >
                      <p className='flex gap-2'><span className=' text-small'>{player.xp}</span>xp</p>
                      <div className=' w-[44px] h-[44px] p-4 flex justify-center items-center  rounded-full bg-white border-2 border-primary-A-800'>
                        {player.rank}th
                      </div>
                    </div>
                  </div>
              ))}
        </div>}
    </div>
  )
}
