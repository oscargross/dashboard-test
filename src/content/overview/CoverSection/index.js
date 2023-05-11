import React, { useState } from 'react';
import Video from '../videos/video1.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../overviewElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Gateway dos gateways de pagamento</CoverH1>
        <CoverP>Receba com a taxa mais baixa do mercado, em todas as formas de pagamento.</CoverP>
        <CoverBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Comece já {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
