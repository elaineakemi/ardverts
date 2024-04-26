import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views-react-18-fix'
import { Box, MobileStepper, Button, IconButton, Stack } from '@mui/material'
import {
  Favorite as FavoriteIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@mui/icons-material'

const ImageSlider = ({ images }) => {
  const navigate = useNavigate()

  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ maxWidth: 'sm', flexGrow: 1 }}>
      <Stack direction="row" justifyContent="space-between">
        <Button size="small" onClick={() => navigate(-1)}>
          <KeyboardArrowLeftIcon />
          BACK
        </Button>
        <IconButton aria-label="Favorite" edge="start" color="tertiary">
          <FavoriteIcon />
        </IconButton>
      </Stack>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 'sm',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={new URL(step.imgPath, import.meta.url).href}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
            Prev
          </Button>
        }
      />
    </Box>
  )
}

export { ImageSlider }
