import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const CoursePage = () => {
  const [lectureNumber,setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'ajkldjk',
      title: 'sample',
      description: 'aklkfklldkl',
      video: {
        url: 'jkjjdk',
      },
    },
    {
      _id: 'ajkldjk2',
      title: 'sample2',
      description: 'aklkfklldkl',
      video: {
        url: 'jkjjdk',
      },
    },
    {
      _id: 'ajkldjk3',
      title: 'sample3',
      description: 'aklkfklldkl',
      video: {
        url: 'jkjjdk',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {
          lectures.map((item,index)=>(
            <button onClick={()=>setLectureNumber(index)} key={item._id} style={{
              width:"100%",
              padding:"1rem",
              textAlign:"center",
              margin:0,
              borderBottom: '1px solid rgba(0,0,0,0.2'
            }}>
              <Text noOfLines={1}>
                #{index+1}{item.title}
              </Text>
            </button>
          ))
        }
      </VStack>
    </Grid>
  );
};

export default CoursePage;
