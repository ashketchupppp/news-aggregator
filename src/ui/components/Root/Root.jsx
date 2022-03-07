import React from 'react'
import { Card } from '@blueprintjs/core'
import { Flex, Box } from 'reflexbox'

import './Root.scss'

function Root() {
  return (
    <>
        <div className='bp3-dark'>
            <Flex flexWrap='wrap'>
                <Box width={[1, 1/2]}>
                    <Card className='article' />
                </Box>
                <Box width={[1, 1/2]}>
                    <Card className='article' />
                </Box>
            </Flex>
        </div>
    </>
  )
}

export default Root