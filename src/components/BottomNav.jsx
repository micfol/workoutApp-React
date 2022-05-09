import { FitnessCenterOutlined, AutoGraphOutlined, SchoolOutlined } from '@mui/icons-material';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {useState, React } from 'react';
import { Link } from '@mui/material';

function BottomNav() {
    const [value, setValue] = useState(null)
    return (
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label='Learn' href="/education" icon={<SchoolOutlined />} />
                <BottomNavigationAction label='Workout' href="/workout-entry" icon={<FitnessCenterOutlined />} />
                <BottomNavigationAction label='Progress' href="/progress" icon={<AutoGraphOutlined />} />

            </BottomNavigation>
        </Paper>)
}

export default BottomNav