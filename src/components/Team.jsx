"use client"
import React from 'react'
import TeamCard from './TeamCard'
import Line from './Line'
import { teamDetails } from '@/data/TeamData'
import NoImage from '@/assets/images/no-img.jpeg'

const Team = () => {
  return (
    <div className=' max-w-[90vw] mx-auto text-center mt-4'>
        <div className="relative">
            <h3 className="text-2xl font-bold font-serif">Our Team</h3>
            <Line leftPosition={'xl:left-[39rem]'} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 place-items-center justify-center my-20">
            {
                teamDetails.map((team)=>(
                    <TeamCard key={team.id} teamQualification={team.teamQualification} teamPosition={team.teamPosition} teamImage={team.teamImage === null ? NoImage : team.teamImage} teamName={team.teamName} linkedIn={team.linkedIn} twitter={team.twitter} facebook={team.facebook} timeDuration={team.id} />
                ))
            }
        </div>
    </div>
  )
}

export default Team