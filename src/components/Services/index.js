import React from 'react'
import Icon1 from '../../images/boxing.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Boxing Mastery</ServicesH2>
          <ServicesP>
            Learn expert boxing techniques, build strength, and improve fitness
            with our guided training sessions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>High-Intensity Training</ServicesH2>
          <ServicesP>
            Elevate your fitness with intense sessions combining boxing drills,
            cardio, and strength exercises.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Personalized Coaching</ServicesH2>
          <ServicesP>
            Get one-on-one coaching tailored to your needs, optimizing your
            training for maximum results.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
