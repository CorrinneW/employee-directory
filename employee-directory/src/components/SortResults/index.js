import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


function SortResults(props) {
    const [sort, setSort] = React.useState([]);
    const handleChange = event => {
        setSort(event.target.value)
    };

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Sort By:</FormLabel>
                <RadioGroup aria-label="sort" name="sort" value={sort} onChange={handleChange}>
                    <FormControlLabel value="firstname" control={<Radio onClick={props.handleSort} />} label="FirstName" />
                    <FormControlLabel value="lastname" control={<Radio onClick={props.handleSort} />} label="LastName" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default SortResults