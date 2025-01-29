import React from 'react'
import { Loader, Placeholder } from 'rsuite';

const CustomLoader = () => {
  return (
    <div>
        <Placeholder.Paragraph rows={8}/>
        <Loader center content="Loading"/>
    </div>
  )
}

export default CustomLoader;