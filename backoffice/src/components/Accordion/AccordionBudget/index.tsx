import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconApproved from '../../../assets/aprovedPerson.svg'
import fontSizes from '../../../Theme/fontSize';
import { theme } from '../../../Theme/Colors';
import {  AccordionSummary, Box } from '@mui/material';
import { AccordionBox, AccordionBudgetStyle, AccordionBudgetSummary } from './style';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <AccordionBudgetStyle expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionBudgetSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <AccordionBox>
          <img src={IconApproved} />
          <Typography sx={{ width: '10%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            Felipe
          </Typography>
          <Typography sx={{ width: '25%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            Felipe@gmail.com
          </Typography>
          <Typography sx={{ width: '20%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            (42)999067378
          </Typography>
          <Typography sx={{ width: '15%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md }}>
            Transcrição
          </Typography>
          <Typography sx={{ width: '35%', flexShrink: 0, fontSize: fontSizes.backOffice.h3.md, color: theme.palette.purple[200] }}>
            25/2005/1999
          </Typography>
          {expanded === 'panel1' ? (
            <Typography sx={{  fontSize: fontSizes.backOffice.h3.md, color: theme.palette.purple[400] }}>
              Fechar
            </Typography>
          ) : (
            <Typography sx={{ fontSize: fontSizes.backOffice.h3.md, color: theme.palette.purple[400] }}>
              Ver mais
            </Typography>
          )}
          <ExpandMoreIcon />
          </AccordionBox>

        </AccordionBudgetSummary>
      </AccordionBudgetStyle>

      {expanded === 'panel1' && (
        <div>
          <Typography>TABELA</Typography>
        </div>
      )}
    </div>
  );
}

