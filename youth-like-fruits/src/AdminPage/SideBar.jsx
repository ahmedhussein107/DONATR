
import React from 'react'

function SideBar() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <p>This is Text</p>
        </div>
    )
}

export default SideBar