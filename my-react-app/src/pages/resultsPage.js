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
import { useRiskPrediction } from '../context/RiskPredictionContext';



const factors = [
    "Household Income level",
    "Employment Status",
    "Marital Status",
    "Education Level",
    "Alcohol Consumption",
    "Has a Phone",
    "Has Children",
    "Urban or Rural",
    "Own or Rent a Home",
    "Smoker",
    "Divorced Parents",
    "Drunk Family",
    "Veteran",
    "Depressed"
  ];
  

const Results = () => {


const [incomeSliderValue, setIncomeSliderValue] = useState(50)

const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}

const { riskPrediction } = useRiskPrediction();


	return (
    <ChakraProvider name="results" theme={theme} >
      <VStack spacing='10' bg="brand.200">
        <Box>
          <Heading align="center" size='lg'>Here Are Your Results</Heading>
        </Box>

        

        <VStack bg='brand.100' borderWidth='50px' rounded='lg' borderColor='brand.100' spacingY='8px' divider={<StackDivider borderColor='brand.200'/>}>
            
        <Circle size='300px' bg='tomato' color='white' fontSize='9xl'>
            {riskPrediction}%
        </Circle>
        <div>
        <Heading align="center" size='2xl'>These Are Your 5 Most Influential Factors</Heading>
        <Heading align="center" size='2xl'>to Your Risk of Developing Diabetes</Heading>
        </div>


        </VStack> {/* END OF QUESTIONS */}




      </VStack>
    </ChakraProvider>
	)
};
    
export default Results;



