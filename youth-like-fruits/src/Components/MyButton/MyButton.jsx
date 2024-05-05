
import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function MyButton(props) {
    const label = props.label;
    const directory = props.directory;
    const normalColor = props.normalColor;
    const hoverColor = props.hoverColor;
    const paddingWidth = props.paddingWidth;
    const paddingHeight = props.paddingHeight;
    const minimumWidth = props.minimumWidth;
    return (
        <Box sx={{ marginRight: 1 }}>
            <Link to = {directory}>
                <Button
                sx={{
                    backgroundColor: normalColor,
                    textTransform: 'none',
                    '&:hover': { backgroundColor: hoverColor },
                    padding: `${paddingWidth}px ${paddingHeight}px`,
                    minWidth: `${minimumWidth}px`,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
                variant="contained"
                color="primary"
                >
                {label}
                </Button>
            </Link>
        </Box>
    )
}

MyButton.propTypes = {
    label: PropTypes.string,
    directory: PropTypes.string,
    normalColor: PropTypes.string.isRequired,
    hoverColor: PropTypes.string,
    paddingWidth: PropTypes.number,
    paddingHeight: PropTypes.number,
    minimumWidth: PropTypes.number,
};

MyButton.defaultProps = {
    label: "",
    directory: "/",
    normalColor: '#000',
    hoverColor: '#222222',
    paddingWidth: 8,
    paddingHeight: 25,
    minimumWidth: 140,
};

export default MyButton