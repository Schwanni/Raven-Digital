import React from 'react'
import FlipCard from './FlipCard';

const FlipCardList = ({FlipCards}) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-20">
        {FlipCards.map(flipcard => {
            return <FlipCard flipcard={flipcard} key={flipcard.id} /> 
        })}
    </div>
  )
}

export default FlipCardList
