import { FitnessCenterOutlined, AutoGraphOutlined, SchoolOutlined } from '@mui/icons-material'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import {useState, React } from 'react'

function BottomNav() {
    const [value, setValue] = useState(null)
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label='Learn' icon={<SchoolOutlined />} />
                <BottomNavigationAction label='Workout' icon={<FitnessCenterOutlined />} />
                <BottomNavigationAction label='Progress' icon={<AutoGraphOutlined />} />

            </BottomNavigation>
        </Paper>)
}

export default BottomNav