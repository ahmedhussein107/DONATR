
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
    const minimumHeight = props.minimumHeight;
    const fontWeight = props.fontWeight;
    const fontSize = props.fontSize;
    const marginLeft = props.marginLeft;
    const marginTop = props.marginTop;
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
                    minHeight: minimumHeight == null ? null : `${minimumHeight}px`,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    fontWeight: fontWeight,
                    fontSize: fontSize,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                    alignProperty: 'center'
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
    minimumHeight: PropTypes.number,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    marginLeft: PropTypes.string,
    marginTop: PropTypes.string
};

MyButton.defaultProps = {
    label: "",
    directory: "/",
    normalColor: '#000',
    hoverColor: '#222222',
    paddingWidth: 8,
    paddingHeight: 25,
    minimumWidth: 140,
    minimumHeight: null,
    fontWeight: '500',
    fontSize: '18px',
    marginLeft: '0px',
    marginTop: '0px'
};

export default MyButton