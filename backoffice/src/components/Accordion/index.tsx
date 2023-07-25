import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
           Felipe
          </Typography>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
           Felipe@gmail.com
          </Typography>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
           999999999
          </Typography>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
           Transcrição
          </Typography>
          <Typography sx={{ width: '20%', flexShrink: 0 }}>
           25/2005/1999
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            TABELA
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}