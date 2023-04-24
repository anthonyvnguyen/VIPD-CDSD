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




const Home = () => {

  //this.state = {_button : <Button isLoading loadingText='loading' colorScheme='teal'></Button>};


const [incomeSliderValue, setIncomeSliderValue] = useState(50)

const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
}

const [alc, setAlc] = React.useState(0)
const handleAlc = (alc) => setAlc(alc)

const [ageSliderValue, setAgeSliderValue] = useState(50)

const [homeSliderValue, setHomeSliderValue] = useState(50)

const [showLoader, setShowLoader] = useState(false)

const onPrediction = () => {
    setShowLoader(true)
    setTimeout(() => setShowLoader(false), 1000)
  };


	return (
    <ChakraProvider name="home" theme={theme} >
      <VStack spacing='10' bg="brand.200">
        <Box>
          <Heading align="center" size='lg'>Social Determinants</Heading>
          <Heading align="center" size='2xl'>Analyze Your Risk of Diabetes</Heading>
        </Box>

        

        <VStack bg='brand.100' borderWidth='40px' rounded='lg' borderColor='brand.100' spacingY='8px' divider={<StackDivider borderColor='brand.200'/>}>
            
            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What race or ethnicity best describes you?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' >
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='1'>American Indian or Alaskan Native</Radio>
                        <Radio value='2'>Asian / Pacific Islander</Radio>
                        <Radio value='3'>Black or African American</Radio>
                        <Radio value='4'>Hispanic</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='5'>White / Caucasian</Radio>
                        <Radio value='6'>Hispanic</Radio>
                        <Radio value='7'>Multiple / Other</Radio>
                        </VStack>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    What is your marital status?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16'>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='1'>Single</Radio>
                        <Radio value='2'>Married</Radio>
                        </VStack>
                        <VStack spacing='24px' align='stretch'>
                        <Radio value='3'>Divorced</Radio>
                        <Radio value='4'>Widowed</Radio>
                        </VStack>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            
            <FormControl as='fieldset'>
                <VStack align='stretch' spacing='30px'>
            <FormLabel as='legend' htmlFor={null}>
                    Income Level?
                </FormLabel>
                <Slider aria-label='s' onChange={(val) => setIncomeSliderValue(val)}>
                    <SliderMark value={0} {...labelStyles}>
                    {"<"}30k
                    </SliderMark>
                    <SliderMark value={25} {...labelStyles}>
                    31k-55k
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                    56k-100k
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                    100k-200k
                    </SliderMark>
                    <SliderMark value={100} {...labelStyles}>
                    {">"}200k
                    </SliderMark>
                    <SliderMark
                    value={incomeSliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                    >
                    {incomeSliderValue * 2}k
                    </SliderMark>
                    <SliderTrack>
                    <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <FormHelperText>Please Indicate</FormHelperText>
                </VStack>
            </FormControl>

            <FormControl as='fieldset'>
            <VStack align='stretch' spacing='15px'>
                <FormLabel as='legend' htmlFor={null}>
                    Alcohol Intake
                </FormLabel>
                <Flex>
                    <NumberInput maxW='100px' mr='2rem' max={30} value={alc} onChange={handleAlc}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Slider
                        flex='1'
                        focusThumbOnChange={false}
                        value={alc}
                        onChange={handleAlc}
                    >
                        <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb fontSize='sm' boxSize='32px' children={alc} />
                    </Slider>
                </Flex>
                <FormHelperText>Weekly</FormHelperText>
                </VStack>
            </FormControl>
            
            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Birth-given Sex?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Male</Radio>
                        <Radio value='2'>Female</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Gender?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Male</Radio>
                        <Radio value='2'>Female</Radio>
                        <Radio value='3'>Non-binary</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
            <VStack align='stretch' spacing='20px'>
                <FormLabel as='legend' htmlFor={null}>
                        Age?
                    </FormLabel>
                    <Slider aria-label='ageSlider' onChange={(val) => setAgeSliderValue(val)}>

                        <SliderMark
                        value={ageSliderValue}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
                        >
                        {ageSliderValue}
                        </SliderMark>
                        <SliderTrack>
                        <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                <FormHelperText>Please Indicate</FormHelperText>
            </VStack>
            </FormControl>

            <FormControl as='fieldset'>
                <FormLabel as='legend' htmlFor={null}>
                    Living Environiment?
                </FormLabel>
                <RadioGroup defaultValue='1'>
                    <HStack spacing='16' > 
                        <Radio value='1'>Rural</Radio>
                        <Radio value='2'>Urban</Radio>
                        <Radio value='3'>Suburban</Radio>
                    </HStack>
                </RadioGroup>
                <FormHelperText>Select Only One</FormHelperText>
            </FormControl>

            <FormControl as='fieldset'>
            <VStack align='stretch' spacing='30px'>
                <FormLabel as='legend' htmlFor={null}>
                    Estimated Price of Home?
                </FormLabel>
                <Slider aria-label='s' onChange={(val) => setHomeSliderValue(val)}>
                    <SliderMark value={0} {...labelStyles}>
                    {"<"}50k
                    </SliderMark>
                    <SliderMark value={25} {...labelStyles}>
                    400k
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                    1 mil
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                    2 mil
                    </SliderMark>
                    <SliderMark value={100} {...labelStyles}>
                    {">"}2 mil
                    </SliderMark>
                    <SliderMark
                    value={homeSliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                    >
                    {homeSliderValue * 2}k
                    </SliderMark>
                    <SliderTrack>
                    <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <FormHelperText>Select Only One</FormHelperText>
            </VStack>
            </FormControl> 
        </VStack> {/* END OF QUESTIONS */}



        <Button isLoading={showLoader} loadingText='Predicting...' as='button' colorScheme='green' size='md' onClick={onPrediction}>
          Make Prediction
        </Button>


      </VStack>
    </ChakraProvider>
	)
};
    
export default Home;



