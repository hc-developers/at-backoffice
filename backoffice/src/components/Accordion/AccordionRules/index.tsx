import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import BolaVerde from '../../../assets/BolaVerde.svg'
import SetaDireita from '../../../assets/setaDireita.svg'
import fontSizes from '../../../Theme/fontSize';
import { theme } from '../../../Theme/Colors';
import { Box } from '@mui/system';
import { Button } from '@mui/base';
import { BoxRow, AccordionRulesStyle, SumaryAccordion, BtnRules } from './style';



export default function AccordionRules() {

  return (
    <div>
      <AccordionRulesStyle>
        <SumaryAccordion
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img src={BolaVerde} />
          <BoxRow>
          <Typography sx={{ width: '80%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            TRANSCRIÇÃO
          </Typography>
            <p>0-10</p>
          </BoxRow>

          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            Fixo
          </Typography>
        
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            2
          </Typography>
            <BoxRow>
           <p>R$ 97</p> 
          <p> 4 dias</p>
            </BoxRow>
           <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
                -
           </Typography>

           <BoxRow>
            <p sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            R$ 290
          </p>
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            20 dias
          </Typography>
            </BoxRow>
            <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            x .145
          </Typography>
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            x 1.2
          </Typography>
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            x 1.5
          </Typography>
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            Editar
          </Typography>
          <BtnRules>
          <img src={SetaDireita} />
          </BtnRules>
        </SumaryAccordion>
      </AccordionRulesStyle>
    </div>
  );
}