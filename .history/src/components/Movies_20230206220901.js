import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
        <Container>
        <h4> RECOMMENDED FOR YOU </h4>
            <Content>
                 <Wrap>
                    <img src='https://www.shutterstock.com/image-vector/tatto-mask-black-panther-art-600w-2175451655.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='https://www.shutterstock.com/image-vector/tatto-mask-black-panther-art-600w-2175451655.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='https://www.shutterstock.com/image-vector/tatto-mask-black-panther-art-600w-2175451655.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='https://www.shutterstock.com/image-vector/tatto-mask-black-panther-art-600w-2175451655.jpg'/>
                </Wrap>
            </Content>
        </Container>
  )
}

export default Movies
const Container = styled.div`


`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns:repeat(4, minmax(0,1fr)); 

`

const Wrap= styled.div`
    border-radius: 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`