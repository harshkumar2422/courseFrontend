import {
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Stack,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToplaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToplaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch()


  const addToplaylistHandler = (courseId)=>{
    console.log("ADd to playlist", courseId)
  }
  const categories = [
    'WebDevelopment',
    'Artificail intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const {courses,error}  = useSelector(state=>state.course)

  useEffect(() => {
    dispatch(getAllCourses(category,keyword))
    if(error){
      toast.error(error)
      dispatch({type:"clearError"})
    }
  }, [category,keyword, dispatch,error])
  


  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="search Courses..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
       {
        courses.length > 0 ? courses.map((item)=>(
          <Course
          key={item._id}
          title={item.title}
          description={item.description}
          views={item.views}
          imageSrc={item.poster.url}
          id={item._id}
          creator={item.createdBy}
          lectureCount={item.numOfVideos}
          addToplaylistHandler={addToplaylistHandler}
        />
        )): <Heading  mt="4" children="Courses Not Found" />
       }
      </Stack>
    </Container>
  );
};

export default Courses;
