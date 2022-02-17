import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { toolPages } from './Pages'
import { Home } from './Pages/Home'
import { Sidebar } from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <Flex w="full" h="full">
      <Sidebar links={toolPages} />
      <Container maxW="8xl" p="12">
        <Routes>
          <Route path={'/'} element={<Home toolPages={toolPages} />} />
          {toolPages.map((page) => (
            <Route
              path={page.path}
              element={<page.Component />}
              key={page.path}
            />
          ))}
        </Routes>
      </Container>
    </Flex>
  )
}

export default App
