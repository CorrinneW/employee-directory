import React from "react";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


function SearchFilter(props) {
    //open and close filter menu
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                    Filter results by Location:
                </ListSubheader>
            }
        >
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Select State" />
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" onClick={handleClick}>
                    {props.locations.map(state => (
                        <ListItem
                            button
                            onClick={props.handleFilter}

                        >
                            <ListItemText>
                                {state}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </List>
    )
}

export default SearchFilter;