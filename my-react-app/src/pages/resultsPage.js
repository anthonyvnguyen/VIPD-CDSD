import React, { useState } from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Code,
  Grid,
  GridItem,
  Image,
  Input,
  Wrap,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  Radio,
  Center,
  Square,
  Circle,
  StackDivider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { theme }from '../components/themeFile.js';




const Results = () => {

  //this.state = {_button : <Button isLoading loadingText='loading' colorScheme='teal'></Button>};


const [incomeSliderValue, setIncomeSliderValue] = useState(50)

const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}

const [alc, setAlc] = React.useState(0)
const handleAlc = (alc) => setAlc(alc)

const [ageSliderValue, setAgeSliderValue] = useState(50);

const [showLoader, setShowLoader] = useState(false);




	return (
    <ChakraProvider name="results" theme={theme} >
      <VStack spacing='10' bg="brand.200">
        <Box>
          <Heading align="center" size='lg'>Here Are Your Results</Heading>
          <Heading align="center" size='2xl'>Analyze Your Risk of Diabetes</Heading>
        </Box>

        

        <VStack bg='brand.100' borderWidth='50px' rounded='lg' borderColor='brand.100' spacingY='8px' divider={<StackDivider borderColor='brand.200'/>}>
            
        <Circle size='300px' bg='tomato' color='white' fontSize='9xl'>
            {riskPrediction}
        </Circle>

        </VStack> {/* END OF QUESTIONS */}




      </VStack>
    </ChakraProvider>
	)
};
    
export default Results;



