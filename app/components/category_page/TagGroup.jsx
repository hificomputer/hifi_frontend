import React from 'react';
import {
    Typography, FormGroup, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TagGroup = ({ title, tags }) => {
    return (
        <Accordion
            defaultExpanded={true}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography
                    variant='h6'
                    color="text.primary"
                    fontSize="1.1rem"
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup >
                    {
                        tags.map(tag => (
                            <FormControlLabel key={tag.id} name='availibility' control={<Checkbox />} label={tag.short_title || tag.title} />
                        ))
                    }
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    )
}

export default TagGroup;